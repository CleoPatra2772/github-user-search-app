import { User } from '../User/user.component';

import './search.styles.css';
import axios from '../../data/axios';
import { useState } from 'react';

const Search = () => {
    const [searchInput, setSearchInput] = useState('');
    const [user, setUser] = useState([]);
  
    
  

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    }

    const fetchUsers = async () => {
        try{
            const {data} = await axios.get('/search/users?q=' + searchInput);
            //console.log(data);
            return data?.items;
        }catch(err){
            console.log(err);
            return null;
        }
    }


    const handleSearch = async (e) => {
        e.preventDefault();
        
         if(searchInput) {
            const items = await fetchUsers();
            setUser(items);
         }else{
            console.log('query is empty');
         }
        
    }




    return(
        <>
        <div className='searchContainer'>
            <h2 className='headLine'>Search for a Github User 👀</h2>
            <form className='form' action="">
                <input value={searchInput} onChange={handleSearchInput}
                className='input' type='text' placeholder='Input Github Username' required></input>
                <button onClick={handleSearch}
                className='searchButton' type="submit">Search</button>
            </form>

                 <div className='search-user'>
                    { user ? user.map(item => {
                        return <User item={item} key={item.id}/>
                    }) : 
                    <h3>Try again, no users to display</h3>
                    }
                </div>
        </div>
            
        </>

        

        

    );


   


   

       
    
}


export default Search;