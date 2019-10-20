import React, { useEffect } from 'react';
import FormIdContext from "./../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);

	useEffect( () => {
		console.warn( state.cf7.forms[id] );
		state.cf7.forms[id].inputVals[inputProps.name] = '';
	} );

	const onChange = ( event ) => {

		console.warn( 'name', id, name, event.target.value );

		// state.cf7.forms[id][event.target.name] = event.target.value;
		actions.cf7.changeInputValue( id, name, event.target.value );
	};

	return (
		<input
			name={inputProps.name}
			className={inputProps.className}
			aria-invalid={inputProps.ariaInvalid}
			aria-required={inputProps.ariaRequired}
			size={inputProps.size}
			type={inputProps.type}
			value={state.cf7.forms[id].inputVals[inputProps.name]}
			onChange={onChange}
		/>
);
};

export default connect( Input );
