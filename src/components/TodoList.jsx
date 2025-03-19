import React, { useState, useEffect } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: "", notes: "" });
    const [idTodo, setIdTodo] = useState(() => {
        const savedId = localStorage.getItem('idTodo');
        return savedId ? JSON.parse(savedId) : 0;
    });

    useEffect(() => {
        localStorage.setItem('idTodo', JSON.stringify(idTodo))
    }, [idTodo])

    const handleAdd = (e) => {
        const { name, value } = e.target;
        setNewTodo(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const addNewTodo = () => {
        if (newTodo.title.trim() === "") return;

        const newTodoObj = {
            id: idTodo,
            title: newTodo.title,
            notes: newTodo.notes,
        };

        setTodos([...todos, newTodoObj])
        setIdTodo(prevId => prevId + 1);
        setNewTodo({ title: "", notes: "" });
    }

  return (
    <div>
        <h1>Todos List</h1>
        <table style={{border: '1px solid'}}>
            <thead>
                <th>ID</th>
                <th>Title</th>
                <th>Notes</th>
            </thead>
            <tbody>
            {todos.map(t => (
                <tr key={t.id}>
                    <td>{t.id}</td>
                    <td>{t.title}</td>
                    <td>{t.notes}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <input
            type="text"
            name="title"
            value={newTodo.title}
            onChange={handleAdd}
            placeholder='Enter new todo title'
            style={{marginRight: '10px'}}
        />
        <input
            type="text"
            name="notes"
            value={newTodo.notes}
            onChange={handleAdd}
            placeholder='Enter new todo notes'
        />
        <button onClick={addNewTodo}>Add</button>
    </div>
  )
}

export default TodoList;