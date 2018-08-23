import React, { Component } from 'react'
import { connect } from 'react-redux';
import FullscreenNav from '../fullscreen-nav/FullscreenNav';


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navScreenVis: false
		}
		this.navExpandHandler = this.navExpandHandler.bind(this)
	}

	navExpandHandler(e) {
    e.preventDefault();
    console.log(e)
    this.setState({navScreenVis: true});
	}
	
	render() {
		return (
			<div className="header">
				{this.state.navScreenVis ? <FullscreenNav /> : null}
				<div className="header__nav-box">
					<a href="/" onClick={this.navExpandHandler} className="header_nav">
						<span className="menu-icon-line-1 header__menu-icon-line"></span>
						<span className="menu-icon-line-2 header__menu-icon-line"></span>
						<span className="menu-icon-line-3 header__menu-icon-line"></span>
					</a>
				</div>
				<div className="header__title">
					<h1>Taylor Parrish</h1>
				</div>
			</div>
		)
	}
}


export default connect(null, {})(Header);