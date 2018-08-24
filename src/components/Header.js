import React, { Component } from 'react'


class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navScreenVis: false,
		}
	}
	
	render() {
		return (
			<div className="header">
				<div className="header__nav-box">
					<a href="/" onClick={this.props.clickHandler} className="header_nav">
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


export default Header;