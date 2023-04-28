import React from "react";
import {Helmet} from "react-helmet";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {compose} from "redux";
import PropTypes from "prop-types";
import logo from "../../images/logo-files/OnTheCase-Logo-tag.png";
import "./style.css";
import reducer from "./reducer";
import saga from "./saga";
import HeaderLink from "../../components/Header/HeaderLink";
import {makeSelectError, makeSelectLoading} from "./selectors";
import {changeUuid, resetRequest} from "./actions";
import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";
import FormikForm from "../../components/Formik";

import * as Yup from "yup"

export class ResetPassword extends React.Component {


    initialValue = {
        password:"",
        confirmPassword:""
      }
    
      registerValidation = Yup.object({
        password:Yup.string().required("Required"),
        confirmPassword:Yup.string().required("Required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
      })

    constructor(props) {
        super(props);
    }

    handleSubmit = (values) => {
        this.props.resetRequest(values)
    }

    componentDidMount() {
        const {params} = this.props.match;
        this.props.onLoadUser(params.userId);
    }

    render() {
        const {loading, error} = this.props;
        let year = new Date().getFullYear();

        return (
            <section className="default-wrapper resetPassword">
                <Helmet>
                    <title>Reset Password</title>
                </Helmet>
                <section className="inner">

                    <div className="main-logo">
                        <HeaderLink to={'/'}>

                        <img src={logo} alt="Main Logo"/>
                        </HeaderLink>
                    </div>
                    <div className="form-description">
                        <strong>Reset Your Password</strong>
                        <p>Please enter your new password.</p>
                    </div>
                    <FormikForm onSubmit={this.handleSubmit} validationSchema={this.registerValidation} initialValues={this.initialValue} fields={[ { type: "password", label: "Password", name: "password" }, { type: "password", label: "Confirm Password", name: "confirmPassword" }]} action={() => (<div style={{display:"flex"}} className="button-section clearfix"><button style={{flex:1}} type="submit">Reset Password</button> <HeaderLink style={{flex:1}} className="links"
                    to={`/login`}>Return to Login</HeaderLink> </div>)} />
                    <div className="clearfix copyright-text">© Copyright {year} On The Case</div>
                </section>
            </section>
        );
    }
}

ResetPassword.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    resetRequest: PropTypes.func,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    onLoadUser: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
    return {
        onLoadUser: evt => dispatch(changeUuid(evt)),
        resetRequest: evt => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(resetRequest(evt));
        }
    };
}

const mapStateToProps = createStructuredSelector({
    error: makeSelectError(),
    loading: makeSelectLoading()
});

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
);

const withReducer = injectReducer({key: "resetpassword", reducer});
const withSaga = injectSaga({key: "resetpassword", saga});

export default compose(
    withReducer,
    withSaga,
    withConnect
)(ResetPassword);
