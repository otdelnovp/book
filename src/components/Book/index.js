import React, { Component } from 'react'
import './style.css'

export default class Book extends Component {
  state = {
    sizeSelect: false
  }
  render() {
    return (
      !this.props.add ?
        <div className="book">
          <div className="book_delete" onClick={() => this.props.onDeleteBook(this.props.id)} title="Удалить"><i className="fa fa-trash" aria-hidden="true"></i></div>
          <div className="book_image">
            <img src={this.props.preview} alt={this.props.title} />
          </div>
          <h3 className="book_title">{this.props.title}</h3>
          <div className="book_description">{this.props.description}</div>
          <div className="book_info">
            <div className="book_info_item">Автор: <b>{this.props.author}</b></div>
            <div className="book_info_item">Издательство: <b>{this.props.publisher}</b>, <b>{this.props.year}</b>г.</div>
          </div>
        </div>
      :
        <div className="book book__add" onClick={() => this.props.onAddBook()}><span>Добавить книгу</span></div>
    )
  }
}
