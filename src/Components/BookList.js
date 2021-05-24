import React from 'react';
import { useContext } from 'react';
import { BookContext } from './contexts/BookContext';
import { ThemeContext } from './contexts/ThemeContext';

function BookList() {

    const { books } = useContext(BookContext);
    const { isLight, dark, light } = useContext(ThemeContext);
    const theme = isLight ? light : dark;

    const uiStyle = {
        color: theme.syntax,
        backgroundColor: theme.bg,
    }
    const liStyle = {
        backgroundColor: theme.ui,
    }

    return (
        <div className="book_list" style={uiStyle}>
            <ul>
                {
                    books.map(book => (
                        <li style={liStyle} key={book.id}>
                            {book.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default BookList;