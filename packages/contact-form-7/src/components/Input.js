import React, { useEffect } from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
	const inputName = inputProps.name;

	console.warn( 'inpt', inputProps );

	const onChange = ( event ) => {

		actions.cf7.changeInputValue( { id, inputName, value: event.target.value } );
		console.warn( 'state', state );

	};

	// const inputVal = ( 'undefined' === typeof(state.cf7.forms[id].inputVals) ) ? '' : state.cf7.forms[id].inputVals[inputName];

	return (
    <input
      name={ inputProps.name }
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      value={ state.cf7.forms[id].inputVals[inputName] }
      onChange={onChange}
    />
  );
};

export default connect( Input );
