import React from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Textarea = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
  const inputName = inputProps.name;
  const placeholder = inputProps.placeholder;

	const onChange = ( event ) => {

		actions.cf7.changeInputValue( { id, inputName, value: event.target.value } );
    
	};

	return (
    <textarea
      name={ inputProps.name }
      className={ inputProps.className }
      aria-invalid={ inputProps.ariaInvalid }
      aria-required={ inputProps.ariaRequired }
      cols={ inputProps.cols }
      rows={ inputProps.rows }
      value={ state.cf7.forms[id].inputVals[inputName] }
      onChange={ onChange }
      placeholder={ placeholder }
    />
  );
};

export default connect( Textarea );
