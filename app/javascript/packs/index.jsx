import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/js/bootstrap'
import './app.scss'

import Shortner from '../components/Shortner'

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Shortner />,
		document.getElementById('shortner')
	)
})