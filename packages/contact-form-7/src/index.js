

const cf7Inputs = {
	name: "cf7Inputs",
	test: node => node.component === "input" && /wpcf7-form-control/.test(node.props.className),
	process: node => {
		node.component = Input;
		return node;
	}
};

const cf7Form = {
	name: "cf7Form",
	test: node => node.component === "form" && node.props.className === "wpcf7-form",
	process: node => {
		node.component = Form;
		return node;
	}
};

export default {
	libraries: {
		html2react: {
			processors: [cf7Form, cf7Inputs]
		}
	},

	actions: {
		cf7: {
			sendForm: ( { state } ) => async data => {
				const res                          = await fetch( `https://orionhive.com/wp-json/contact-form-7/v1/contact-forms/${ data }/feedback` );
				const body                         = await res.json();
				// Populate state with the errors, or thank-you message...
				state.cf7.forms[ data.id ].message = body.message;
				if ( body.mail_sent ) {
					state.cf7.forms[ data.id ].status  = "sent";
					state.cf7.forms[ data.id ].message = body.message;
				} else if ( body.validation_failed ) {
					state.cf7.forms[ data.id ].status = "failed";
					// Populate errors from the response so React components
					// can see them and re-render appropriately...
					state.cf7.forms[ data.id ].validationErrors = {
						email: "The e-mail address entered is invalid."
					};
				}
			}
		}
	}
};
