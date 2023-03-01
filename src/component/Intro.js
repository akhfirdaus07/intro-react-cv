import Image1 from '../images/1.png';
import {Link} from "react-router-dom";
import {Heading, Button, ButtonGroup} from '@chakra-ui/react';

function Intro(){
    return(
        <div className="intro yellow">
            <div className="left">
                <img src={Image1} alt="" />
            </div>
            <div className="right">
                <Heading as='h1' size='4xl'>
                HELLO!
                </Heading>
                <Heading as='h2' size='3xl'>
                    I'm Akhmad Firdaus,<br/>
                    a Web Developer.
                </Heading>
                <ButtonGroup gap='4' colorScheme='black' variant="link">
                    <Button><Link to='/profile'>PROFILE</Link></Button>
                    <Button><Link to='/idea'>IDEA</Link></Button>
                    <Button>< Link to='/capabilities'>CAPABILITIES</Link></Button>
                </ButtonGroup> 
                {/* 
                <div className="lightbtn">
                    <button className="button-nav"><Link to='/profile'>PROFILE</Link></button>
                    <button className="button-nav"><Link to='/idea'>IDEA</Link></button>
                    <button className="button-nav">< Link to='/capabilities'>CAPABILITIES</Link></button>  
                </div> */}
                
                <Button colorScheme="blackAlpha" variant="outline">
                    READ MORE
                </Button>

                {/* <button className="read-more">READ MORE</button> */}
            </div>
        </div>
    )
}

export default Intro;