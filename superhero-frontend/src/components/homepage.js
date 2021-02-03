import React, { Component } from 'react';

export default class Homepage extends Component{
    render(){
        <div className="parent">

            <div className="leftHalf" onClick={this.filterGood} style={{ backgroundImage: `url("https://www.comicbasics.com/wp-content/uploads/2020/08/The-Top-10-Greatest-Superheroes-Without-Superpowers-In-Comics-Today.jpg")`}}></div>

            <div className="rightHalf" onClick={this.filterEvil} style={{ backgroundImage: `url("https://static1.cbrimages.com/wordpress/wp-content/uploads/2019/11/Meanest-Supervillains-Of-All-Time.jpg")`}}></div>

        </div>
    }
}