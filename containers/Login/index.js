// import React from "react";
// import {Helmet} from "react-helmet";
// import {connect} from "react-redux";
// import {createStructuredSelector} from "reselect";
// import {compose} from "redux";
// import PropTypes from "prop-types";
// import logo from "../../images/logo-files/OnTheCase-Logo-tag.png";
// import CrossIcon from "../../images/bx-x-circle-cross.png";
// import "./style.css";
// import reducer from "./reducer";
// import saga from "./saga";
// import HeaderLink from "../../components/Header/HeaderLink";
// import {makeSelectError, makeSelectLoading} from "./selectors";
// import {loginRequest} from "./actions";
// import injectReducer from "../../utils/injectReducer";
// import injectSaga from "../../utils/injectSaga";
// import LoginLink from "components/LoginLink";

// import FormikForm from "../../components/Formik";

// import * as Yup from "yup"
// import Loader from "../../components/LoadingIndicator/Loader";

// export class Login extends React.Component {

//   initialValue = {
//     username: "",
//     password: "",
//   }

//   registerValidation = Yup.object({
//     username: Yup.string().required("Required"),
//     password: Yup.string().required("Required"),
//   })

//   handleSubmit = (values) => {
//     this.props.loginRequest(values);
//   }

//   showError(err) {
//     if (err === "") {
//       return "";
//     }
//     if (err === "Sorry, we could not find an account with that username.") {
//       return (
//         <div className="error-message">
//           <div className="left-icon">
//             <img src={CrossIcon} />
//           </div>
//           <div className="message-text">
//             Sorry, we couldn’t find an account with that
//             username. Let’s help you <a href="/forgotpassword">recover your account.</a>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="error-message">
//           <div className="left-icon">
//             <img src={CrossIcon} />
//           </div>
//           <div className="message-text">
//             {err}
//           </div>
//         </div>);
//     }
//   }

//   render() {
//     const { loading, error } = this.props;
//     let year = new Date().getFullYear();

//     return (
//       <section className="default-container">
//         <Helmet>
//           <title>Login</title>
//         </Helmet>
//         <section className="login-cover-section">
//           <div className="login-header">
//             <div className="main-logo">
//               <HeaderLink to={"/"}>

//                 <img src={logo} alt="Main Logo" />
//               </HeaderLink>
//             </div>
//             <div className="logo-description">
//               Private Investigator's job made easy.
//             </div>
//           </div>
//           <div className=" login-signup-penal">
//             <div className="form-description">
//               <strong>Automate your day-to-day tasks. </strong>
//               <p>Generating reports, researching subjects, client invoice and payments, surveillance, chat, calendar and
//                 more.</p>
//             </div>
//             <div className="phone_wrapper">
//               <div className="form-header-top">
//                 <div className="tab-nav">
//                   <div className="tab tab1 active">
//                     <div className="block">Login</div>
//                   </div>
//                   <div className="tab tab2 register">
//                     <div className="block">
//                       <LoginLink to="/register">Register</LoginLink>
//                     </div>
//                   </div>
//                   <div className="indicator" />
//                 </div>
//               </div>
//               {loading && <Loader/>}
//               {!loading && <main>
//                 <div className="tab_reel">
//                   <div className="tab_panel2">
//                     <FormikForm isFull={true} onSubmit={this.handleSubmit} validationSchema={this.registerValidation} initialValues={this.initialValue} fields={[{ type: "text", label: "Username", name: "username" }, { type: "password", label: "Password", name: "password" }]} action={() => (<> <HeaderLink className="forgotpassword"
//                       to={"/forgotpassword"}>Forgot Password?</HeaderLink><button type="submit">Login</button> </>)} />
//                     {this.showError(error.toString())}
//                   </div>
//                 </div>
//               </main>}
//               <div className="dot-indicator">
//               </div>
//             </div>
//             <div className="form-footer">© Copyright {year} On The Case</div>
//           </div>
//         </section>
//       </section>
//     );
//   }
// }

// Login.propTypes = {
//   loading: PropTypes.bool,
//   error: PropTypes.string,
//   loginRequest: PropTypes.func,
//   username: PropTypes.string,
//   password: PropTypes.string,
//   onChangeUsername: PropTypes.func,
//   onChangePassword: PropTypes.func
// };

// export function mapDispatchToProps(dispatch) {
//   return {
//     loginRequest: values => {
//       dispatch(loginRequest(values));
//     }
//   };
// }

// const mapStateToProps = createStructuredSelector({
//   error: makeSelectError(),
//   loading: makeSelectLoading()
// });

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps
// );

// const withReducer = injectReducer({ key: "login", reducer });
// const withSaga = injectSaga({ key: "login", saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect
// )(Login);
