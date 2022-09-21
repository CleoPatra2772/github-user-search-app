import './user.styles.css';
import avatar from '../../asset/github-logo.svg';
import { Link, Router, Route, Switch, Routes } from 'react-router-dom';

export const User = () => {


    return (
        <div className='search-results'>
                <div className='user'>
                    <div className='user-image'>
                    <img src={avatar} alt='avatar'/>
                    </div>
                    <div className='user-info'>
                        <h5>Name of User</h5>
                        <h6>ID: xxxxxx</h6>
                        <h6>Email: xxxxxxx</h6>
                        <h6>Bio: </h6>
                        <Link to='/user'>
                        <a className='view-profile'>View Profile</a>
                        </Link>
                    </div>
                </div>

              
             

                
            </div>
    )
}