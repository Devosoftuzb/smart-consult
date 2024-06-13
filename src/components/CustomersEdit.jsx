import React, {useState} from 'react'
import '../Style/CustomersEdit.css'
import Header from './Header'
function CustomersEdit() {
    const [isActive, setActive] = useState(null)
    const ClikcButton = ()=>{
        setActive(!isActive)
    }
  return (
    <div className='CustomersEdit'>
    <Header/>
    <div className='CustomersEdit-content'>
    <form>
                <h2>
                    Создать клиента 
                </h2>
                <div  className='CreateCustoers-content-gridd'>
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
                <label htmlFor="Last_name2">
                    <h3>
                        Отчество
                    </h3>
                    <input id='Last_name2' type="text" />
                </label>
                <label htmlFor="Tel">
                    <h3>
                        Номер телефона 
                    </h3>
                    <input id='Tel' type="number" />
                </label>
                </div>
                <div className='CreateCustomers-cuntract'>
                    <h3>
                        Искать контракт 
                    </h3>
                    <label className='CreateCustomers-search'>
                    <div className='CreateCustomers-search-svg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14" /></svg>
                    </div>
                    <input type="text" />
                    </label>
                    <span onClick={ClikcButton} className={`CreateCustomers-cuntract-item ${isActive ? 'CreateCustomers-cuntract-item-start' : ''}`}>
                        Контракт 2
                    </span>
                    <span className='CreateCustomers-cuntract-item2'>
                        Контракт не найден 
                    </span>
                </div>
                <button type='submit'>
                    Создать
                </button>
            </form>
    </div>
</div>
  )
}

export default CustomersEdit