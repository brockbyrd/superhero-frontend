import { Navbar, Nav } from 'react-bootstrap'
import React from 'react';
import Superhero from './Superheros/SuperheroContainer'
import Villain from './Villains/VillainContainer'

class BootstrapNavbar extends React.Component {

    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Nav>
                        <Nav.Link href="/heroes" component={Superhero}>Heroes</Nav.Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/villains" component={Villain}>Villains</Nav.Link>
                    </Nav>
                </Navbar>
          </>
        )
    }
}

export default BootstrapNavbar