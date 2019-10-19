export const FormIdContext = React.createContext(null);

const Form = ({ state, id, children }) => {
	const form = state.cf7.forms[ id ];
	return (
		<FormIdContext.Provider value={ id }>
			<div>Hello</div>
		</FormIdContext.Provider>
	)
};
