
import React, {useEffect} from 'react'

const Alert =({type,msg, removeAlert}) => {

 useEffect(() => {

    const timeup = setTimeout(()=>{
        removeAlert();
    }, 3000)
      return () => {
          clearTimeout(timeup)
      
      }
    }, [])
    
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert