import Image3 from '../images/3.png';
import {Link} from "react-router-dom";

function Idea(){
    return(
        <div className="idea yellow">
            <div className="left">
                <h1>HELLO</h1>
                <p>I'm a web developer at Purwadhika Football Club since 2023</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut voluptates quas quisquam accusamus. Explicabo velit aliquam tempora voluptate eum hic ipsam porro, facere praesentium accusantium molestiae voluptas cumque nobis accusamus!</p>
                <button className="read-more">READ MORE</button>
                <div className="lightbtn">
                    <button className="button-nav"><Link to='/profile'>PROFILE</Link></button>
                    <button className="button-nav"><Link to='/idea'>IDEA</Link></button>
                    <button className="button-nav">< Link to='/capabilities'>CAPABILITIES</Link></button>    
                </div>
            </div>
            <div className="right">
                <h1>idea</h1>
                <img src={Image3} alt="" />
            </div>
        </div>
    )
};

export default Idea;