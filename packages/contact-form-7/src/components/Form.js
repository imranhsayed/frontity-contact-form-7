import { connect, styled } from "frontity";
import React from "react";
import FormIdContext from "./../context/FormIdContext";

//export const FormIdContext = React.createContext(null);

const Form = ({ state, id, children }) => {

	// const form = state.cf7.forms[ id ];

	// Set the form id.
	state.cf7.forms[id] = {};

	

	const handleOnSubmit = (event) => {
		event.preventDefault();
		
		console.log(  );
	};

	return (
		<FormIdContext.Provider value={ id }>
			<FormElement onSubmit={ handleOnSubmit }>
				{children}
			</FormElement>
		</FormIdContext.Provider>
	)
};

const FormElement = styled.form``;

export default connect( Form );
