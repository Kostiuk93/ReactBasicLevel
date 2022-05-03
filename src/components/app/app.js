import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeersList from '../employeers-list/employeers-list';
import EmployeersAddForm from '../employeers-add-form/employeers-add-form';

import './app.css';

function App() {

    const data =[
        {name: 'Иван Пупкин',salary: 600, increase: false, id: 1},
        {name: 'Александр Иванов',salary: 1000, increase: true, id: 2},
        {name: 'Дарья Давина',salary: 700, increase: false, id: 3},
    ]

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeersList data={data}/>
            <EmployeersAddForm/>
            
        </div>
    );
}

export default App;