import React, { Component } from 'react'
import './style.css'

export default class Book extends Component {

  state = {
    preview: 'http://via.placeholder.com/300x200',
    title: '',
    description: '',
    publisher: '',
    author: '',
		year: '',
		isError: false
	}
	
	// проверка формы и отправка данных
	onSubmit = () => {
		if(!!this.state.title && !!this.state.description && !!this.state.publisher && !!this.state.author && !!this.state.year) {
			// отправка данных с формы если все поля заполнены
			this.props.onAdd({
				id: Math.floor(100000 + Math.random() * 900000),
				preview: this.state.preview,
				title: this.state.title,
				description: this.state.description,
				publisher: this.state.publisher,
				author: this.state.author,
				year: this.state.year
			});
			this.setState({
				title: '',
				description: '',
				publisher: '',
				author: '',
				year: '',
			});
		} else {
			// вывод ошибки заполненности полей
			this.setState({isError: true}, () => setTimeout(() => this.setState({isError: false}), 3000) );
		}
	}

  render() {
    return (
			<div className={"add"
				+ (this.state.isError ? ' error' : '')
			}>

				{this.state.isError && <div className="error">
					Заполните все поля
				</div>}

				<div className="add_row">
					<input type="text" placeholder="Название" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})}/>
				</div>
				<div className="add_row">
					<textarea placeholder="Описание" value={this.state.description} onChange={(event) => this.setState({description: event.target.value})}/>
				</div>
				<div className="add_row">
					<input type="text" placeholder="Автор" value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}/>
				</div>
				<div className="add_row">
					<input type="text" placeholder="Издательство" value={this.state.publisher} onChange={(event) => this.setState({publisher: event.target.value})}/>
				</div>
				<div className="add_row">
					<input type="text" placeholder="Год" value={this.state.year} onChange={(event) => this.setState({year: event.target.value})}/>
				</div>

				<div className="add_submit">
					<button className="btn" onClick={() => this.onSubmit()}>Добавить</button>
				</div>

      </div>
    )
  }
}
