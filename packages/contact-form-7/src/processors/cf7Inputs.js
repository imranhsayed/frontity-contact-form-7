import { connect } from "frontity";
import Input from './../components/Input';

const cf7Inputs = {
	name: "cf7Inputs",
	test: node => node.component === "input" && /wpcf7-form-control/.test(node.props.className),
	process: node => {
		//console.warn( 'cf7Input' ,node );

		node.props.inputProps = {
			ariaInvalid: node.props["aria-invalid"],
			ariaRequired: node.props["aria-required"],
			className: node.props.className,
			name: node.props.name,
			size: node.props.size,
			type: node.props.type,
			value: node.props.value
		};

		node.component = Input;
		return node;
	}
};

export default connect( cf7Inputs );
