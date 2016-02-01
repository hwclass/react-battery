/*!
 * React Battery. React component for tracking the battery status of your computer or mobile device.
 *
 * Copyright (c) 2016 Barış Güler
 * http://hwclass.in
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 *
 * Launch  : July 2016
 * Version : 1.0.0
 * Released: February 2nd, 2016
 */

import React from 'react'

export default class Battery extends React.Component {

	constructor (props) {
		super(props)
		const battery  = navigator.battery,
					level    = battery.level * 100
		this.state = {
			level : level
		}
	}

	render () {
		props = {...props}
		props.level = this.state.level
		return (
			<span {...props}></span>
		)
	}

}

