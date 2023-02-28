import { Component } from "react";
import {Link} from "react-router-dom";

class Nav extends Component{
    render(){
        
        return(
            <div className="nav">
                <button className="button-nav"><Link to='/intro-react-cv'>Intro</Link></button>
                <button className="button-nav"><Link to='/profile'>Profile</Link></button>
                <button className="button-nav"><Link to='/idea'>Idea</Link></button>
                <button className="button-nav">< Link to='/capabilities'>Capabilities</Link></button>
            </div>
        )
    }
}

export default Nav;