import React from 'react';
import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";

const Message = ({ state }) => {

	const id = React.useContext(FormIdContext);

	return (
		<div>{ state.cf7.forms[ id ].message }</div>
	)
};

export default connect( Message );
