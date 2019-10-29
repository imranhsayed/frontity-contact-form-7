import React from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const Select = ({ state, actions, inputProps }) => {
  
  const id = React.useContext(FormIdContext);
  const inputName = inputProps.name;

  if ('undefined' === typeof (state.cf7.forms[id].inputVals[inputName])) {
    actions.cf7.changeInputValue({ id, inputName, value: inputProps.value });
  }

  const inputVal = state.cf7.forms[id].inputVals[inputName];
  console.warn( 'inputValSelect', inputVal );

	const onChange = ( event ) => {
		console.warn( 'selected', event.target.value );
    
    //[...event.target.options].filter(({ selected }) => selected).map(({ value }) => value)
		actions.cf7.changeInputValue( { id, inputName, value: event.target.value } );
    
	};

	return (
    <select
      name={ inputName }
      className={inputProps.className }
      value={ inputVal }
      onChange={ onChange }
      multiple={ inputProps.multiple }
    >
      { inputProps.options.map( (item, index) => (
        <option key={index} value={ item.value }>{ item.label }</option>
      ) ) }
    </select>
  );
};

export default connect( Select );
