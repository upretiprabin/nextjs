import React, {useEffect, useState} from "react";
import FormikForm from "../../components/Formik";
import * as Yup from "yup"
import agencySize from "../Register/AgencySize.json";
import stateData from "../Register/StateData.json";
import {getData, putData} from "../../helpers/serverHelper";
import cookie from 'react-cookies';
import Loader from "../../components/LoadingIndicator/Loader";
import swal from "sweetalert";

export const EditProfile = () => {
  const initialValue = {
    photo: "",
    agencyLogo: "",
    firstName: "",
    lastName: "",
    licenseId: "",
    licenseInfo: "",
    agencyWebsite: "",
    agencyFax: "",
    member: "",
    phone: "",
    email: "",
    agencyAddress: "",
    agencyCity: "",
    agencyState: "",
    agencyZipCode: "",
    agencyName: "",
    description: "",
    agencySize: ""
  }
  const [state, setState] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const updateState = async () => {
    try {
      setLoading(true);
      const investigatorId = cookie.load('uuid');
      const investigator = await getData('/investigators/' + investigatorId + "/retrieve");
      setState({
        agencyName: investigator.agencyName || "",
        phone: investigator.phone || "",
        agencyFax: investigator.agencyFax ? investigator.agencyFax : "",
        agencyWebsite: investigator.agencyWebsite ? investigator.agencyWebsite : "",
        email: investigator.email || "",
        agencyZipCode: investigator.agencyZipCode || "",
        licenseId: investigator.licenseId || "",
        licenseInfo: investigator.licenseInfo || "",
        firstName: investigator.firstName || "",
        lastName: investigator.lastName || "",
        agencyState: investigator.agencyState || "",
        agencyAddress: investigator.agencyAddress || "",
        agencyCity: investigator.agencyCity || "",
        photo: investigator.photo || "",
        agencyLogo: investigator.agencyLogo || "",
        member: investigator.member || "",
        description: investigator.description || "",
        agencySize: investigator.agencySize || ""
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    updateState();
  }, [])

  const registerValidation = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    licenseId: Yup.number().required("Required"),
    phone: Yup.number().required("Required"),
    email: Yup.string().email("Email is not valid").required("Required"),
    agencyAddress: Yup.string().required("Required"),
    agencyCity: Yup.string().required("Required"),
    agencyState: Yup.string().required("Required"),
    agencyZipCode: Yup.string().required("Required"),
    agencyName: Yup.string().required("Required"),
    agencySize: Yup.string().required("Required")
  })


  const handleSubmit = async (values) => {
    try {
      const investigatorId = cookie.load('uuid');
      const {photo, agencyLogo, ...rest} = values;
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("agencyLogo", agencyLogo);
      formData.append("investigatorInfo", JSON.stringify(rest));
      const investigator = await putData({url: '/investigators/' + investigatorId + "/update", req: formData});
      swal("Success!", "Profile updated successfully", "success");
    } catch (error) {
      swal("Ohh!", "Failed to update Profile. Please try again later.", "error");
    }
  }

  return (
    <article>
      <section className="dashboard-section myProfilePage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section">
              <div className="top-row-text-editor">
                <div className="text-center padding-top20">
                  <img src={"/images/bx-briefcase.png"} alt="Briefcase"/>
                  <div className="gray-strip-title text-center">
                    EDIT PROFILE
                  </div>
                </div>
              </div>
            </section>
            {loading && <Loader/>}
            {
              !loading &&
              <div className="text-editor clearfix">
                <div className="tab_reel">
                  <div className="formContainer">

                    <FormikForm enableReinitialize formClass="formClass" eachFieldDiv="eachFieldDiv"
                                onSubmit={handleSubmit} validationSchema={registerValidation} initialValues={state}
                                fields={[{type: "file", label: "Profile Image", name: "photo"},
                                  {type: "file", label: "Agency Logo ", name: "agencyLogo"},
                                  {type: "text", label: "First Name", name: "firstName"},
                                  {type: "text", label: "Last Name", name: "lastName"},
                                  {type: "number", label: "License Number", name: "licenseId"},
                                  {type: "number", label: "Phone Number", name: "phone"},
                                  {type: "email", label: "Email", name: "email"},
                                  {type: "number", label: "Fax", name: "agencyFax"},
                                  {type: "text", label: "Website", name: "agencyWebsite"},
                                  {type: "text", label: "Street", name: "agencyAddress"},
                                  {type: "text", label: "City", name: "agencyCity"},
                                  {
                                    as: "select",
                                    label: "State",
                                    options: {data: stateData},
                                    name: "agencyState",
                                  },
                                  {type: "text", label: "ZIP Code", name: "agencyZipCode"},
                                  {type: "text", label: "Company / Agency", name: "agencyName"},
                                  {
                                    as: "select",
                                    label: "Agency Size",
                                    options: {data: agencySize},
                                    name: "agencySize",
                                  },
                                  {type: "text", label: "License Info", name: "licenseInfo"},
                                  {
                                    component: "textarea",
                                    label: "Member",
                                    sublabel: "(Separate each member value with Enter)",
                                    name: "member",
                                    rows: "5"
                                  },
                                  {component: "textarea", label: "Description", name: "description", rows: "5"}]}
                                action={() => (
                                  <div className="button-wrapper">
                                    <button type="submit" className="margin-auto">Update Profile</button>
                                  </div>
                                )}/>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </section>
    </article>
  );
}

export default EditProfile;
