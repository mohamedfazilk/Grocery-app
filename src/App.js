import React, { useState } from 'react'
import List from './List';
import Alert from './Alert';

function App() {
  
  const [name, setName] = useState('')
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState (false)
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg:'', type:'' }); // alert is an object showing these things

  return <section>ggh</section>
}

export default App;
