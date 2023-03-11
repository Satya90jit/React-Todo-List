import React from 'react'
import './scss/todo.scss';


function TodoItem({items , editItem , deleteItem}) {
  return ( <div className="showItems">
  {items?.map((elm) => {
    return (
      <div className="eachItem" key={elm.id}>
        <h3>{elm.name}</h3>
    <div className="button">

        <button className='editbtn btn' onClick={() => editItem(elm.id)}>Edit</button>
        <button className='deletebtn btn' onClick={() => deleteItem(elm.id)}>Delete</button>
    </div>
      </div>
    );
  })}
</div>
  )
}

export default TodoItem