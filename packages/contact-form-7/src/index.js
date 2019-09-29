
const cf7Inputs = {
	name: "cf7Inputs",
	test: node => node.component === "input" && /wpcf7-form-control/.test(node.props.className),
	process: node => {
		node.component = Input;
		return node;
	}
};

const cf7Form = {
	name: "cf7Form",
	test: node => node.component === "form" && node.props.className === "wpcf7-form",
	process: node => {
		node.component = Form;
		return node;
	}
};

export default {
	libraries: {
		html2react: {
			processors: [cf7Form, cf7Inputs]
		}
	}
}
