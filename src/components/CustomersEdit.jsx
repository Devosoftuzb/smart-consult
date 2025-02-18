import React, { useState, useEffect } from 'react'
import '../Style/CustomersEdit.css'
import Header from './Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";
function CustomersEdit() {
    // const [isActive, setActive] = useState(null)
    // const ClikcButton = ()=>{
    //     setActive(!isActive)
    // }
    // const [isActiveBtn, setActiveBtn] = useState(1)

    // const ButtonClick = (a) => {
    //     setActiveBtn(a)
    // }
    const { id } = useParams()
    const [editItem, setEditItem] = useState({
        id: '',
        name: '',
        passport_series: '',
        phone_number: '',
    })
    useEffect(() => {
        axios.get(`/client/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => {

                const { id, name, passport_series, phone_number, image } = response.data;
                setEditItem({ id, name, passport_series, phone_number, image });
            })
            .catch(error => {
                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            });
    }, [id]);

    const editCustomers = (e) => {
        e.preventDefault();

        // Преобразуем значения в строки
        const data = {
            name: editItem.name ? String(editItem.name) : '',
            passport_series: editItem.passport_series ? String(editItem.passport_series) : '',
            phone_number: editItem.phone_number ? String(editItem.phone_number) : '',
        };

        axios
            .put(`/client/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json', // Устанавливаем тип контента как JSON
                },
            })
            .then((response) => {
                Toastify({
                    text: "Изменено",
                    duration: 3000,
                    gravity: "top", // `top` or `bottom`
                    position: "right", // `left`, `center` or `right`
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                }).showToast();
            })
            .catch((error) => {
                Toastify({
                    text: "Ошибка!",
                    duration: 3000,
                    gravity: "top",
                    position: "right",
                    backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
                }).showToast();

                if (error.response && error.response.status === 401) {
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                }
            });
    };


    return (
        <div className='CustomersEdit'>
            <Header />
            <div className='CustomersEdit-content'>
                <div className='CreateCust'>
                    <form onSubmit={editCustomers}>
                        <h2>
                            Изменить клиента
                        </h2>
                        <div className='CreateCustoers-content-gridd'>
                            <label htmlFor="name">
                                <h3>
                                    Имя
                                </h3>
                                <input
                                    value={editItem.name}
                                    onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
                                    id='name' type="text" />
                            </label>
                            <label htmlFor="passport">
                                <h3>
                                    Пасспорт
                                </h3>
                                <input
                                    value={editItem.passport_series}
                                    onChange={(e) => setEditItem({ ...editItem, passport_series: e.target.value })}
                                    id='passport' type="text" />
                            </label>
                            <label htmlFor="Tel">
                                <h3>Номер телефона</h3>
                                <input
                                    value={editItem.phone_number || ''} // undefined bo‘lsa, bo‘sh string qo‘yiladi
                                    onChange={(e) => {
                                        const value = e.target.value.trim(); // Trim qilib yuborish
                                        if (/^\+?[0-9]*$/.test(value)) { // "+" va raqamlarni tekshirish
                                            setEditItem(prevState => ({ ...prevState, phone_number: value }));
                                        }
                                    }}
                                    id="Tel"
                                    type="text"
                                />
                            </label>


                            {/* <label htmlFor="info">
                                <h3>Адрес</h3>
                                <textarea name="" id="info"></textarea>
                            </label> */}
                        </div>
                        <button type='submit'>
                            Изменить
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CustomersEdit