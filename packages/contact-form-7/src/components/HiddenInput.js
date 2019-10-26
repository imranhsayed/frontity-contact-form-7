import React  from 'react';
import FormIdContext from "../context/FormIdContext";
import { connect } from "frontity";

const HiddenInputs = ({ state, actions, inputProps }) => {

	const id = React.useContext(FormIdContext);
	const inputName = inputProps.name;
	const inputValue = inputProps.value;

	actions.cf7.addHiddenInputs( { id, inputName, value: inputValue } );

	return (
		<div>.</div>
	);
};

export default connect( HiddenInputs );
