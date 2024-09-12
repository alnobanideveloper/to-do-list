import Button from './Button'
import React from 'react';
import { useState } from "react"
import { useLocation } from 'react-router-dom';

const Header = ({title="Hello" ,addTask ,onAdd , showAdd}) => {
  const Location = useLocation()
  const [showThemeColor , setThemeColor] = useState(true)

  const toggleMode = () => {
    setThemeColor(!showThemeColor)
  }

  showThemeColor ? document.body.style.backgroundColor = 'white' : 
  document.body.style.backgroundColor = 'black';

  showThemeColor ? document.body.style.color = 'black' : 
  document.body.style.color = 'white';

        return (
     <header className='header'>
      <h1>{title}</h1>
      {
        Location.pathname === '/about'||  <Button color = {showAdd ? "red" : "green"}  name={ showAdd ? "close" :"Add"} addTask = {addTask} onAdd={onAdd} />

      }

<Button 
  color={showThemeColor ? 'black' : 'white'} 
  textColor={showThemeColor ? 'white' : 'black'}
  name={showThemeColor? 'dark Mode' :'light Mode'}
  onAdd = {toggleMode}
  />

     </header>
    )   
  }
//default values for props  


export default Header
  