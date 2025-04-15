import '../App.css';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';
import React, { useState } from 'react';

function ToDoCreate({ onCreateTodo, onSearch }) {
    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    };

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 9999999999),
            content: newTodo,
            isCancelled: false
        };
        onCreateTodo(request);
        clearInput();
    };

    const handleSearch = () => {
        if (!newTodo.trim()) return; // 🛡️ boşsa veya sadece boşluksa çalışmaz
        onSearch(newTodo);
    };

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                className='todo-input'
                type='text'
                placeholder='Todo giriniz veya arama yapınız'
            />

            <Flex gap='small' wrap>
                <Button onClick={createTodo} type='primary'>Ekle</Button>
                <Tooltip title='Ara'>
                    <Button
                        type='primary'
                        shape='circle'
                        icon={<SearchOutlined />}
                        onClick={handleSearch}
                    />
                </Tooltip>
            </Flex>
        </div>
    );
}

export default ToDoCreate;
