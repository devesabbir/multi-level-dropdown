import {useEffect, useRef, useState} from 'react'
import Dropdown from "./dropdown";

import { IMenuItems } from "./menu-data";

export interface IMenuItemsProps {
    items: IMenuItems,
    depthLevel:number
}

const MenuItems = (props:IMenuItemsProps) => {
    const [dropdown, setDropdown] = useState(false);
    // eslint-disable-next-line prefer-const
    let li = useRef();


    useEffect(() => {
        const handler = (event) => {

         if (dropdown && li.current && 
            !li.current.contains(event.target)) {
            setDropdown(false);
         }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
         // Cleanup the event listener
         document.removeEventListener("mousedown", handler);
         document.removeEventListener("touchstart", handler);
        };
       }, [dropdown]);


       const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
       };
       
       const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
       };

    return (
      <li className="menu-items" 
      ref={li}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      
      >
        {props.items.submenu ? (
          <>
            <button 
             type="button"
             aria-expanded={ dropdown ? 'true' : 'false' }
             onClick={() => setDropdown((prev) => !prev)}
             >
              {props.items.title}{' '}
              {props.depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
            </button>
            <Dropdown
             submenus={props.items.submenu}
             dropdown={dropdown} 
             depthLevel={props.depthLevel}
             />
          </>
        ) : (
          <a href={props.items.url}>{props.items.title}</a>
        )}
      </li>
    );
  };
  
  export default MenuItems;