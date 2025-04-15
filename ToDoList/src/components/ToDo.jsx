import '../App.css';
import { DeleteOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

function ToDo({ todo, isHighlighted, onRemoveTodo, onToggleComplete, onCancelTodo }) {
    const { id, content, isCompleted, isCancelled } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    };

    const toggleComplete = () => {
        onToggleComplete(id);
    };

    const cancelTodo = () => {
        onCancelTodo(id);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            border: isHighlighted ? '2px solid blue' : '1px solid lightgrey',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: isCancelled ? '#f8d7da' : isCompleted ? '#d4edda' : 'white',
            color: isCancelled ? 'red' : 'black',
            textDecoration: isCancelled ? 'line-through' : 'none',
        }}>
            <div>{content}</div>
            <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
                <DeleteOutlined onClick={removeTodo} />
                <CheckOutlined onClick={toggleComplete} />
                <CloseOutlined onClick={cancelTodo} />
            </div>
        </div>
    );
}

export default ToDo;
