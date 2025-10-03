import { useState } from 'react'
import './App.css'
import ClickableSocial from './components/ClickableSocial'
import { AppColors } from './constants/colors'

function App() {

  return (
    <>
      <div style={{
        backgroundColor: AppColors.PRIMARY,
        width: '400px',
        height: '600px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
 
      }}>

        <ClickableSocial label='Linkedin' link='https://linkedin.com/in/aptandre'></ClickableSocial>
        <ClickableSocial label='Github' link='https://github.com/aptandre'></ClickableSocial>
        <ClickableSocial label='Instagram' link='#'></ClickableSocial>
        <ClickableSocial label='Twitter' link='#'></ClickableSocial>

      </div>
    </>
  )
}

export default App
