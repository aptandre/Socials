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
        alignItems: 'center',
        padding: '48px 16px',
        borderRadius: '12px'
    }}
    >
      <img src={image} alt="me"
      style={{
        width: '40%',
        height: '28%',
        borderRadius: '50%'
      }} />

      <div>
        <p style= {{
          fontWeight: 'bold',
          fontSize: '24px',
          marginBottom: '10px'
        }}>André Alves</p>

        <p style={{
          margin: '0'
        }}>Campina Grande, PB</p>

        <p style={{
          color: '#5971dcff',
          fontWeight: 'bold'
        }}>Software Developer | AI Researcher</p>
      </div>

      <div style={{
        width: '400px',
        height: '300px',
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
