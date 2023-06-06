const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className='input-wrapper'>
            <input
                type='text'
                name='todo'
                placeholder='Введіть нове завдання'
                value={todo} onChange={(e) => { setTodo(e.target.value) }}></input>
        
            <button className='add-button'
                // Нарешті, ми передаємо цю функцію обробник onClickкнопки Add. 

                onClick={addTodo}>Додати</button>
        </div>
    );
};

export default TodoInput