import Form from "./../components/Form";

const cf7Form = {
	name: "cf7Form",
	test: ({ node }) =>

		node.component === "form" && /wpcf7-form/.test( node.props.className ),

	processor: ({ node }) => {

		node.props.id  = node.children[ 0 ].children[ 0 ].props.value;
		node.component = Form;

		return node;
	}
};

export default cf7Form;
