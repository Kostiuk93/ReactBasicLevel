import EmployeersListItem from '../employeers-list-item/employeers-list-item';
import './employeers-list.css';

const EmployeersList = ({data, onDelete, onAdd}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <EmployeersListItem key={id} 
            {...itemProps}
            onDelete={() => onDelete(id)}
            onAdd={() => onAdd(id)}/>
        )
    })

    return (
        <ul className="app-list list-group"> 
            {elements}
        </ul>
    )
}

export default EmployeersList;