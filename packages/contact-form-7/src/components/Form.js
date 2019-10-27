import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";
import Message from "./Message";

const Form = ({ state, actions, id, children, className, method }) => {

	actions.cf7.initForm( id );

	const handleOnSubmit = ( event ) => {
		event.preventDefault();

		actions.cf7.sendForm( id );
	};

	return (
		<FormIdContext.Provider value={ id }>
			<FormElement id={ id } method={ method } onSubmit={ handleOnSubmit } className={ className }>
				{children}
			</FormElement>
			<Message/>
		</FormIdContext.Provider>
	)
};

const FormElement = styled.form``;

export default connect( Form );
