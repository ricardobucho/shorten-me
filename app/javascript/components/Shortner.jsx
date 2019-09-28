import React, { Component } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import axios from 'axios';

import Alert from './Alert'

class Shortner extends Component {

	state = {
		alert: {
			title: '',
			content: '',
			state: false,
			closeText: false,
		},

		shorten: {
			link: '',
			token: '',
		},
	}

	constructor (props) {
		super(props)
	}

	deepState = (outer, inner, value) => {
		this.setState(prevState => ({
			[outer]: { ...prevState[outer], [inner]: value }
		}))
	}

	displayAlert = (options) => {
		if (options) {
			this.setState(prevState => ({
				alert: { ...prevState.alert, ...options }
			}))
		}

		this.deepState('alert', 'state', true)
	}

	dismissAlert = () => {
		this.deepState('alert', 'state', false)
	}

	handleLinkChange = (e) => {
		this.deepState('shorten', 'link', e.target.value)
	}

	handleTokenChange = (e) => {
		this.deepState('shorten', 'token', e.target.value)
	}

	validateInputs = () => {

		let link = this.state.shorten.link,
			token = this.state.shorten.token

		axios
			.post('/api/v1/links', {
				url: this.state.shorten.link,
				token: this.state.shorten.token,
			})
			.then((r) => {
				if (r.data.success) {
					this.displayAlert({ title: 'Success!', content: <div>Your short link has been generated.<br /><br /><Form.Control readOnly value={ r.data.short_url } /></div>, closeText: 'I have copied my short link' })

					this.deepState('shorten', 'link', '');
					this.deepState('shorten', 'token', '');
				} else {
					this.displayAlert({ title: 'Oops...', content: <div>Something went wrong, check the error below to see what went wrong.<br /><br /><div class="text-danger">{ r.data.messages }</div></div>, closeText: false })
				}
			})
	}

	render () {
		return (
			<>
				<Alert show={ this.state.alert.state } onHide={ this.dismissAlert } title={ this.state.alert.title } content={ this.state.alert.content } closeText={ this.state.alert.closeText } />

				<Form>
					<Row>
						<Col md="6">
							<Form.Control maxLength={ 250 } placeholder="Link" value={ this.state.shorten.link } onChange={ this.handleLinkChange } />
						</Col>
						<Col md="4">
							<Form.Control maxLength={ 8 } placeholder="Custom Token (Optional)" value={ this.state.shorten.token } onChange={ this.handleTokenChange } />
						</Col>
						<Col md="2">
							<Button variant="primary" block onClick={ this.validateInputs }>Shorten</Button>
						</Col>
					</Row>
				</Form>
			</>
		)
	}
}

export default Shortner