import * as React from "react"
import { Link } from "gatsby"
import logo from '../images/logo.svg'

const Header = () => {

  return (

    <header id='header'>

      <div className='header-container'>

        <div className='logo'>

          <Link to="/"><img alt="site-logo" src={logo} /></Link>
        </div>

        <ul className='menu'>

          <li className='menu-item'>

            <div className='dropdown'>

                <h4>Recipe box</h4>

                <ul className='sub-menu'>
                  <li className='sub-menu-item'><Link to="/">box nr1</Link></li>
                  <li className='sub-menu-item'><Link to="/">box nr2</Link></li>
                  <li className='sub-menu-item'><Link to="/">box nr3</Link></li>
                  <li className='sub-menu-item'><Link to="/">box nr4</Link></li>
                </ul>
            </div>
          </li>

          <li className='menu-item'>

            <div className='dropdown'>

                <h4>Products</h4>

                <ul className='sub-menu'>
                  <li className='sub-menu-item'><Link to="/">Fruit</Link></li>
                  <li className='sub-menu-item'><Link to="/">Vegetables</Link></li>
                  <li className='sub-menu-item'><Link to="/">Eggs</Link></li>
                  <li className='sub-menu-item'><Link to="/">Milk</Link></li>
                  <li className='sub-menu-item'><Link to="/">Meat</Link></li>
                  <li className='sub-menu-item'><Link to="/">Fresh drinks</Link></li>
                </ul>
            </div>
          </li>

          <li className='menu-item'><h4><Link to="/">About us</Link></h4></li>
          <li className='menu-item'><h4><Link to="/">Visit us</Link></h4></li>
        </ul>

        <div className='user-options'>
          <a href='/'><h4>Log in</h4></a>
          <a className='custom-btn' href='/'><h4>Create account</h4></a>
        </div>

      </div>

    </header>
  )

}



export default Header
