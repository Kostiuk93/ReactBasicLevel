
import './employeers-add-form.css'

const EmployeersAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form action="" 
                className="add-form d-flex">
                <intput type="text" 
                    className="form-control new-post-lebel"
                    palceholder="Как его зовут?"/>
                <intput type="number" 
                    className="form-control new-post-lebel"
                    palceholder="З/П в $"/>
                
                <button type="submit"
                    className="btn btn-outline-light">Добавить</button>
                </form>
        </div>
    )
}

export default EmployeersAddForm