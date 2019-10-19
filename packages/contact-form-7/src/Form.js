import { connect } from "frontity";

const Form = ({ state, id, children }) => {

	const form = state.cf7.forms[id];
	console.warn( 'State', form );



	return <div>sdfdg</div>;
};

export default connect( Form );
