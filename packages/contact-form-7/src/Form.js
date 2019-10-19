export const FormIdContext = React.createContext(null);

import { connect } from "frontity";

const Form = ({ state, id, children }) => {

	const form = state.cf7.forms[ id ];

	return (
		<FormIdContext.Provider value={ id }>
			<div>{children}</div>
		</FormIdContext.Provider>
	)
};

export default connect( Form );
