import { connect } from "frontity";
import cf7Form from './cf7Form';



const cf7Inputs = {
	name: "cf7Inputs",
	test: node => node.component === "input" && /wpcf7-form-control/.test(node.props.className),
	process: node => {
		//console.warn( 'cf7Input' ,node );
		//node.component = Input;
		return node;
	}
};

const cf7HiddenInputs = {
  name: "cf7HiddenInputs",
  test: node =>
    node.component === "input" &&
    typeof(node.parent) !== 'undefined' &&
	node.parent.parent.component === "form",
	// also check class name
  process: node => {
	  //console.log(state);
    console.warn("cf7HiddenInput", node);
    //node.component = Input;
    return node;
  }
};



const MyForm = {
  libraries: {
    html2react: {
      processors: [cf7Form ]
    }
  },

  actions: {
    cf7: {
      sendForm: ({ state }) => async data => {
        console.log(state);
        return;

        const res = await fetch(
          `https://smitpatadiya.com//wp-json/contact-form-7/v1/contact-forms/41/feedback`
        );

        const body = await res.json();
        // Populate state with the errors, or thank-you message...
        state.cf7.forms[data.id].message = body.message;
        if (body.mail_sent) {
          state.cf7.forms[data.id].status = "sent";
          state.cf7.forms[data.id].message = body.message;
        } else if (body.validation_failed) {
          state.cf7.forms[data.id].status = "failed";
          // Populate errors from the response so React components
          // can see them and re-render appropriately...
          state.cf7.forms[data.id].validationErrors = {
            email: "The e-mail address entered is invalid."
          };
        }
      }
    }
  }
};


export default connect(MyForm);
