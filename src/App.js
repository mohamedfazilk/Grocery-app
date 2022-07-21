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
    }

    else{
      //show alert
      const newItem = {id: new Date().getTime().toString(),
      title:name}
      setList([...list, newItem])
      setName('')
      setAlert({show:true, msg:'Your value is added' , type:'success'})
    }
  }

    //separate function for easy access of alert, then passing attributes into setAlert  
    const showAlert = (show = false, type='', msg='')=>{
      setAlert({show,type,msg})

    }
  

  return(

    <section className='section-center'>

      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
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
          <List items ={list}/>
          <button className='clear-btn'>Clear All</button>
        </div>

      )
}

    
    </section>
    )
}

export default App;
