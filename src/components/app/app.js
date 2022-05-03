// 1. У компонентаможет быть внутреннее состояние, которое динамически меняется
// 2. Состояние может быть, как у классовых, так и у функциональных компонентов
// 3. State (состояние) напрямую менять нельзя, только через команду setState()
// 4. setState() и вообще state - это асинхронная операция. Если нужна точность, то необходимо передавать команду через колбэк функцию
// 5. В команде setState() мы можем менять только те свойства объекта состояния, которые нам нужны. Остальные останутся без изменений

import { Component } from 'react';

import './app.css';

class WhoAmI extends Component {
    constructor(props){
        super(props);
        this.state = {
            years: 27,
            textNext: '+',
            textPrev: '-'
        }
    }

    nextYear = () => {
        this.setState({
            years: this.state.years + 1
        })
    }

    prevYear = () => {
        this.setState(state => ({
            years: state.years - 1
        }))
    }

    render() {
        const {name, surname, link} =this.props
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.textNext}</button>
                <button onClick={this.prevYear}>{this.state.textPrev}</button>
                <h1>My name is {name}, surmane - {surname.firstSurname}, age - {this.state.years}</h1>
                <a href={link}>My profile</a>
            </div>
        )
    }
}

function App() {
    return (
        <div className="app">
            <WhoAmI name='John'
                    surname={{firstSurname: 'Smith'}}
                    link="https://yandex.ru/"/>            
            <WhoAmI name='Alex'
                    surname={{firstSurname: 'Ivanov'}}
                    link="https://yandex.ru/maps/"/>            
        </div>
    );
}

// import AppInfo from '../app-info/app-info';
// import SearchPanel from '../search-panel/search-panel';
// import AppFilter from '../app-filter/app-filter';
// import EmployeersList from '../employeers-list/employeers-list';
// import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

// import './app.css';

// function App() {

//     const data =[
//         {name: 'Иван Пупкин',salary: 600, increase: false, id: 1},
//         {name: 'Александр Иванов',salary: 1000, increase: true, id: 2},
//         {name: 'Дарья Давина',salary: 700, increase: false, id: 3},
//     ]

//     return (
//         <div className="app">
//             <AppInfo/>

//             <div className="search-panel">
//                 <SearchPanel/>
//                 <AppFilter/>
//             </div>

//             <EmployeersList data={data}/>
//             <EmployeersAddForm/>
            
//         </div>
//     );
// }

export default App;