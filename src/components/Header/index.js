import React, { Component } from 'react'
import './style.css'

import User from '../User'

export default class Header extends Component {

  state = {
    headerFixed: false
  }

  scrolling = () => {
    window.pageYOffset > 200
      ? this.setState({headerFixed: true})
      : this.setState({headerFixed: false})
	}

  componentDidMount() {
    window.addEventListener('scroll', this.scrolling, false);
  }

  render() {
    return (
      <header className={"header"
        + (this.state.headerFixed ? " header_fixed" : "")
      }>
        <div className="container">
          <div className="row align-items-center">

            <div className="col-1">
              <a href="/" className="logo">Book</a>
            </div>

            <div className="col-6">
              <ul className="nav">
                <li><a href="#home">Главная</a></li>
                <li><a href="#catalog">Каталог</a></li>
              </ul>
            </div>

            <div className="col-5">
              <User/>
            </div>

          </div>
        </div>
      </header>
    )
  }
}
