import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import Errors from "../../components/Errors";
import {editClientDetails, loadClientDetails} from "./actions";
import Loader from "../../components/LoadingIndicator/Loader";

const EditClient = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state.editClient);
  const params = useRouter();
  const [client, setClient] = useState({
    companyName: "",
    nameOfPOC: "",
    emailOfPOC: "",
    phoneOfPOC: ""
  });

  const handleChange = (event) => {
    const target = event.target;
    setClient(prev => ({
      ...prev,
      [target.id]: target.value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    editClientDetails(dispatch, client, params.query.clientId);
  }

  useEffect(() => {
    loadClientDetails(dispatch, params.query.clientId).then(() => {
      setClient({
        companyName: selector?.client?.companyName,
        nameOfPOC: selector?.client?.nameOfPOC,
        emailOfPOC: selector?.client?.emailOfPOC,
        phoneOfPOC: selector?.client?.phoneOfPOC,
      });
    });
  }, []);

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
                    EDIT CLIENT
                  </div>
                </div>
              </div>
            </section>
            {selector.loading && <Loader/>}
            {!selector.loading &&
            <div className="text-editor">
              <form>
                <div className="grid-x">
                  <div className="medium-4 large-4 large-offset-2 medium-offset-2">
                    <div className="grid-x grid-padding-x">
                      <div className="cell padding-top10">
                        <label htmlFor="clientCompanyName">COMPANY NAME*: </label>
                        <input type="text" id="companyName" placeholder="Client Company Name"
                               value={selector?.client?.companyName || ''}
                               onChange={handleChange}/>
                      </div>
                    </div>
                  </div>
                  <div className=" medium-4 large-4">
                    <div className="grid-x grid-padding-x">
                      <div className="cell padding-top10">
                        <label htmlFor="case-label">POINT OF CONTACT NAME*: </label>
                        <input type="text" id="nameOfPOC" placeholder="Enter here ..."
                               value={selector?.client?.nameOfPOC || ''}
                               onChange={handleChange}/>
                      </div>
                      <div className="cell padding-top10">
                        <label>POINT OF CONTACT EMAIL:</label>
                        <input type="text" id="emailOfPOC" placeholder="Enter here ..."
                               value={selector?.client?.emailOfPOC || ''}
                               onChange={handleChange}/>
                      </div>
                      <div className="cell padding-top10">
                        <label>POINT OF CONTACT PHONE*:</label>
                        <input type="text" id="phoneOfPOC" placeholder="Enter here ..."
                               value={selector?.client?.phoneOfPOC || ''}
                               onChange={handleChange}/>
                      </div>
                      <div className="cell padding-top20">
                        <button id="middle-label" onClick={handleSubmit}
                                className="button-aqua text-center float-right box-shadow">
                          UPDATE CLIENT
                        </button>
                      </div>
                      <Errors errors={selector?.clientError}/>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            }
          </div>
        </div>
      </section>
    </article>
  );
}

export default EditClient
