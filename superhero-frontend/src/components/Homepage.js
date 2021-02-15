import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css'
import Navbar from './Navbar'

class Homepage extends Component {

	render(){
		return(
            <div className="parent">
                <Navbar />
                <Route render={({ history }) => (
                    <div className="leftHalf" onClick={() => history.push('/superheroes')}>
                        <img className="homepage" src="https://www.wallpapertip.com/wmimgs/35-357728_all-superheroes-wallpaper.jpg" alt=""/>
                        <h2 className="superhero-text">Superheroes</h2>
                    </div>
                    )}
                />

                <Route render={({ history }) => (
                    <div className="rightHalf" onClick={() => history.push('/villains')} >
                        <img className="homepage" src="https://wallpaperaccess.com/full/783564.jpg" alt="" />
                        <h2 className="villain-text">Villains</h2>
                    </div>
                    )}
                />

            </div>
		)
	}
}
export default Homepage;