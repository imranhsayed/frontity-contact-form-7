import React, { useEffect } from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
	const inputName = inputProps.name;

	useEffect( () => {

		// if ( 'undefined' === typeof ( state.cf7.forms[id].inputVals ) ) {
		//
		// 	state.cf7.forms[id].inputVals = ( '' !== inputName ) ? { [inputName]: inputProps.value } : {};
		//
		// } else if( '' !== inputName ){
		//
		// 	state.cf7.forms[id].inputVals[inputName] = inputProps.value;
		//
		// }

	}, [] );

	return (
		<>
		</>
	);
};

export default connect( Input );
