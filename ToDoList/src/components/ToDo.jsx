import { IoTrashBinSharp } from "react-icons/io5";
import '../App.css';
import { MdDoneOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { DeleteOutlined } from '@ant-design/icons';
import { CheckOutlined } from '@ant-design/icons';
import { CloseOutlined } from '@ant-design/icons';


function ToDo({ todo, onRemoveTodo }) {

    const { id, content } = todo;

    const removeTodo = () => {
        onRemoveTodo(id);
    }
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '10px' }}>
            <div>
                {content}
            </div>
            <div>
                <DeleteOutlined onClick={removeTodo} />
                <CheckOutlined />
                <CloseOutlined />

            </div>

        </div>
    )
}

export default ToDo