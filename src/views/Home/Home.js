import React, { useEffect, useState } from 'react'
import './Home.css'
import I18n from './../../utils/I18n'

function Home() {

const usersCount = 20;



  return (
    <>
    <div className='title-i18n'>
      Internationalization🌎I18n✨
    </div>

    <div className='i18-container'>

      <h1>{I18n("welcomeMessage")}</h1>

      <p>{I18n("normalMessage")}</p>

      <h3>{I18n("greetingMessage")}</h3>

      <h5>{I18n("endMessage")}</h5>

      <p>
        {I18n("userStatMessage", "<studentCount>",usersCount)}
      </p>
      <span className='lang-text'>✍ Lang : </span>
      <select 
      className='select-box'
      defaultValue={localStorage.getItem("lang")}
      onChange={(e)=>{
        localStorage.setItem("lang", e.target.value);
        window.location.reload();
      }}>
        <option value='mr'>Marathi</option>
        <option value='hi'>Hindi</option>
        <option value='en'>English</option>
      </select>
    </div>
    </>
  )
}

export default Home
