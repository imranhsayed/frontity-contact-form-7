import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";
import Message from "./Message";

const Form = ( { state, actions, id, children, className, method } ) => {

	actions.cf7.initForm( id );

	const handleOnSubmit = ( event ) => {

		event.preventDefault();

		// Set the loading to true first.
		state.cf7.forms[ id ].loading = true;

		actions.cf7.sendForm( id );

	};

	return (
		<FormIdContext.Provider value={ id }>
			<FormElement method={ method } onSubmit={ handleOnSubmit } className={ className }>
				{ children }
			</FormElement>
			{ state.cf7.forms[ id ].loading ? <Processing>Processing...</Processing> : '' }
			<Message/>
		</FormIdContext.Provider>
	)
};

const FormElement = styled.form``;
const Processing = styled.div``;

export default connect( Form );
