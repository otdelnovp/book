import React, { Component } from 'react';
import './style.css';

import Popup from '../Popup';
import Add from '../Add';
import Book from '../Book';

import json_books from '../../_data/books';

export default class Catalog extends Component {

	state = {
		loading: true,
		isAddBookForm: false,
		books: []
	};

	componentDidMount() {
		this.setState({books: json_books});
	}

	// добавление новой книги
	addBook = (data) => {
		this.setState({isAddBookForm: false});
		this.state.books.push(data);
	}

	// удаление книги
	deleteBook = (id) => {
		this.setState({books: this.state.books.filter((item) => item.id !== id)});
	}

  render() {
    return (
      <div className="catalog" id="catalog">

				<div className="catalog_list">
					<div className="container">
						<div className="row">

		          { // вывод списка книг
								Array.isArray(this.state.books) && this.state.books.map((item, index) =>
									<div className="col-4" key={index}>
										<Book
											id={item.id}
											preview={item.preview}
											title={item.title}
											description={item.description}
											publisher={item.publisher}
											author={item.author}
											year={item.year}
											onDeleteBook={(id) => this.deleteBook(id)}
										/>
									</div>
								)
							}

							<div className="col-4">
								{/* кнопка добавления новой книги */}
								<Book
									add={true}
									onAddBook={() => this.setState({isAddBookForm: true})}
								/>
							</div>

						</div>
					</div>
        </div>

				
        <Popup
          opened={this.state.isAddBookForm}
					onClose={() => this.setState({isAddBookForm: false})}
					width={50}
          icon="plus-square"
          title="Добавить книгу"
        >
          <Add
						onAdd={(data) => this.addBook(data)}
					/>
        </Popup>

      </div>
    )
  }
}
