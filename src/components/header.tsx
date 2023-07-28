import Navbar from "./navbar"
import { menuItems } from "./menu-data"


const Header = () => {
  return (
    <header>
          <div className="nav-area">
               <a href="/" className="logo" >Logo</a>
          </div>
          <Navbar menuItems={menuItems} />
    </header>
  )
}

export default Header