import './header.styles.css';
import logo from '../../asset/github-logo.svg';
import { Link, Router, Route, Switch, Routes } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { History } from '../History/history.components';
import Search from '../Search/search.component';
import { User } from '../User/user.component';

export const Header = () => {
    return(

<div>
<nav className="navbar navbar-expand-lg">
        
        <Nav.Link as={Link} to={'/'}>
        <a className="navbar-brand"><img className="logo" src={logo} width='30px' height='30px'/></a>
        </Nav.Link>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>


<div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
        {/* <li className="nav-item active">
            <Link href='/'>
                <a className="nav-link">Home</a>
            </Link>
        </li> */}
        <li className="nav-item">
        <Nav.Link as={Link} to={'/'}>
                <a className="nav-link" >Search</a>
                </Nav.Link>
            
        </li>

        <li className="nav-item">
        <Nav.Link as={Link} to={'/history'}>
                <a className="nav-link">History</a>
            </Nav.Link>
        </li>
    </ul>
   

  </div>
    
    

</nav>
</div>



    )
}