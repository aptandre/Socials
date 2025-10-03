import { useState } from 'react'
import image from './assets/images/andre.jpg'
import './App.css'
import ClickableSocial from './components/buttons/ClickableSocial'
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
        padding: '64px 16px'
    }}
    >
      <img src={image} alt="me"
      style={{
        width: '30%',
        height: '25%',
        borderRadius: '50%'
      }} />
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
    </div>
      
    </>
  )
}

export default App
