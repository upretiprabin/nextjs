import React from "react";
import Header from "../components/Header";
import RequireAuth from "../helpers/requireAuth";
import { BsCheck } from "react-icons/bs";
import {RxCross1} from 'react-icons/rx'
import cookie from "react-cookies";
import { useRouter } from "next/router";
import {getCookie} from "cookies-next";

const Success = () => {
  const investigatorId = getCookie("uuid");

  const router = useRouter()
  return (
    <>
      <Header />
      <div className="popup-bg">
        <div className="success-popup">
          <span>
            <BsCheck size={50} />
          </span>

          <h5>You're All Set</h5>
          <p>Subscription has been successfully paid.</p>
          <button onClick={()=>router.push(`/dashboard/${investigatorId}`)}>GET STARTED</button>

          <div className="cross-container">
            <RxCross1 size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RequireAuth(Success);
