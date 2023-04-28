import React from "react";
import stateData from "./StateData.json";
import agencySize from "./AgencySize.json";
import {register} from "./actions";
import LoginLink from "../../components/LoginLink";
import FormikForm from "../../components/Formik";
import * as Yup from "yup";
import HeaderLink from "../../components/Header/HeaderLink";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../components/LoadingIndicator/Loader";
import Head from "next/head";

const registerValidation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  password: Yup.string().required("Required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain atleast 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Required"),
  phone: Yup.number().required("Required")
    .min(4, "Must contain atleast 4 digits"),
  agencyName: Yup.string().required("Required"),
  agencyState: Yup.string().required("Required"),
  agencySize: Yup.string().required("Required"),
});


const Register = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.register);

  const router = useRouter();

  const initialValue = {
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    email: (router.query.email) || "",
    phone: "",
    agencyName: "",
    agencyState: "",
    agencySize: ""
  };

  const handleSubmit = (values) => {
    values.username = values.email;
    values.confirmPassword = values.password;
    const {...rest} = values;
    register(dispatch, {...rest}, router.push);
  };

  const showLogin = () => {
    return (
      <div className="tab tab1 login">
        <div className="block">
          <LoginLink href="/login">Login</LoginLink>
        </div>
      </div>
    );
  }

  const loginLink = showLogin();
  let year = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>OnTheCase | Register</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <section className="default-container">
        <section className="login-cover-section">
          <div className="login-header">
            <div className="main-logo">
              <HeaderLink href={"/"}>
                <img src={'/images/logo-files/OnTheCase-Logo-tag.png'} alt="Main Logo"/>
              </HeaderLink>
            </div>
            <div className="logo-description">
              Private Investigator’s job made easy.
            </div>
          </div>
          <div className=" login-signup-penal">
            <div className="form-description">
              Automate your day-to-day tasks. Generating reports, researching
              subjects, client invoice and payments, surveillance, chat,
              calendar and more.
            </div>
            <div className="phone_wrapper">
              <div className="form-header-top">
                <div className="tab-nav">
                  {loginLink}
                  <div className={"tab tab2 register active"}>
                    <div className="block">Register</div>
                  </div>
                  <div className="indicator"/>
                </div>
              </div>
              {selector.status === 'loading' && <Loader/>}
              {
                selector.status !== 'loading' &&
                <main>
                  <div className="tab_reel">
                    <div className="tab_panel2">
                      <FormikForm
                        onSubmit={handleSubmit}
                        isFull={true}
                        validationSchema={registerValidation}
                        initialValues={initialValue}
                        fields={[
                          {
                            type: "text",
                            label: "First Name",
                            name: "firstName",
                          },
                          {type: "text", label: "Last Name", name: "lastName"},
                          {type: "email", label: "Email/Username", name: "email"},
                          {type: "password", label: "Password", name: "password"},
                          {
                            type: "number",
                            label: "Phone Number",
                            name: "phone",
                          },
                          {
                            type: "text",
                            label: "Company / Agency",
                            name: "agencyName",
                          },
                          {
                            as: "select",
                            label: "Select State",
                            options: {data: stateData},
                            name: "agencyState",
                          },
                          {
                            as: "select",
                            label: "Select Agency Size",
                            options: {data: agencySize},
                            name: "agencySize",
                          },
                        ]}
                        action={() => <button type="submit">Register</button>}
                      />
                      <br/>
                      <div className="terms_policy">
                        <p>By creating an account, you are agreeing to our
                          <br/>
                          <a href="/termsofservice">Terms of Service</a> and <a href="/privacypolicy">Privacy Policy</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </main>}
            </div>
            <div className="form-footer">© Copyright {year} On The Case</div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Register;