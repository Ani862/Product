import { Link } from 'react-router-dom';
import "./Header.css"

function Header() {
  

  return (
    <header>
        <div className="logo">
            <h1><a href="/">Shop</a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="/ProductItem">Men's clothing</a></li>
                <li><a href="#">Women's clothing</a></li>
                <li><a href="#">Jewelery</a></li>
                <li><a href="#">Electronics</a></li>
            </ul>
        </nav>

        <div className="iconsCont">
          <div className="icon1">
            <ion-icon className="icon" name="menu-outline"></ion-icon>
          </div>
          <a href='/ProductItem'>
             <div className="icon2">
                <ion-icon name="bag-outline"></ion-icon>
                <div className="CartNumber">0</div>        
              </div>
          </a>
        </div>
    </header>
  );
}

export default Header;
