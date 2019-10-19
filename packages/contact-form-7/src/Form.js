import React from 'react';
import { connect, styled } from "frontity";

export const FormIdContext = React.createContext(null);

const Form = ({ state, id, children }) => {

	const form = state.cf7.forms[ id ];

	const handleOnSubmit = () => {

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
