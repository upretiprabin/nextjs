import React from "react";
import {addClient} from "./actions";
import FormikForm from "../../components/Formik";
import * as Yup from "yup"
import {useDispatch} from "react-redux";

export const CreateNewClient = () => {
  const initialValue = {
    companyName: "",
    nameOfPOC: "",
    emailOfPOC: "",
    phoneOfPOC: "",
  }

  const registerValidation = Yup.object({
    companyName: Yup.string().required("Required"),
    nameOfPOC: Yup.string().required("Required"),
    phoneOfPOC: Yup.string().required("Required"),
  });

  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    addClient(dispatch, values);
  }
  return (
    <article>
      <section className="dashboard-section">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="text-center padding-top20">
                  <img src={'/images/bx-briefcase.png'} alt="Briefcase"/>
                  <div className="gray-strip-title text-center">
                    CREATE NEW CLIENT
                  </div>
                </div>
              </div>
            </section>
            <div className="text-editor" style={{maxWidth: "500px", margin: "0 auto"}}>
              <FormikForm isFull={true} onSubmit={handleSubmit} validationSchema={registerValidation}
                          initialValues={initialValue}
                          fields={[
                            {type: "text", label: "COMPANY NAME*", name: "companyName"},
                            {type: "text", label: "POINT OF CONTACT NAME*", name: "nameOfPOC"},
                            {type: "text", label: "POINT OF CONTACT EMAIL", name: "emailOfPOC"},
                            {type: "text", label: "POINT OF CONTACT PHONE*", name: "phoneOfPOC"}
                          ]}
                          action={() => (
                            <>
                              <button type="submit" className="button-aqua text-center float-right box-shadow">CREATE</button>
                            </>
                          )}/>

            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default CreateNewClient
