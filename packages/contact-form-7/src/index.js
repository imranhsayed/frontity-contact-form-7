import { connect } from "frontity";
import cf7Form from './processors/cf7Form';
import cf7Inputs from "./processors/cf7Inputs";
import cf7Spans from "./processors/cf7Spans";


const cf7HiddenInputs = {
	name: "cf7HiddenInputs",
	test: node =>
		node.component === "input" &&
		typeof ( node.parent ) !== 'undefined' &&
		node.parent.parent.component === "form",
	// also check class name
	process: node => {
		//console.log(state);
		console.warn( "cf7HiddenInput", node );
		//node.component = Input;
		return node;
	}
};


const MyForm = {

	state: {
		cf7: {
			forms: []
		}
	},
	libraries: {
		html2react: {
			processors: [cf7Form, cf7Inputs, cf7Spans]
		}
	},

	actions: {
		cf7: {
			changeInputValue: ( id, name, value ) => {
				console.warn( 'changeInputVal', id, name, value );
			},
			sendForm: ( { state } ) => async data => {

				const res = await fetch(
					`https://smitpatadiya.com//wp-json/contact-form-7/v1/contact-forms/41/feedback`
				);

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


export default connect( MyForm );
