import Input from '../components/Input';

const cf7Inputs = {

	name: "cf7Inputs",
	test: ({ node }) => node.component === "input" && /wpcf7-form-control/.test( node.props.className ),
	processor: ({ node }) => {

		const ariaInvalid  = ( 'undefined' === typeof ( node.props[ 'aria-invalid' ] ) ) ? '' : node.props[ 'aria-invalid' ];
		const ariaRequired = ( 'undefined' === typeof ( node.props[ 'aria-required' ] ) ) ? '' : node.props[ 'aria-required' ];
		const className    = ( 'undefined' === typeof ( node.props.className ) ) ? '' : node.props.className;
		const name         = ( 'undefined' === typeof ( node.props.name ) ) ? '' : node.props.name;
		const size         = ( 'undefined' === typeof ( node.props.size ) ) ? '' : node.props.size;
		const type         = ( 'undefined' === typeof ( node.props.type ) ) ? '' : node.props.type;
		const value        = ( 'undefined' === typeof ( node.props.value ) ) ? '' : node.props.value;
		const placeholder  = ( 'undefined' === typeof ( node.props.placeholder ) ) ? '' : node.props.placeholder;

		node.props.inputProps = {
			ariaInvalid: ariaInvalid,
			ariaRequired: ariaRequired,
			className: className,
			name: name,
			size: size,
			type: type,
			value: value,
			placeholder: placeholder
		};

		node.component = Input;
		return node;
	}

};

export default cf7Inputs;
