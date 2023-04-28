import React, {useState} from "react";
import Header from "../components/Header";
import {BsCheck} from "react-icons/bs";
import RequireAuth from "../helpers/requireAuth";
import {RxCross1} from "react-icons/rx";

const CancelSubscription = () => {
  const [step1, setStep1] = useState(true);

  return (
    <>
      <Header/>
      <div className="popup-bg">
        <div className="subscription-popup">
          {step1 ? (
            <div className="pop-up-1">
              <h5>Are your sure want to cancel?</h5>
              <p>
                You will lose many amazing, wonderful features! If you would
                like to proceed with canceling your subscription, please type
                “DELETE” below.
              </p>
              <input type="text"/>
              <div>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">
                  By canceling my subscription, I agree to OntheCase.io{" "}
                  <a href="#"> Terms and Conditions</a>
                </label>
              </div>
              <div>
                <input type="checkbox" name="" id=""/>
                <label htmlFor="">
                  I am aware that my OntheCase.io account (with all of my
                  project, data, and files) will be deleted within 90 days from
                  subscription cancellation.
                </label>
              </div>

              <div className="button-container">
                <button
                  className="delete-button"
                  onClick={() => setStep1(false)}
                >
                  DELETE
                </button>
                <button className="gray-button">No, go back</button>
              </div>

              <span className="cross-container">
                <RxCross1 size={20}/>
              </span>
            </div>
          ) : (
            <div className="pop-up-2">
              <div className="heading-div">
                <span className="icon-container">
                  <BsCheck size={36}/>
                </span>
                <h5>Your subscription has been canceled successfully.</h5>
              </div>

              <p>
                Your feedback is very important to us. Why have you chosen to
                cancel?
              </p>

              <div className="input-container">
                <div>
                  <input type="radio" name="reason" id="" value="expensive"/>
                  <label htmlFor="">It's too expensive</label>
                </div>
                <div>
                  <input
                    type="radio"
                    name="reason"
                    id=""
                    value="another_product"
                  />
                  <label htmlFor="">I am switching to another product</label>
                </div>
                <div>
                  <input type="radio" name="reason" id="" value="other"/>
                  <label htmlFor="">Other</label>
                  <input type="text" placeholder="Type here"/>
                </div>
              </div>

              <button>SUBMIT</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RequireAuth(CancelSubscription);
