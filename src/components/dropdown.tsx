import { IMenuItems } from "./menu-data"
import MenuItems from "./menu-items";

export interface IDropdownProps{
  submenus:IMenuItems[];
  dropdown:boolean;
  depthLevel:number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dropdown = (props:IDropdownProps) => {
  const depthLevel = props.depthLevel + 1;
  return (
    <ul className={`dropdown ${props.dropdown ? "show" : ""}`}>
     {props.submenus.map((submenu, index) => (
        <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
    ))}
  </ul>
  )
}

export default Dropdown