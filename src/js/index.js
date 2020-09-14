// default index.hmtl page
import index from "../index.html";
// seperate html file
import page from "../page.html";
// default scs styles
import css from "../scss/style.scss";

// material.io js code goes here
import { MDCRipple } from "@material/ripple/index";
const ripple = new MDCRipple(document.querySelector(".foo-button"));
