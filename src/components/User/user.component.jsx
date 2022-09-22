import './user.styles.css';
import avatar from '../../asset/github-logo.svg';
import { Link, Router, Route, Switch, Routes } from 'react-router-dom';

export const User = ({item}) => {
    const { avatar_url, login, url, id } = item;
    
    // const id = data.length !==0 ? data.items[0].map((item) => 
    // <li>{item.id}</li>): <li>nothing found</li>;

    return (
        <div className='search-results'>
                <div className='user'>
                    <div className='user-image'>
                    <img src={avatar_url} alt='avatar'/>
                    </div>
                    <div className='user-info'>
                        <h5>Name : {login} </h5>
                        <h6>ID:  {id}</h6>
                        <h6>Bio:<a href={url}>{url}</a></h6>
                       
                        <Link to={`/user/${login}`}>
                        <a className='view-profile'>View Profile</a>
                        </Link>
                    </div>
                </div>

              
             

                
            </div>
    )
}