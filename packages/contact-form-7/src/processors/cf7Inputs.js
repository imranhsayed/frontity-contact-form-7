import { connect } from "frontity";
import Input from './../components/Input';

const cf7Inputs = {
	name: "cf7Inputs",
	test: node => node.component === "input" && /wpcf7-form-control/.test(node.props.className),
	process: node => {
		//console.warn( 'cf7Input' ,node );
		node.component = Input;
		return node;
	}
};

export default connect( cf7Inputs );
