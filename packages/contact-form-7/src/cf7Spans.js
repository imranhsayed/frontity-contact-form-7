import { connect } from "frontity";

const cf7Spans = {
	name: "cf7Spans",
	test: node => node.component === "span" && /wpcf7-form-control-wrap/.test(node.props.className),
	process: node => {
		node.component = Span;
		return node;
	}
};

export default connect( cf7Spans );
