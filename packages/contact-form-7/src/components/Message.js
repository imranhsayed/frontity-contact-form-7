import React from 'react';
import { connect, styled } from "frontity";
import FormIdContext from "./../context/FormIdContext";

const Message = ({ state }) => {

	const id = React.useContext(FormIdContext);
	const responseInfo = state.cf7.forms[ id ];

	console.warn( 'state', state );

	const getMessage = () => {
		if ( 'sent' === responseInfo.status ) {
			return <SuccessMessage>{ responseInfo.message }</SuccessMessage>
		} else if ( 'sent' === responseInfo.status ) {
			return <ErrorMessage>{ responseInfo.validationErrors }</ErrorMessage>
		} else {
			return '';
		}
	};

	return getMessage();
};

const SuccessMessage = styled.div`
	color: #215f0c;
    background-color: #d9f0d1;
    border-color: #c9ebbe;
    padding: 0.75rem 1.25rem;
`;

const ErrorMessage = styled.div`
	color: #ff2c18;
    background-color: #d9f0d1;
    border-color: #c9ebbe;
    padding: 0.75rem 1.25rem;
`;

export default connect( Message );
