import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import addCharacter from '../actions/addCharacter'
import Navbar from './Navbar'


class CharacterInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            intelligence: '',
            strength: '',
            speed: '',
            durability: '',
            power: '',
            combat: '',
            race: '',
            gender: '',
            height: '',
            weight: '',
            fullName: '',
            alignment: '',
            occupation: '',
            groups: '',
            universe: '',
            image1: '',
            submitted: false
        }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addCharacter(this.state);
        //this.state.alignment === good redirect to Superhero otherwise redirect to Villains
        this.setState({
            name: '',
            intelligence: '',
            strength: '',
            speed: '',
            durability: '',
            power: '',
            combat: '',
            race: '',
            gender: '',
            height: '',
            weight: '',
            fullName: '',
            alignment: '',
            occupation: '',
            groups: '',
            universe: '',
            image1: '',
            submitted: true
        })
    }

    render(){
        let submitted = this.state.submitted
        let alignment = this.state.alignment
        return(
            <>
            {submitted ?
            <Redirect
            to={{
                pathname: alignment === 'good' ? '/superheroes' : '/villains',
                state: { visible2: 500 }}
            }/>
            :

                <div>
                <Navbar />
                <h1>Create Your Superhero or Villain</h1>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label for="name">Name: </label>
                    <input type="text" name='name' value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
                    <label for="intelligence">Intelligence: </label>
                    <input type="text" name='intelligence' value={this.state.intelligence} onChange={(event) => this.handleOnChange(event)} />
                    <label for="strength">Strength: </label>
                    <input type="text" name='strength' value={this.state.strength} onChange={(event) => this.handleOnChange(event)} />
                    <label for="speed">Speed: </label>
                    <input type="text" name='speed' value={this.state.speed} onChange={(event) => this.handleOnChange(event)} />
                    <label for="durability">Durability: </label>
                    <input type="text" name='durability' value={this.state.durability} onChange={(event) => this.handleOnChange(event)} />
                    <label for="combat">Combat: </label>
                    <input type="text" name='combat' value={this.state.combat} onChange={(event) => this.handleOnChange(event)} />
                    <label for="fullName">Full Name: </label>
                    <input type="text" name='fullName' value={this.state.fullName} onChange={(event) => this.handleOnChange(event)} />
                    <label for="race">Race: </label>
                    <input type="text" name='race' value={this.state.race} onChange={(event) => this.handleOnChange(event)} />
                    <label for="gender">Gender: </label>
                    <input type="text" name='gender' value={this.state.gender} onChange={(event) => this.handleOnChange(event)} />
                    <label for="height">Height: </label>
                    <input type="text" name='height' value={this.state.height} onChange={(event) => this.handleOnChange(event)} />
                    <label for="weight">Weight: </label>
                    <input type="text" name='weight' value={this.state.weight} onChange={(event) => this.handleOnChange(event)} />
                    <label for="occupation">Alignment: </label>
                    <select name="alignment" value={this.state.alignment} onChange={(event) => this.handleOnChange(event)}>
                        <option value="good">Good</option>
                        <option value="bad">Evil</option>
                    </select>
                    <label for="occupation">Occupation: </label>
                    <input type="text" name='occupation' value={this.state.occupation} onChange={(event) => this.handleOnChange(event)} />
                    <label for="groups">Groups: </label>
                    <input type="text" name='groups' value={this.state.groups} onChange={(event) => this.handleOnChange(event)} />
                    <label for="universe">Universe: </label>
                    <input type="text" name='universe' value={this.state.universe} onChange={(event) => this.handleOnChange(event)} />
                    <label for="image1">Image URL: </label>
                    <input type="text" name='image1' value={this.state.image1} onChange={(event) => this.handleOnChange(event)} />

                    <input type="submit" />
                </form>
            </div>
            }
            </>
        )
    }
}

// after submit go to respective page

// after form submit show all characters

export default connect(null, { addCharacter })(CharacterInput);