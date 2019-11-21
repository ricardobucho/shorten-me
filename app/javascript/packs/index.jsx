import React from 'react'
import ReactDOM from 'react-dom'
//import './bootstrap.js'

import Shortner from '../components/Shortner'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Shortner />,
		document.getElementById('shortner')
	)
})

require.context('../images', true)
require('../stylesheets/app.scss')