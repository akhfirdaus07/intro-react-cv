import Image1 from '../images/1.png';
import {Link} from "react-router-dom";

function Intro(){
    return(
        <div className="intro yellow">
            <div className="left">
                <img src={Image1} alt="" />
            </div>
            <div className="right">
                <h1>HELLO!</h1>
                <h2>I'm Akhmad Firdaus,</h2>
                <h2>a Web Developer.</h2>
                <div className="lightbtn">
                    <button className="button-nav"><Link to='/profile'>PROFILE</Link></button>
                    <button className="button-nav"><Link to='/idea'>IDEA</Link></button>
                    <button className="button-nav">< Link to='/capabilities'>CAPABILITIES</Link></button>   
                </div>
                <button className="read-more">READ MORE</button>
            </div>
        </div>
    )
}

export default Intro;