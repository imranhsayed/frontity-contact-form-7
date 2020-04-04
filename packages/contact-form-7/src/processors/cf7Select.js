import Select from '../components/Select';

const cf7Select = {

	name: "cf7Select",
	test: ({ node }) => node.component === "select" && /wpcf7-form-control/.test( node.props.className ),
	processor: ({ node }) => {

		const ariaInvalid     = ( 'undefined' === typeof ( node.props[ 'aria-invalid' ] ) ) ? '' : node.props[ 'aria-invalid' ];
		const className       = ( 'undefined' === typeof ( node.props.className ) ) ? '' : node.props.className;
		const name            = ( 'undefined' === typeof ( node.props.name ) ) ? '' : node.props.name;
		const multiple        = ( 'undefined' === typeof ( node.props.multiple ) ) ? false : true;
		const optionChildrens = ( 'undefined' === typeof ( node.children ) ) ? [] : node.children;
		let value             = ( multiple ) ? [] : '';

		const options = optionChildrens.map( ( item ) => {

			let selected = ( 'undefined' !== typeof ( item.props.selected ) && 'selected' === item.props.selected ) ? true : false;

			if ( selected ) {
				if ( multiple ) {
					value.push( item.props.value );
				} else {
					value = item.props.value;
				}
			}

			return {
				label: item.children[ 0 ].content,
				value: item.props.value,
				selected: selected
			};
		} );

		node.props.inputProps = {
			ariaInvalid: ariaInvalid,
			className: className,
			name: name,
			value: value,
			options: options,
			multiple: multiple
		};

		node.component = Select;
		return node;
	}

};

export default cf7Select;
