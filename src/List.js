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
            
        </article>
        )

    })}
      </div>
  
  )
}

export default List