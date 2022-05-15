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
            ],
            term: '',
            filter:'all'
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
            // чтобы не добавлялась пустая строка
            if(newItem.name === '' && newItem.salary === ''){
                return
            }
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    }

    // Фильтрация списка (ПОИСК)
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    // Фильтр
    filterPost = (items, filter) => {
        switch(filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state
        const employees = this.state.data.length // общее колличество сотрудников
        const increased = this.state.data.filter(item => item.increase).length // колличетсво сотрудников, идущих на повышение
        const visibleData = this.filterPost(this.searchEmp(data, term), filter) //для фильтра и поиска
        return (
            <div className="app">
                <AppInfo
                    employees={employees}
                    increased={increased}
                />

                <div className="search-panel">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                        />
                </div>

                <EmployeersList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeersAddForm
                    onAdd={this.addItem}/>
                
            </div>
        )
    }
}

export default App;