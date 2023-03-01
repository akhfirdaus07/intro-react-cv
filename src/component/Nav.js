import { Component } from "react";
import {Link} from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

class Nav extends Component{
    render(){
        
        return(
            <Breadcrumb 
                bgColor="black" separator=''
                display='flex' justifyContent='center'
                color='white' fontSize='2xl' spacing={10}
            >
                <BreadcrumbItem>
                    <BreadcrumbLink><Link to='/intro-react-cv'>Intro</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink><Link to='/profile'>Profile</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink><Link to='/idea'>Idea</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink><Link to='/capabilities'>Capabilities</Link></BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
        )
    }
}

export default Nav;