import { connect } from "frontity";
import cf7Form from './processors/cf7Form';
import cf7Inputs from "./processors/cf7Inputs";
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

			/**
			 * Initialize the form input object in the state.
			 *
			 * @param {Object} state State.
			 * @return {Function}
			 */
			initForm: ( { state } ) => ( id ) => {

				if ( ! state.cf7.forms[id] ) {
					state.cf7.forms[id] = { inputVals: {} };
				}
			},

			/**
			 * Initialize the input values in the state.
			 *
			 * @param {Object} state State.
			 * @return {Function}
			 */
			initInput: ( { state } ) => ( { id, inputName } ) => {
					state.cf7.forms[id].inputVals = ( '' !== inputName ) ? { [inputName]: '' } : {};
			},

			/**
			 * Handle on change event when user enters values in the form.
			 *
			 * Set the input value entered by the user in the state.
			 *
			 * @param {Object} state State.
			 * @return {Function}
			 */
			changeInputValue: ( { state } ) => ( { id, inputName, value } ) => {
				state.cf7.forms[id].inputVals[inputName] = value;
			},

			/**
			 * Add hidden input values.
			 *
			 * @param {Object} state State.
			 * @return {Function}
			 */
			addHiddenInputs: ( { state } ) => ( { id, inputName, value } ) => {
				state.cf7.forms[id].inputVals[inputName] = value;
			},

			/**
			 * Handle form submit.
			 *
			 * @param {Object} state State.
			 * @return {Function}
			 */
			sendForm: ( { state } ) => async id => {

				const myData = state.cf7.forms[id].inputVals;

				// Create new form data to send the post request with form data.
				let formData = new FormData();

				Object.keys( myData  ).forEach( ( key ) => { 
					formData.append( key, myData[ key ] ) ;
				});

				// CF7 REST API URL.
				const url = `https://smitpatadiya.com/wp-json/contact-form-7/v1/contact-forms/${id}/feedback`;

				// Post Request.
				const res = await fetch( url, {
					method: 'POST',
					body: formData
				} );
				const body = await res.json();

				/**
				 * Populate state with the errors, or thank-you message...
				 */
				if ( 'mail_sent' === body.status ) {

					state.cf7.forms[ id ].status  = "sent";
					state.cf7.forms[ id ].message = body.message;

					// Once the email is sent, clear the form fields.
					//console.warn( 'sdsd', state.cf7.forms[ id ].inputVals );
					state.cf7.forms[ id ].inputVals = {};

				} else if ( 'validation_failed' === body.status ) {

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
