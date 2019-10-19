import React from 'react';
import FormIdContext from "./../context/FormIdContext";
import { connect } from "frontity";

const Input = ({ state, actions, inputName, className }) => {
  
  const id = React.useContext(FormIdContext);

  console.log( id );
  const onChange = event => {
    //console.warn("name", id, name, event.target.value);
	console.log(id);
    // state.cf7.forms[id][event.target.name] = event.target.value;
    actions.cf7.changeInputValue(id, name, event.target.value);
  };

  return <input name={inputName} className={className} onChange={onChange} />;
};

export default connect( Input );
