import React, { useState } from 'react';
import '../Style/CreateContracts.css';
import Header from './Header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import './style.css';

function CreateContracts() {
  const [isActive, setActive] = useState(null)
  const activeCon = (a)=>{
    setActive(a)
  }
  return (
    <div className='CreateContracts'>
      <Header/>
      <div className='CreateContracts-content'>
       <div className='CreateContracts2'>
        <div className='CreateContract-saidbar'>
          <button className={isActive === null ? 'ConActive' : ''}
            onClick={()=> activeCon(null)}
          >
            1 контракт 
          </button>
          <button className={isActive === 1 ? 'ConActive' : ''}
            onClick={()=> activeCon(1)} >
            2 контракт 
          </button>
          <button  className={isActive === 2 ? 'ConActive' : ''}
            onClick={()=> activeCon(2)}>
            3 контракт 
          </button>
        </div>
       <form>
          <h2>Создать Контракт</h2>
          <label htmlFor="name">
            <h3>Ф.И.О</h3>
            <input id='name' type="text" />
          </label>
          <label htmlFor="pasport">
            <h3>Серия паспорта</h3>
            <input id='pasport' type="text" />
          </label>
          <label htmlFor="tel">
            <h3>Телефон номера</h3>
            <input id='tel' type="number" />
          </label>
          <label htmlFor="info">
            <h3>Информация</h3>
            <textarea name="" id="info"></textarea>
          </label>
          <button type='submit'>Создать</button>
        </form>
       </div>
        <div className='CreateContracts-text'>
        <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello </p>"
        onReady={ ( editor ) => {
          console.log( "CKEditor5 React Component is ready to use!", editor );
        } }
        onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
        } }
      />
        </div>
      </div>
    </div>
  );
}

export default CreateContracts;
