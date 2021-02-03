import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class Homepage extends Component {

	render(){
		console.log(this.props.characters)
		return(
            <div className="parent">
                <Route render={({ history }) => (
                <div className="leftHalf" onClick={() => history.push('/superheroes')}><img src="https://www.wallpapertip.com/wmimgs/35-357728_all-superheroes-wallpaper.jpg" alt="" onClick={this.props.filterGood} /></div>
                )
            } />
                <Route render={({ history }) => (
                <div className="rightHalf" onClick={() => history.push('/villains')} ><img src="https://wallpaperaccess.com/full/783564.jpg" alt="" onClick={this.props.filterEvil} /></div>
                )} />
          </div>
		)
	}
}
export default Homepage