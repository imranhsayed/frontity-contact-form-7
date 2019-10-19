import { connect } from "frontity";
import FormIdContext from "./FormIdContext";

const Span = ({ className, state, children }) => {
	// Get the name from the class
	const name = className.split(" ")[1];
	// Get id from context
	const id = useContext(FormIdContext);
	// Get error from the state.
	const error = state.cf7.forms[id].validationErrors[name];

	return (
		<span css={css`background-color: ${error ? red : white};`}>
     {children}
    </span>
	);
};

export default connect( Span );
