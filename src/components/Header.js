import React from 'react';
import { connect } from 'react-redux';

export const Header = () => (
	<div className="header">
		<div className="header__nav-box">
			<a href="/" className="header_nav">
				<span className="menu-icon-line-1 header__menu-icon-line"></span>
				<span className="menu-icon-line-2 header__menu-icon-line"></span>
				<span className="menu-icon-line-3 header__menu-icon-line"></span>
			</a>
		</div>
		<div className="header__title">
			<h1>Taylor Parrish</h1>
		</div>
	</div>
);


export default connect(null, {})(Header);