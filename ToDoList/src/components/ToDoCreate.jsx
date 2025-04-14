
import '../App.css'

import { SearchOutlined } from '@ant-design/icons';
import { Button, Divider, Flex, Radio, Space, Tooltip } from 'antd';
import React, { useState } from 'react';
function ToDoCreate({ onCreateTodo }) {
    const [position, setPosition] = useState('end');

    const [newTodo, setNewTodo] = useState('');


    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();

    }
    return (

        <div className='todo-create' >
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input' type="text" placeholder='Todo giriniz' />

            <Flex gap="small" wrap>
                <Button onClick={createTodo} type="primary">Ekle</Button>
            </Flex>



            <Flex gap="small" vertical>
                <Flex wrap gap="small">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                </Flex>
            </Flex>




        </div>

    )
}

export default ToDoCreate;


