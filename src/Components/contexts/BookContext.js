import React, { createContext, useState } from 'react';

export const BookContext = createContext();

function BookContextProvider(props) {

    const allBooks = [
        { id: 1, title: 'Think & Grow Rich' },
        { id: 2, title: 'The Power of Habit' },
        { id: 3, title: 'Atomic Habit' },
        { id: 4, title: 'Man Search for Meaning' },
        { id: 5, title: 'The 5AM Club' },
    ];

    const [books] = useState(allBooks);

    return (
        <BookContext.Provider value={{ books }}>

            {props.children}

        </BookContext.Provider>
    );
}

export default BookContextProvider;