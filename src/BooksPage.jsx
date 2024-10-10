import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
function BooksPage() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState([])
    const API_KEY = "9Iq8QPR0ub2RxtxMUsA8GAQvi1a6cGn3"
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`

    useEffect(() => {
      const fetchBooks = async () => {
        const response = await axios.get(URL)
        setBooks(response.data.results.books.slice(0,10))
      }
    
      fetchBooks();
    }, [])

    const filterdBooks = books.filter((book) => book.title.includes(searchTerm));
    
  return (
    <div className="flex flex-col">
      <Header></Header>
        <h1 className="font-extrabold text-center text-3xl">Book Store</h1>
        <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder="Search" className="input input-bordered self-center mb-4 mt-4 w-1/3" required />
        <div className="flex flex-wrap justify-around gap-4" >
            {filterdBooks.map((book) => (
                <div key={book.primary_isbn10} className="flex flex-col w-1/2 md:w-1/3 lg:w-1/4 border-2 rounded-lg p-2 text-center shadow-2xl my-4">
                <img src={book.book_image} alt="" />
                <h3 className="text-lg">{book.title}</h3>
                <p className="text-sm p-1">by {book.author}</p>
                <Link to={`/book/${book.primary_isbn10}`} className="btn bg-primary">View Details</Link>
            </div>
            ))}
        </div>
       <Footer></Footer>
    </div>
  )
}

export default BooksPage