import React  from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
	const inputName = inputProps.name;

	const onChange = ( event ) => {

		actions.cf7.changeInputValue( { id, inputName, value: event.target.value } );
		console.warn( 'state', event.target.value );


	};

	return (
    <input
      name={ inputProps.name }
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      value={ state.cf7.forms[id].inputVals[inputName] }
      onChange={onChange}
    />
  );
};

export default connect( Input );
