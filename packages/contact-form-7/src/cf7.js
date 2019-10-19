import { connect } from "frontity";

const Form = props => {
  console.log(props);
  return <div>sdfdg</div>;
};

const cf7Form = {
  name: "cf7Form",
  test: node =>
    node.component === "form" && node.props.className === "wpcf7-form",
  process: node => {
    const id = node.children[0].children[0].props.value;
    node.props.id = id;

    node.component = Form;

    console.log("cf7Form", node);
    //node.component = Form;
    return node;
  }
};

export default connect(cf7Form);