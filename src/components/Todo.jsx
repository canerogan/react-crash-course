import './Todo.css'
import Modal from './Modal.jsx';

function Todo({ title, onTodoDelete}) {

    return (
        <div className="todo">
            <p>{title}</p>
            <button onClick={onTodoDelete}>Delete</button>
            
        </div>
    )
}

export default Todo