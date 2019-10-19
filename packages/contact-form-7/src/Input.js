import React from 'react';
import FormIdContext from "./FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, name }) => {

	const id = React.useContext(FormIdContext);

	const onChange = ( event ) => {

		console.warn( 'name', id, name, event.target.value );

		state.cf7.forms[id][event.target.name] = event.target.value;
		actions.cf7.changeInputValue( id, name, event.target.value );
	};

	return (
		<input onChange={onChange}/>
);
};

export default connect( Input );
