import React, { useContext, useEffect } from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

/**
 * Input Component.
 *
 * @param {Object} state Frontity State.
 * @param {Object} actions Actions methods.
 * @param {Object} inputProps Input props.
 * @return {*}
 */
const Input = ( { state, actions, inputProps } ) => {

	// Context is used so that we can pass the form id to different components.
	const id          = useContext( FormIdContext );
	const inputName   = inputProps.name;
  const placeholder = inputProps.placeholder;

  useEffect(() => {
    actions.cf7.changeInputValue( { id, inputName, value: ''} );
  }, [])

	if ( 'undefined' === typeof ( state.cf7.forms[ id ].inputVals[ inputName ] ) ) {
		actions.cf7.changeInputValue( { id, inputName, value: '' } );
	}

	/**
	 * OnChange handler for input.
	 *
	 * @param {Object} event Event.
	 *
	 * @return {void}
	 */
	const onChange = ( event ) => {
    if(event.target.checked) {
      actions.cf7.changeInputValue( { id, inputName, value: 'yes' } );
    } else {
      actions.cf7.changeInputValue( { id, inputName, value: '' } );
    }
	};

	return (
		<input
			name={ inputProps.name }
			className={ inputProps.className }
			aria-invalid={ inputProps.ariaInvalid }
			aria-required={ inputProps.ariaRequired }
			size={ inputProps.size }
			type={ inputProps.type }
			value={ state.cf7.forms[ id ].inputVals[ inputName ] }
			onChange={ onChange }
			placeholder={ placeholder }
		/>
	);
};

export default connect( Input );
