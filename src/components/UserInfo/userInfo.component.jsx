import './userInfo.styles.css';
import avatar from '../../asset/github-logo.svg';

export const UserInfo = () => {
    return(

        <div className='user-info-body'>
            <h2>Detailed User Information</h2>
        
        <div class="row">
            
            <div class="col-6 ">
                <div className='user-info-container'>
                <h5>Name of the User</h5>
                <p>is simply dummy text of the printing and typesetting industry. Lorem a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electron</p>
                <p>👉Followers: 2200 </p>
                <p>🌍Location: Paris</p>
                <p>🖥Website: xxx.yahoooo.com</p>
                </div>
                
        </div>
        <div class="col-6 ">
            <div className='user-repo-container'>
                    <h5>Name of the Repository</h5>
                    <p>description ..djaoifjao fjf;o  </p>
                    <p>Written in dksjaf; ;</p>
            </div>      
        </div>
        </div>
        </div>

        

    )
}