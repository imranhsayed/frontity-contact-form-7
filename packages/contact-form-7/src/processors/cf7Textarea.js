import Textarea from '../components/Textarea';

const cf7Textarea = {

	name: "cf7Textarea",
	test: ({ node }) => node.component === "textarea" && /wpcf7-form-control/.test( node.props.className ),
	processor: ({ node }) => {

		const ariaInvalid  = ( 'undefined' === typeof ( node.props[ 'aria-invalid' ] ) ) ? '' : node.props[ 'aria-invalid' ];
		const ariaRequired = ( 'undefined' === typeof ( node.props[ 'aria-required' ] ) ) ? '' : node.props[ 'aria-required' ];
		const className    = ( 'undefined' === typeof ( node.props.className ) ) ? '' : node.props.className;
		const name         = ( 'undefined' === typeof ( node.props.name ) ) ? '' : node.props.name;
		const cols         = ( 'undefined' === typeof ( node.props.cols ) ) ? '' : node.props.cols;
		const rows         = ( 'undefined' === typeof ( node.props.rows ) ) ? '' : node.props.rows;
		const value        = ( 'undefined' === typeof ( node.props.value ) ) ? '' : node.props.value;
		const placeholder  = ( 'undefined' === typeof ( node.props.placeholder ) ) ? '' : node.props.placeholder;

		node.props.inputProps = {
			ariaInvalid: ariaInvalid,
			ariaRequired: ariaRequired,
			className: className,
			name: name,
			cols: cols,
			rows: rows,
			value: value,
			placeholder: placeholder
		};

		node.component = Textarea;
		return node;
	}

};

export default cf7Textarea;
