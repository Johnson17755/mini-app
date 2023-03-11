import React from 'react';
import Book from './Book';
import { books } from './myData/books';



// const books = [
//    {
//      id: 1,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//    {
//      id: 2,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//    {
//      id: 3,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//    {
//      id: 4,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//    {
//      id: 5,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//    {
//      id: 6,
//      img: 'https://m.media-amazon.com/images/I/81LcsnjhZmL._AC_UY218_.jpg',
//      title: 'The DaVinci Code',
//      author: 'Dan Brown'
//    },
//  ] 

 const App = () => {
      return(
        <section className='minibook'> 
         {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
          )
      })}
        </section>
      )
 }

  
    export default App;
    