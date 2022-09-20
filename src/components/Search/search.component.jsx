import './search.styles.css';

const Search = () => {

    return(
        <>
        <div className='searchContainer'>
            <h2 className='headLine'>Search for a Github User</h2>
            <form className='form'action="">
                <input className='input' type='text' placeholder='Input Github Username' required></input>
                <button className='searchButton' type="submit">Search</button>
            </form>
        </div>
        {/* <UserCard /> */}
        </>

        

    );


   

       
    
}


export default Search;