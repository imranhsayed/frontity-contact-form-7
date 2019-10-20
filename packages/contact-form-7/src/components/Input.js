import React, { useEffect } from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
	const inputName = inputProps.name;

	useEffect( () => {
		
		if ( 'undefined' === typeof ( state.cf7.forms[id].inputVals ) ) {
			
			state.cf7.forms[id].inputVals = ( '' !== inputName ) ? { [inputName]: '' } : {};

		} else if( '' !== inputName ){

			state.cf7.forms[id].inputVals[inputName] = '';

		}
		
	}, [] );

	const onChange = ( event ) => {

		state.cf7.forms[id].inputVals[inputName] = event.target.value;

	};
	
	const inputVal = ( 'undefined' === typeof(state.cf7.forms[id].inputVals) ) ? '' : state.cf7.forms[id].inputVals[inputName];

	return (
    <input
      name={inputProps.name}
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      value={inputVal}
      onChange={onChange}
    />
  );
};

export default connect( Input );
