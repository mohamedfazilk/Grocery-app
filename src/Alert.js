
import React, {useEffect} from 'react'

const Alert =({type,msg, removeAlert, list}) => {

 useEffect(() => {

    const timeup = setTimeout(()=>{
        removeAlert();
    }, 3000)
      return () => {
          clearTimeout(timeup)
      
      }
    }, [list])
    
  return (
    <p className={`alert alert-${type}`}>{msg}</p>
  )
}

export default Alert