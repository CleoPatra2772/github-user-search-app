import './header.styles.css';

export const Header = () => {
    return(
<nav className="navbar navbar-expand-lg">
        {/* <Link href='/'> */}
        <a className="navbar-brand"><img className="logo" src={''} width='30px' height='30px'/></a>
        {/* </Link> */}
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
             {/* <Link href='/'> */}
                <a className="nav-link">Search</a>
             {/* </Link> */}
        </li>

        <li className="nav-item">
            {/* <Link href='/History'> */}
                <a className="nav-link">History</a>
            {/* </Link> */}
        </li>
    </ul>


  </div>


</nav>
    )
}