import React, { useState } from 'react'
import List from './List';
import Alert from './Alert';

function App() {
  
  const [name, setName] = useState('')
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState (false)
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
    show: false, 
    msg:'',
     type:'' });   // alert is an object showing these things

  const handleSubmit =(e)=>{
    e.preventDefault();

    if(!name){
      //display alert by using showAlert(by replacing setAlert)
      showAlert(true, 'danger', 'please enter the value')
    }
    else if(name && isEditing){
      //deal with edit
      setList(list.map((item)=>{
        if(item.id === editId){
          return {...item, title:name}
        }
        return item
      }))
    }

    else{
      //show alert
      const newItem = {id: new Date().getTime().toString(),
      title:name}
      showAlert(true,'success', 'Your item is successfully added')
      setList([...list, newItem])
      setName('')
   
    }
  }

    //separate function for easy access of alert, then passing attributes into setAlert  
    const showAlert = (show = false, type='', msg='')=>{
      setAlert({show,type,msg})
    }

    //clearing all items in the list    
    const clearAll = ()=>{
      showAlert(true, 'danger', 'empty list')
      setList([])
    }


    //removing the single items in the list
    const removeItem =(id)=>{
      showAlert(true, 'danger', 'item has been deleted')
      setList(list.filter((item) => item.id !== id))
    }

    //editing the item in the list by checking item(id) and editing id is same
    const editItem = (id) =>{
     const specificItem = list.find((item)=>item.id === id);
     setIsEditing(true)
      setEditId(id)
      setName(specificItem.title)
    }
  

  return(

    <section className='section-center'>

      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert}
       list={list} removeAlert={showAlert}    //passing showAlert as aprop into  Alert component 
       //  passing list as a prop into Alert component    
       list={list}/>}                      
                                                                  
        <h3>Grocery Buds</h3>
        <div className="form-control">
          <input type="text" className='grocery-control'
          placeholder='e.g. eggs' value={name}
          onChange={(e)=>{
            setName(e.target.value);
          }}/>
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit':'submit'}</button>
        </div>
      </form>

      {list.length > 0 &&(
        <div className="grocery-container">
          <List items ={list} removeItem={removeItem}
          editItem={editItem}/>
          <button className='clear-btn'
          onClick={clearAll}
          >Clear All</button>
        </div>

      )
}

    
    </section>
    )
}

export default App;
