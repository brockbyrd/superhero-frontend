import React, { Component } from 'react';


class SuperheroInput extends Component {
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
            alignment: 'good',
            occupation: '',
            groups: '',
            universe: '',
            image1: ''
        }
    }

    handleOnChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit(event){
        event.preventDefault();
        this.props.addHero(this.state);
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
            alignment: 'good',
            occupation: '',
            groups: '',
            universe: '',
            image1: ''
        })
    }


    render(){
        return(
            <div>
                <h1>Create Your Own Superhero</h1>
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
        )
    }
}

export default SuperheroInput;