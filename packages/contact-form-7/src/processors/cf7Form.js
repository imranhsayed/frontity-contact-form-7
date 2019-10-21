import Form from "./../components/Form";

const cf7Form = {
	name: "cf7Form",
	test: node =>
		node.component === "form" && node.props.className === "wpcf7-form",
	process: node => {

		// Check for "_wpcf7".
		node.props.id  = node.children[ 0 ].children[ 0 ].props.value;
		node.component = Form;

		//console.warn( "cf7Form", node );
		return node;
	}
};

export default cf7Form;
