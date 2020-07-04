import { connect } from "frontity";
import HiddenInput from '../components/HiddenInput';

const cf7HiddenInputs = {
	name: "cf7HiddenInputs",
	test: ({ node }) => node.component === "input" && /hidden/.test( node.props.type ) && /_wpcf7/.test( node.props.name ),
	processor: ({ node }) => {

		const name  = ( 'undefined' === typeof ( node.props.name ) ) ? '' : node.props.name;
		const value = ( 'undefined' === typeof ( node.props.value ) ) ? '' : node.props.value;

		node.props.inputProps = {
			name: name,
			value: value
		};

		node.component = HiddenInput;
		return node;
	}
};

export default connect( cf7HiddenInputs );
