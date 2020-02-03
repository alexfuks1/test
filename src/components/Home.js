import React from 'react';
import Search from './Search';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
               <Search/>
            </div>
        )
    }
}
export default Home;