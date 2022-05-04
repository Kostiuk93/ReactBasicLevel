import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Иван Пупкин',salary: 600, increase: false, id: 1},
                {name: 'Александр Иванов',salary: 1000, increase: true, id: 22},
                {name: 'Дарья Давина',salary: 700, increase: false, id: 3}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(elem => elem.id === id);

            // const before = data.slice(0, index);
            // const after = data.slice(index +1)

            // const newArr = [...before, ...after]
            // return {
            //     data: newArr
            // }

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render(){
        return (
            <div className="app">
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}/>
                <EmployeersAddForm/>
                
            </div>
        )
    }
}

export default App;