import React from 'react'
import '../Style/CotractEdit.css'
import Header from './Header';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
function ContractEdit() {
  return (
    <div className='ContractEdit'>
      <Header/>
      <div className='ContractEdit-content'>
        <form>
          <h2>Изменить Контракт</h2>
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
        <div className='ContractEdit-text'>
        <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
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
  )
}

export default ContractEdit