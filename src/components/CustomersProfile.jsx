import React, { useEffect, useState } from 'react'
import '../Style/CustomorsProfile.css'
import Header from './Header'
import {  useParams, NavLink } from 'react-router-dom'
import axios from '../Service/axios'
import CONFIG from '../Service/config'
function CustomersProfile() {
  const [data, setData] = useState([])
  const {id} = useParams()
  const [data2, setData2] = useState([])
  const [contractNames, setContractNames] = useState([]);
  useEffect(()=>{
    const getCustomers = () =>{
      axios.get(`/client/${id}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
      }
      })
      .then((response)=>{
        setData(response.data)
        console.log(response.data);
        setData2(response.data.contract)
        const contractIds = response.data.contract.map((contract) => contract.id);
        fetchContractNames(contractIds);
      })
      .catch((error)=>{
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login'; 
      }
      })
    }

    const fetchContractNames = (contractIds) => {
      Promise.all(contractIds.map((contractId) => 
        axios.get(`/contract/${contractId}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((response) => response.data.category_contract_id)
      ))
      .then((names) => {
        setContractNames(names);
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');
          window.location.href = '/login'; 
      }
      });
    };
    getCustomers()
  },[id])
  
  const getContractType = (name) => {
    switch(name) {
      case 1:
        return 'Физический';
      case 2:
        return 'Юридический';
      case 3:
        return 'Тендер';
      default:
        return 'неизвестный тип';
    }
  };
  return (
    <div className='CustomorsProfile'>
    <Header />
    <div className='CustomersProfile-content'>
      <div className='CustomersProfile-content1'>
        <div className='CustomersProfile-foto'>
          <img
            className='customersfoto'
            src={CONFIG.API_URL + data.image}
            alt='Profile'
            onError={(e) => {
              e.target.onerror = null
              e.target.src =
                'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg='
            }}
          />
        </div>
        <div className='CustomersProfile-content13'>
          <div className='CustomersProfile-grid'>
            <h2>Контракты:</h2>
            <h3>{data2.length}</h3>
          </div>
          <div className='CustomersProfile-grid2'>
            {data2.map((item, index) => (
              <NavLink key={item.id} to={`/contractPr/${item.id}`}>
                {getContractType(contractNames[index])}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className='CustomersProfile-content2'>
        <div className='CustomersProfile-grid'>
          <h2>Имя:</h2>
          <h3>{data.name}</h3>
        </div>
        <div className='CustomersProfile-grid'>
          <h2>Телефон номер:</h2>
          <h3>{data.phone_number}</h3>
        </div>
        <div className='CustomersProfile-grid'>
          <h2>Паспорт:</h2>
          <h3>{data.passport_series}</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomersProfile