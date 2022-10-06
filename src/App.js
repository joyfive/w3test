import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className='app'>
      <form className='input-box'>
        <input type='text' className='input-field' onChange={onChange} />
        <button type='submit' className='input-btn' onClick={onSubmit} > 추가하기 </button>
      </form>
      <div className='list-wrap'>
        <h1>Todo List</h1>
        <hr></hr>
        <ul className='todo-list'>
          <li className='todo-item'>react를 배워봅시다.</li>
          <li className='todo-item'>useState를 배워봅시다.</li>
          <li className='todo-item'>자바스크립트를 배워봅시다.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
