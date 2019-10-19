import React from 'react';
import { connect, css } from "frontity";
import FormIdContext from "./../context/FormIdContext";

const Span = ({ className, state, children }) => {
	// Get the name from the class
	const name = className.split(" ")[1];
	// Get id from context
	const id = React.useContext( FormIdContext );
	console.warn( 'id', id );
	// Get error from the state.
	// const error = state.cf7.forms[id].validationErrors[name];
	const error = '';

	return (
		<span css={css`background-color: ${error ? 'red' : 'white'};`}>
     {children}
    </span>
	);
};

export default connect( Span );
