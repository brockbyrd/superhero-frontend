import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../App.css'

class Homepage extends Component {

	render(){
		return(
            <div className="parent">
                <Route render={({ history }) => (
                <div className="leftHalf" onClick={() => history.push('/superheroes')}><img className="homepage" src="https://www.wallpapertip.com/wmimgs/35-357728_all-superheroes-wallpaper.jpg" alt="" onClick={this.props.filterGood} /></div>
                )
            } />
                <Route render={({ history }) => (
                <div className="rightHalf" onClick={() => history.push('/villains')} ><img className="homepage" src="https://wallpaperaccess.com/full/783564.jpg" alt="" onClick={this.props.filterEvil} /></div>
                )} />
            </div>
		)
	}
}
export default Homepage