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
                {name: 'Иван Пупкин',salary: 600, increase: false, rise: true, id: 1},
                {name: 'Александр Иванов',salary: 1000, increase: true, rise: false, id: 22},
                {name: 'Дарья Давина',salary: 700, increase: false, rise: false, id: 3}
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleIncrease = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id)

        //     const old = data[index]
        //     const newItem = {...old, increase: !old.increase}
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return {
        //         data: newArr
        //     }
        // })
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase}
                }
                return item
            })
        }))
    }
    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id)

            const old = data[index]
            const newItem = {...old, rise: !old.rise}
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        })
    }

    onInfoAll = (data) => {
        this.setState(({data}) => {
            const arrAll = data.length
            return {
                arrAll
            }
        })
    }

    render(){
        const employees = this.state.data.length // общее колличество сотрудников
        const increased = this.state.data.filter(item => item.increase).length // колличетсво сотрудников, идущих на повышение
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeersList 
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                    />
                <EmployeersAddForm
                    onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;