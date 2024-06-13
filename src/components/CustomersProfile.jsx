import React from 'react'
import '../Style/CustomorsProfile.css'
import Header from './Header'
import { NavLink } from 'react-router-dom'
function CustomersProfile() {
  return (
    <div className='CustomorsProfile'>
        <Header/>
        <div className='CustomersProfile-content'>
            <div className='CustomersProfile-content1'>
                <div className='CustomersProfile-grid'>
                <h2>
                  Имя:
                </h2>
                <h3>
                  John
                </h3>
                </div>
                <div className='CustomersProfile-grid'>
                <h2>
                  Фамилия:
                </h2>
                <h3>
                  Doe
                </h3>
                </div>
                <div className='CustomersProfile-grid'>
                <h2>
                  Отчество:
                </h2>
                <h3>
                  Doe
                </h3>
                </div>
                <div className='CustomersProfile-grid'>
                <h2>
                  Телефон номер:
                </h2>
                <h3>
                  980205656
                </h3>
                </div>
                <div className='CustomersProfile-grid'>
                <h2>
                  Время создания:
                </h2>
                <h3>
                  05-08-2024
                </h3>
                </div>
            </div>
            <div className='CustomersProfile-content2'>
              <div className='CustomersProfile-grid'>
              <h2>
                  Контракты:
                </h2>
                <h3>
                    3
                </h3>
              </div>
              <div className='CustomersProfile-grid2'>
                  <NavLink to="/ContractEdit">
                      Контракт 2
                  </NavLink>
                  <NavLink to="/ContractEdit">
                      Контракт 1
                  </NavLink>
                  <NavLink to="/ContractEdit">
                      Контракт 3
                  </NavLink>
              </div>
            </div>
        </div>
    </div>
  )
}

export default CustomersProfile