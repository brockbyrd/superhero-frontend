import { Navbar, Nav } from 'react-bootstrap'
import React from 'react';

class BootstrapNavbar extends React.Component {

    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark" sticky="top">
                    <Nav>
                        <Nav.Link href="/heroes">Heroes</Nav.Link>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/villains">Villains</Nav.Link>
                    </Nav>
                </Navbar>
          </>
        )
    }
}

export default BootstrapNavbar