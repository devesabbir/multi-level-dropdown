import { IMenuItems } from "./menu-data"
import MenuItems from "./menu-items"

interface INavMenuProps {
    menuItems: IMenuItems[]
}

const Navbar= (props:INavMenuProps) => {
  const {menuItems} = props
   
  return (
        <nav>
            <ul className="menus">
                {
                  menuItems.map((items:IMenuItems, index) => {
                   const depthLevel = 0;
                   return <MenuItems items={items} key={index} depthLevel={depthLevel} />;  
                  })
                }
          </ul>
      </nav>
  )
}

export default Navbar 