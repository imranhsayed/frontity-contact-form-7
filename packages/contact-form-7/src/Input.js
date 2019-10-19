import { FormIdContext } from "./Form";

const Input = ({ state, actions, name }) => {
	const id = React.useContext(FormIdContext);
	const onChange = event => {
		actions.cf7.changeInputValue(id, name, event.target.value);
	};

	return (
		<input onChange={onChange}/>
);
};
