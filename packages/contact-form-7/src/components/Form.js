import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";

const Form = ({ state, id, children }) => {

	// const form = state.cf7.forms[ id ];

	// Set the form id.
	state.cf7.forms[id] = {};

	//console.warn( 'children', children );

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
