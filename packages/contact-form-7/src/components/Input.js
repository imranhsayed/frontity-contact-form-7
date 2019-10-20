import React, { useEffect } from 'react';
import FormIdContext from "./../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);

	useEffect( () => {
		console.warn( state.cf7.forms[id] );
		if( 'undefined' === typeof(state.cf7.forms[id]['inputVals']) ){
			state.cf7.forms[id]["inputVals"] = {};
			console.log("3nd", inputProps);
		} else{
			console.log("2nd", inputProps);
			state.cf7.forms[id]['inputVals'][inputProps.name] = '';
		}

		//state.cf7.forms[id]['inputVals'] = {};
		//state.cf7.forms[id].inputVals.[inputProps.name] = '';
	} );

	const onChange = ( event ) => {

		console.warn("form", state.cf7.forms[id]);

		// state.cf7.forms[id][event.target.name] = event.target.value;
		//actions.cf7.changeInputValue( id, name, event.target.value );
	};

	return (
		<input
			name={inputProps.name}
			className={inputProps.className}
			aria-invalid={inputProps.ariaInvalid}
			aria-required={inputProps.ariaRequired}
			size={inputProps.size}
			type={inputProps.type}
			value={''}
			onChange={onChange}
		/>
);
};

export default connect( Input );
