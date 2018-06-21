import React, { Component } from 'react'
import './style.css'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 footer_text">
              <h2>Сайт о книгах</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div className="col-7 footer_menu">
              <ul>
                <li><a href="#home">Главная</a></li>
                <li><a href="#catalog">Каталог</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
