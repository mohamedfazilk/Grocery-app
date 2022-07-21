import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa' 

const List = ({items}) => {
  return (
      <div className="grocery-list">
            <h2>List</h2>
      {items.map((items)=>{
        const {id,title} = item;
        return(
        <article className='grocery-item' key={id}>
            <p className="title">{title}</p>
            <div className="button-container">
                <button type='button' className='edit-btn'>
                    <FaEdit/>
                </button>
                <button type='button' className='delete-btn'>
                    <FaTrash/>
                </button>
            </div>
        </article>
        )

    })}
      </div>
  
  )
}

export default List