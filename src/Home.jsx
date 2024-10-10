import { Link } from "react-router-dom"

function Home() {
  return (
    <div className="bg-gradient-to-r from-[#70ACC7] to-[#c0d1d9] ">
      <div className="hero  min-h-screen text-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1728518400&semt=ais_hybrid"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Ahmed bookstore</h1>
      <p className="py-6">
        welcome to ahmed bookstore we`re happy to join us and discover the best books in the world buy and read online, we hope you enjoy
      </p>
      <Link to='/books' className="btn btn-primary text-base-200">Book store</Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home