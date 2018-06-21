import React, { Component } from 'react'
import './style.css'

export default class Popup extends Component {
  render() {
    return (
      <div className={"popup"
        + (this.props.opened ? " opened" : "")
      }>
        <div className="popup_layout" onClick={() => this.props.onClose()}></div>
        <div className="popup_box" style={{width: this.props.width + 'rem'}}>
          <h3 className="popup_title">
            { this.props.icon && <span className={"popup_title_icon fa fa-" + this.props.icon}></span>}
            <span className="popup_title_text">{ this.props.title }</span>
          </h3>
          <div className="popup_content">
            {this.props.children}
          </div>
          { this.props.bottom &&
            <div className="popup_bottom">
              { this.props.bottom.map((item, index) =>
                <a key={index} href={item.href}>{item.title}</a>
              )}
            </div>
          }
        </div>
      </div>
    )
  }
}
