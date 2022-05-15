import './app-filter.css'

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'Все сотрудники', colored: false},
        {name: 'rise', label: 'На повышении', colored: true},
        {name: 'moreThen1000', label: 'З/П больше 1000$', colored: false}
    ]

    const buttons = buttonsData.map(({name, label, colored}) => {
        const active = props.filter === name
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        const styleVariable = colored ? {color: 'red'} : null
        return (
            <button 
            className={`btn ${clazz}`}
            type="button"
            key = {name}
            onClick = {() => props.onFilterSelect(name)}
            style = {styleVariable}
            >

            {label}

            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
            
        </div>
    )
}

export default AppFilter