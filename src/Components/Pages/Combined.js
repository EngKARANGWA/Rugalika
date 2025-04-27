import React from 'react'
import Header from '../Header'
import Contents from './Ibitekerezo'
import Navibar from '../../Components/Navibar'
import Idea from '../Pages/Ibitekerezo'
import '../../App.css'

function Combined() {
  return (
    <div className="App">
    <Header/>
    <Navibar/>
    <Contents />
    <Idea/>
  </div>
  )
}

export default Combined