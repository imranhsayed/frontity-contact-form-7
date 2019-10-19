import React from 'react';
import FormIdContext from "./../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputProps }) => {
  
	const id = React.useContext(FormIdContext);
	
	const onChange = event => {
		
		state.cf7.forms[id][inputProps.name] = event.target.value;
		
	};

	const inputVal =
    	"" !== state.cf7.forms[id][inputProps.name]
      ? state.cf7.forms[id][inputProps.name]
      : inputProps.value; 
	
  return (
    <input
      name={inputProps.name}
      className={inputProps.className}
      aria-invalid={inputProps.ariaInvalid}
      aria-required={inputProps.ariaRequired}
      size={inputProps.size}
      type={inputProps.type}
      value={inputVal}
      onChange={onChange}
    />
  );
};

export default connect( Input );
