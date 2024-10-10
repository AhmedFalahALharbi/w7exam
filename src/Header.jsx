import { Link } from "react-router-dom"

const logout = localStorage.clear()
function Header() {
  return (
    <div>
        <div className="navbar bg-gradient-to-r from-[#70ACC7] to-[#c0d1d9] text-base-200 flex justify-between">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Ahmed BookStore</a>
    <div className="flex justify-around w-1/3 text-center">
    <Link to={"/home"}> home</Link>
    <Link to={"/favorite"}>favorite</Link>
    <Link to={"/books"}>Discover</Link>
    <Link to={"/readbook"}>Readed</Link>
  </div>
  </div>
  
  <div className="flex-none gap-2">
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full ">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-neutral rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            {localStorage.getItem("username")}
            <span className="badge">Hi</span>
          </a>
        </li>
        <Link to={"/login"} > <button onClick={logout}>Log out</button></Link>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default Header