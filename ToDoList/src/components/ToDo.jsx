import { IoTrashBinSharp } from "react-icons/io5";
import '../App.css';
import { MdDoneOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { DeleteOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';


function ToDo({ todo, onRemoveTodo, onToggleComplete }) {

    const { id, content, isCompleted } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }
    const toggleComplete = () => {
        onToggleComplete(id);
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px', backgroundColor: isCompleted ? '#d4edda' : 'white', // yeşil ton

        }}>
            <div>
                {content}
            </div>
            <div style={{ display: 'flex', gap: '10px', cursor: 'pointer' }}>
                <DeleteOutlined onClick={removeTodo} />
                <CheckOutlined onClick={toggleComplete} />
                <CloseOutlined />

            </div>

        </div>
    )
}

export default ToDo