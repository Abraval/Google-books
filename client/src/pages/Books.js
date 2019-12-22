import React, { Component } from "react";
import SearchCard from "../components/Search";
import SearchResult from "../components/SearchResult";
import BookItemCard from "../components/BookItemCard/index";
import SaveCard from "../components/SavedResult/index";
import API from "../utils/API";

class Books extends Component {
  state = {
    results: [],
    savedBooks: [],
    bookSearch: ""
  };

  componentDidMount() {
    API.getSavedBooks().then(res => {
      this.setState({
        savedBooks: res.data
      });
    });
  }

  //On Button click for searching books
  handleSearch = event => {
    event.preventDefault();

    if (this.state.bookSearch) {
      API.searchBooks(this.state.bookSearch)
        .then(
          res =>
            this.setState({
              results: res.data.items
            })
          // console.log("reesponse", res.data.items)
        )
        .catch(err => console.log(err));
    }
  };

  handleInputChange = event => {
    const value = event.target.value;

    this.setState({
      bookSearch: value
    });
  };

  handleSave = event => {
    const bookIndex = event.target.attributes.getNamedItem("data-index").value;
    const saveBook = this.state.results[bookIndex];
    console.log(saveBook);

    const bookData = {
      title: saveBook.volumeInfo.title,
      link: saveBook.volumeInfo.previewLink,
      thumbnail: saveBook.volumeInfo.imageLinks.thumbnail,
      author: saveBook.volumeInfo.authors[0],
      description: saveBook.volumeInfo.description,
      key: saveBook.id
    };

    API.saveBook(bookData.key, bookData).then(
      API.getSavedBooks().then(res => {
        this.setState({
          savedBooks: res.data
        });
        console.log("In state", this.state.savedBooks);
        console.log("Length", this.state.savedBooks.length);
      })
    );
  };

  handleDelete = event => {
    const bookIndex = event.target.attributes.getNamedItem("data-index").value;
    const deleteBook = this.state.savedBooks[bookIndex];
    console.log(deleteBook._id);

    API.deleteBook(deleteBook._id).then(window.location.reload());
  };

  render() {
    return (
      <div>
        {window.location.pathname === "/" ? (
          <div>
            <SearchCard
              value={this.state.bookSearch}
              onChange={this.handleInputChange}
              onClick={this.handleSearch}
            />

            <SearchResult>
              {this.state.results.length ? (
                this.state.results.map((book, i) => {
                  return (
                    <BookItemCard
                      key={book.id}
                      title={book.volumeInfo.title}
                      author={
                        book.volumeInfo.authors
                          ? book.volumeInfo.authors[0]
                          : "Anonymous"
                      }
                      href={book.volumeInfo.previewLink}
                      thumbnail={
                        book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "https://adoptionsupport.org/wp-content/uploads/2015/12/Book-tower.jpg"
                      }
                      description={book.volumeInfo.description}
                      save={this.handleSave}
                      index={i}
                    />
                  );
                })
              ) : (
                <h3>No Books match your search</h3>
              )}
            </SearchResult>
          </div>
        ) : (
          <SaveCard>
            {this.state.savedBooks.length ? (
              this.state.savedBooks.map((book, i) => {
                return (
                  <BookItemCard
                    key={book._id}
                    title={book.title}
                    author={book.author}
                    href={book.link}
                    thumbnail={
                      book.thumbnail
                        ? book.thumbnail
                        : "http://knowledgequest.aasl.org/wp-content/uploads/2015/01/books.png"
                    }
                    description={book.description}
                    delete={this.handleDelete}
                    index={i}
                  />
                );
              })
            ) : (
              <h3>No Saved Books</h3>
            )}
          </SaveCard>
        )}
      </div>
    );
  }
}

export default Books;
