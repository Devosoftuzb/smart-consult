import React from 'react'
import '../Style/CreateCustomers.css'
import Header from './Header'
function CreateCustomers() {
  return (
    <div className='CreateCustomers'>
        <Header/>
        <div className='CreateCustomers-content'>
            <form>
                <h2>
                    Создать клиента 
                </h2>
                <div  className='CreateCustoers-content-grid'>
                <label htmlFor="name">
                    <h3>
                        Имя 
                    </h3>
                    <input id='name' type="text" />
                </label>
                <label htmlFor="Last_name">
                    <h3>
                        Фамилия
                    </h3>
                    <input id='Last_name' type="text" />
                </label>
                </div>
                <label htmlFor="pasport">
                    <h3>
                        Серия паспорта 
                    </h3>
                    <input id='pasport' type="text" />
                </label>
                <label htmlFor="MFO">
                    <h3>
                        МФО
                    </h3>
                    <input id='MFO' type="text" />
                </label>
                <label htmlFor="tel">
                    <h3>
                        Телефон номера
                    </h3>
                    <input id='tel' type="number" />
                </label>
                <label htmlFor="bank">
                    <h3>
                        Номер карты 
                    </h3>
                    <input id='bank' type="number" />
                </label>
                <label htmlFor="info">
                    <h3>
                        Адресс
                    </h3>
                    <textarea name="" id="info"></textarea>
                </label>
                <button type='submit'>
                    Создать
                </button>
            </form>
        </div>
    </div>
  )
}

export default CreateCustomers