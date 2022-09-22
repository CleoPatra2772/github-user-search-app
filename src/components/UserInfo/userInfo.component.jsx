import './userInfo.styles.css';
import avatar from '../../asset/github-logo.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../data/axios';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

export const UserInfo = () => {
    const { login } = useParams();

    const [user, setUser] = useState({});
    const [userRepo, setUserRepo] = useState([]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try{
            const response = await Promise.all([
                axios.get(`/users/${login}`),
                axios.get(`/users/${login}/repos`),
            ]);
            console.log(response);
            setUser(response[0].data);
            setUserRepo(response[1].data);
        }catch(error) {
            console.log(error);
        }
        }
        fetchUserInfo();
    },[]);

      

    return(

        <div className='user-info-body'>
            <h2>Detailed User Information</h2>
        
        <div class="row">
            
            <div class="col-6 ">
                <div className='user-info-container'>
                <h5>Name: {user?.name}</h5>
                <p> Bio: {user?.bio}</p>
                <p>👉Followers: {user?.followers} </p>
                <p>👉Following: {user?.following} </p>
                <p>🌍Location: {user?.location}</p>
                <p>🖥Email: {user?.email}</p>
                </div>
                
        </div>
        <div class="col-6 ">
            <div className='user-repo-container'>
                    <h5>{user?.name}'s Repository</h5>
                    {userRepo.slice(0,2).map(repo => {
                        return(
                        <div className='user-repo-detail'>
                        <h6 repo={repo.id}>{repo.name}</h6>
                        <p className='repo-description'>Description: ✨{repo.description}</p>
                        <a >{repo.git_url}</a>
                        </div>
                        )
                    })}
                    
            </div>      
        </div>
        </div>
        </div>

        

    )
}