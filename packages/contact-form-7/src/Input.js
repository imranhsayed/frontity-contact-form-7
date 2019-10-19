import React from 'react';
import { FormIdContext } from "./Form";
import { connect } from "frontity";

const Input = ({ state, actions, name }) => {

	const id = React.useContext(FormIdContext);

	console.warn( 'id', actions );

	const onChange = ( event ) => {
		console.warn( 'name', id, name, event.target.value );
		actions.cf7.changeInputValue( id, name, event.target.value );
	};

	return (
		<input onChange={onChange}/>
);
};

export default connect( Input );
