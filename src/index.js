import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

                                //тег       имя класса             текст
// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!'); // JS

const text = 'Hello World'

const elem = (
  // Должен иметь хотя бы одного родителя
  // class и for зарезервированы системой.
  // Необходимо использовать className и htmlFor соответственно
  // в {} можно помещать все, кроме объектов
  <div> 
    <h2 className='text'>{text}</h2> 
    <input type="text" />
    <label htmlFor=''></label>
    <button tabIndex={0}>Click</button>
  </div>
); // JSX

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
