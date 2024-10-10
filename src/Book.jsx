import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  // const API_KEY = "9Iq8QPR0ub2RxtxMUsA8GAQvi1a6cGn3";
  // const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`;

  // useEffect(() => {
  //   const fetchBookDetails = async () => {
      
  //       const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9Iq8QPR0ub2RxtxMUsA8GAQvi1a6cGn3/${id}`);
  //       const bookDetails = response.data.results.books.find(
  //         (book) => book.primary_isbn10 === id || book.primary_isbn13 === id
  //       );
  //       setBook(bookDetails);
      
  //   };

  //   fetchBookDetails();
  // }, []);

useEffect(() => {
  // fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9Iq8QPR0ub2RxtxMUsA8GAQvi1a6cGn3/${id}`)
  // .then(res=>{
  //   console.log(res);
    
  // }).then(data =>
  //   console.log(data)
    
  // )
axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=9Iq8QPR0ub2RxtxMUsA8GAQvi1a6cGn3/${id}`)
.then((res)=>{
  console.log(res.data);
  
})
 
}, [id])


  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="flex flex-col w-full md:w-1/2 lg:w-1/3">
      <img src={book.book_image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <button>Add to Favorite</button>
      <label>
        <input type="checkbox" name="read" />
        Mark as Read
      </label>
    </div>
  );
}

export default Book;
