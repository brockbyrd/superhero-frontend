import React, { Component } from 'react';
import BootstrapNavbar from '../components/Navbar'

class DeckContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
        }
    }

    render() {
        return(
            <>
                <BootstrapNavbar />
                This is the comparison page.
            </>
        )
    }
}

export default DeckContainer;