import { connect } from "frontity";
import cf7Form from './processors/cf7Form';
import cf7Inputs from "./processors/cf7Inputs";
import cf7Spans from "./processors/cf7Spans";
import cf7HiddenInputs from "./processors/cf7HiddenInputs";




const MyForm = {

	state: {
		cf7: {
			forms: {}
		}
	},
	libraries: {
		html2react: {
			processors: [cf7Form, cf7Inputs, cf7HiddenInputs]
		}
	},

	actions: {
		cf7: {

			initForm: ( { state } ) => ( id ) => {

				if ( ! state.cf7.forms[id] ) {
					state.cf7.forms[id] = { inputVals: {} };
				}
			},

			initInput: ( { state } ) => ( { id, inputName } ) => {
					state.cf7.forms[id].inputVals = ( '' !== inputName ) ? { [inputName]: '' } : {};
			},

			changeInputValue: ( { state } ) => ( { id, inputName, value } ) => {
				state.cf7.forms[id].inputVals[inputName] = value;
			},

			addHiddenInputs: ( { state } ) => ( { id, inputName, value } ) => {
				state.cf7.forms[id].inputVals[inputName] = value;
			},

			sendForm: ( { state } ) => async id => {

				const myData = state.cf7.forms[id].inputVals;
				let formData = new FormData();

				Object.keys( myData  ).forEach( ( key ) => { 
					formData.append( key, myData[ key ] ) ;
				});

				const url = `https://smitpatadiya.com/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`;

				const res = await fetch( url, {
					method: 'POST',
					body: formData
				} );
				const body = await res.json();
				console.warn( 'body', body );

				/**
				 * Populate state with the errors, or thank-you message...
				 */

				if ( body.mail_sent ) {

					state.cf7.forms[ id ].status  = "sent";
					state.cf7.forms[ id ].message = body.message;

				} else if ( body.validation_failed ) {

					state.cf7.forms[ id ].status = "failed";

					/**
					 * Populate errors from the response so React components
					 * can see them and re-render appropriately
					 */
					state.cf7.forms[ id ].validationErrors = {
						email: "The e-mail address entered is invalid."
					};

				}
			}
		}
	}
};


export default connect( MyForm );
