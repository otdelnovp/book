import React, { Component } from 'react';
import './style.css';

import Popup from '../Popup';

import userinfo from '../../_data/user';

export default class Filters extends Component {

  state = {
    isAuth: false,
    isSigninShow: false,
    login: '',
    pass: '',
		isError: false
  }

  // проверка формы и авторизация
  handleSignin = () => {
    if((!this.state.login && !this.state.pass) && (this.state.login === userinfo.login) && (this.state.pass === userinfo.pass))
      this.setState({isAuth: true, isSigninShow: false})
    else
      this.setState({isError: true}, () => setTimeout(() => this.setState({isError: false}), 3000) );
  }

  render() {
    return (
      <div className="user">

        { !!this.state.isAuth ?
          <div className="profile">
            <div className="profile_user">{userinfo.email}</div>
            <ul className="profile_menu">
              <li>Личный кабинет</li>
              <li>Заказы</li>
              <li onClick={() => this.setState({isAuth: false})}>Выход</li>
            </ul>
          </div>
          :
          <div className="login">
            <div className="login_link" onClick={() => this.setState({isSigninShow: true})}>Авторизация</div>
          </div>
        }

        <Popup
          opened={this.state.isSigninShow}
          onClose={() => this.setState({isSigninShow: false})}
          icon="key"
          title="Авторизация"
        >
          <div className="signin">
            {this.state.isError && <div className="error">
              Ошибка заполнения полей
            </div>}
            <div className="signin_row">
              <input type="text" placeholder="Login" value={this.state.login} onChange={(event) => this.setState({login: event.target.value})}/>
              <span className="signin_input-icon fa fa-envelope-o"></span>
            </div>
            <div className="signin_row">
              <input type="password" placeholder="Password" value={this.state.pass} onChange={(event) => this.setState({pass: event.target.value})}/>
              <span className="signin_input-icon fa fa-lock"></span>
            </div>
            <div className="signin_submit">
              <button className="btn" onClick={() => this.handleSignin()}>Войти</button>
            </div>
          </div>
        </Popup>

      </div>
    )
  }
}
