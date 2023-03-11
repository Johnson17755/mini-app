import React from 'react';

//  const Book = ({ img, title, author }) => {
//     return <article className='book'>
//                 <img src={img} alt='' />
//                  <h1>{title}</h1>
//                  <h4>{author}</h4>
//            </article>
//  }


const Book = ({ img, title, author }) => {
     // const { img, title, author } = props;
     
         const clickHandler = (e) => {
           alert('Hey you!');
           console.log(e);
           console.log(e.target)
         };

         const anotherExample = (author) => {
           console.log(author);
         }
         return (
           <article className='book' onMouseOver={() => {
             console.log(title);
           }}>
             <img src={img} alt='' />
             <h1 onClick={() => console.log(title)}>{title}</h1>
             <h4>{author}</h4>
             {/* Technically, you don't have to create a button. you can attach it any jsx */}
             <button type="button" onClick={clickHandler}>example</button>
             <button type="button" onClick={() => anotherExample(author)}>Another example</button>
           </article>
         )
       }
  export default Book

 