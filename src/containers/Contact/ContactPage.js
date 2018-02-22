import React from 'react'
import { withRouteData } from 'react-static'

function ContactPage ({pzData}) {
	return (
		<div>
			<h1>Contact Page {pzData}</h1>
		</div>
	)
}

export default withRouteData(ContactPage)
