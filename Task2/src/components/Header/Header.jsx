import React from 'react'

function Header({tasks}) {
  return (
    <header>
        <img src="./img/logo.png" alt='logo' className="logo"/>
        <span className="title">Tasks</span>
        <div className="user-info">
          <span className="user-name">Leanne Graham</span>
          <img src="./img/userImage.png" alt="userimg" className="user-image" />
          <button className="user-info_dropbtn"><img src="./img/dropdown-arrow.png" alt="" /></button>
          <div className="user-info_dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </header>
  )
}

export default Header
