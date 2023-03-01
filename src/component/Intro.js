import Image1 from '../images/1.png';
import {Link} from "react-router-dom";
import {Heading, Button, ButtonGroup, Flex, Image} from '@chakra-ui/react';

function Intro(){
    return(
        <div className="intro yellow">
            <Flex 
                direction='column' justify='end' align='end'
            >
                <Image
                    src={Image1}
                    height='500px'
                />
            </Flex>
            <Flex 
                direction='column' justify='center'
                marginRight='10rem' gap='2rem' 
            >
                <Heading as='h1' size='4xl' bgColor='white'>
                HELLO!
                </Heading>
                <Heading as='h2' size='2xl'>
                    I'm Akhmad Firdaus,<br/>
                    a Web Developer.
                </Heading>
                <ButtonGroup gap='4' colorScheme='black' variant="link">
                    <Button><Link to='/profile'>PROFILE</Link></Button>
                    <Button><Link to='/idea'>IDEA</Link></Button>
                    <Button>< Link to='/capabilities'>CAPABILITIES</Link></Button>
                </ButtonGroup>                
                <Button colorScheme="blackAlpha" variant="solid" size='sm'>
                    READ MORE
                </Button>
            </Flex>
        </div>
    )
}

export default Intro;