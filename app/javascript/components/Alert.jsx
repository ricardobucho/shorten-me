import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class Alert extends Component {

	constructor (props) {
		super(props)
	}

	render () {
		return (
			<>
				<Modal backdrop="static" keyboard={ false } centered show={ this.props.show || false } onHide={ this.props.onHide }>
					<Modal.Header closeButton>
						<Modal.Title>{ this.props.title }</Modal.Title>
					</Modal.Header>
					<Modal.Body>{ this.props.content }</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={ this.props.onHide }>
							{ this.props.closeText || 'Close' }
						</Button>
					</Modal.Footer>
				</Modal>
			</>
		);
	}
}

export default Alert