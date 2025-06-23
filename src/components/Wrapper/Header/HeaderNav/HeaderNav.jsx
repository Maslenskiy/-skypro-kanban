import { useState } from "react";
import PopUser from "./PopUser/PopUser";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

    const togglePopUser = () =>{
       setIsOpen(prevState => !prevState);
    }
    return (
        <nav className="header__nav">
          <button className="header__btn-main-new _hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </button>
          <a  href="#user-set-target" className="header__user _hover02" onClick={togglePopUser}>
            Ivan Ivanov
          </a>
           {isOpen && <PopUser />} 
        </nav>
    )
}
