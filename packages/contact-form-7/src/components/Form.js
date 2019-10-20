import { connect, styled } from "frontity";
import { useEffect } from "react";
import FormIdContext from "./../context/FormIdContext";

const Form = ({ state, id, children }) => {

	state.cf7.forms[id] = {};

	const handleOnSubmit = ( event ) => {
		event.preventDefault();
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
