import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import HeaderLink from "./HeaderLink";
import {getInfo} from "./actions";
import {useRouter} from "next/router";
import {CgAdd} from "react-icons/cg";
import {FaHome} from "react-icons/fa";
import initStripe from 'stripe';
import {deleteData, postData} from "../../helpers/serverHelper";
import {logOutAuth} from "../../containers/Login/reducer";
import {getCookie} from "cookies-next";
import {RxCross1} from "react-icons/rx";
import {BsCheck} from "react-icons/bs";

const Header = ({priceData, idData}) => {
  const uuid = getCookie('uuid');

  const [showPopup, setShowPopup] = useState(false)
  const [cancelSubscriptionStep1, setCancelSubscriptionStep1] = useState(true);


  const [shownData, setShown] = useState(false);
  const [role, setRole] = useState([]);
  const [price, setPrice] = useState({priceId: '', price: ''});

  const dispatch = useDispatch();
  const router = useRouter();
  const selector = useSelector(state => state.info);

  useEffect(() => {
    console.log('header selector', selector);
    setRole(getCookie('role'));
    getInfo(dispatch);
    getStripePrices();
  }, []);

  const cancelSubscription = async () => {

    console.log(uuid, "here uuid");
    try {
      const data = await deleteData('/subscription/' + uuid + '/cancel')
      // const data = await deleteData('/subscription/96ec18ed-06c9-404d-b17f-b30718954d6a/cancel')
      setCancelSubscriptionStep1(false)
    } catch (error) {
      console.log(error, "error occured");
    }
  }

  const submitSubscriptionPopup = () => {
    setShowPopup(false);
    router.push(`/dashboard/${uuid}`)
  }


  const buyPlan = async () => {
    const customerId = getCookie('customerId');
    try {
      // customerId
      console.log(price, customerId, "customer id and price");
      const data = await postData({
        url: '/checkout/session?customerId=' + customerId + '&priceId=price_1MK54JGZvMsurFuhrUUYLzht',
        req: {}
      }); //idData
      console.log(data.sessionId, 'on ch');
      const stripe = await initStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
      await stripe.redirectToCheckout({sessionId: data.sessionId});
    } catch (error) {

      console.log(error, 'err');
    }
  }

  const getStripePrices = async () => {
    try {
      console.log('here in stripe');
      const stripe = initStripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
      // console.log('here in stripe again',stripe);
      const {data: prices} = await stripe.prices.list();

      const plans = await Promise.all(
        prices.map(async (price) => {
          const product = await stripe.products.retrieve(price.product);
          return {
            id: price.id,
            name: product.name,
            price: price.unit_amount,
            interval: price.recurring.interval,
            currency: price.currency,
          };
        })
      );


      const sortedPlans = plans.sort((a, b) => a.price - b.price);
      setPrice({price: sortedPlans[0].price, priceId: sortedPlans[0].id});

      console.log(sortedPlans, 'sorted');
    } catch (error) {
      console.log(error);
    }
  }

  const toggle = () => {
    setShown(prev => !prev);
  }

  const handleLogout = () => {
    dispatch(logOutAuth());
    router.replace('/login');
  }

  if (role?.includes("ROLE_DETECTIVE")) {
    let investigatorId = getCookie('uuid');
    const {investigator, photoLink} = selector;
    return (
      <div>
        <div className="grid-x grid-margin-x medium-margin-collapse ">
          <div className="cell shrink hidden-header">
            <div className="dash-logo c-pointer">
              <HeaderLink href={`/dashboard/${investigatorId}/`}>
                <img src={'/images/logo-files/OnTheCase-hori-Logo-tag.png'} alt="On The Case"/>
              </HeaderLink>
            </div>
          </div>
          <div className="cell auto hidden-header">
            <div className="top-header clearfix">
              <div className="autocomplete search-box hidden-header">
                <input
                  id="search" type="text" className="text-search"
                  placeholder="Search any case or client..."
                />
                <i className="search-icon">
                  <img src={'/images/search-icon.png'} alt="icons"/>
                </i>
              </div>

              <div className="img-text-box" onClick={toggle}>
                <div className="product-title hidden-header">
                  <strong>{(investigator && Object.keys(investigator).length > 0) ? investigator.firstName + " " + investigator.lastName : ""}</strong>
                </div>
                <div className="circle-box">
                  <img src={photoLink ? photoLink : '/images/profile-icon.png'} alt="icons"/>
                </div>
                <div className="drop-down-menu" style={{
                  display: shownData ? "block" : "none"
                }}>
                  <ul>
                    <li>
                      <HeaderLink href={`/editprofile/${investigatorId}/`}>
                        <span>
                          <img src={'/images/profile-icon.png'}/>My Profile
                        </span>
                      </HeaderLink>
                    </li>
                    <li>
                      <button onClick={handleLogout}>
                        <span>
                          <img src={'/images/logout-icon.png'}/>Logout</span>
                      </button>
                    </li>
                    <li>
                      <HeaderLink href="#" onClick={() => setShowPopup(true)}>
                        <span>
                          <img src={'/images/profile-icon.png'}/>Cancel Subscription
                        </span>
                      </HeaderLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="dash-header clearfix">
              <div className={"topNav"}>
                <ul>
                  <li>
                    <HeaderLink href={`/dashboard/${investigatorId}/`} className="header-button">
                      DASHBOARD
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/createnewcase/${investigatorId}/`} className="header-button">
                      NEW CASE
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/myreports/${investigatorId}/`} className="header-button">
                      MY CASES
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/myclients/${investigatorId}/`} className="header-button">
                      MY CLIENTS
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/mydocuments`} className="header-button">
                      DOCUMENTS
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/createnote`} className="header-button">
                      NOTES
                    </HeaderLink>
                  </li>
                  <li>
                    <HeaderLink href={`/myactivitylogs/${investigatorId}/`} className="header-button">
                      ACTIVITY LOG
                    </HeaderLink>
                  </li>
                  {/* <li>
                    <HeaderLink href={`/subscription/${investigatorId}/`} className="header-button">
                      SUBSCRIPTION
                    </HeaderLink>
                  </li> */}

                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-nav-header">
          <li className={'logo'}>
            <HeaderLink href={`/myreports/${investigatorId}/`} className="">
              <img src="/images/logo-files/OnTheCase-hori-Logo-tag.png" alt="onthecase logo"/>
            </HeaderLink>
          </li>
          <div className="nav-mobile-icon">
            <li className={''}>
              <HeaderLink href={`/myreports/${investigatorId}/`} className="">
                <FaHome size={'1.5rem'} color={'#337CF3'}/>
              </HeaderLink>
            </li>
            <li className={''}>
              <HeaderLink href={`/myreports/${investigatorId}/`} className="">
                <CgAdd size={'1.5rem'} color={'#337CF3'}/>
              </HeaderLink>
            </li>

          </div>
          <li className={'profile'}>
            <HeaderLink href={`/myreports/${investigatorId}/`} className="">
              <img src={photoLink ? photoLink : '/images/profile-icon.png'} alt="icons"/>
            </HeaderLink>
          </li>


        </div>
        <div className="mobile-nav">
          <li className={router.pathname.includes('myreports') ? "active-link-mobile" : ""}>
            <HeaderLink href={`/myreports/${investigatorId}/`} className="header-button">
              My Cases
            </HeaderLink>
          </li>
          <li className={router.pathname.includes('myclients') ? "active-link-mobile" : ""}>
            <HeaderLink href={`/myclients/${investigatorId}/`} className="header-button">
              My Clients
            </HeaderLink>
          </li>
          <li className={router.pathname.includes('subscription') ? "active-link-mobile" : ""}>
            <HeaderLink href={`/mydocuments`} className="header-button">
              Documents
            </HeaderLink>
          </li>
          <li className={router.pathname.includes('subscription') ? "active-link-mobile" : ""}>
            <HeaderLink href={`/createnote`} className="header-button">
              Notes
            </HeaderLink>
          </li>

        </div>
        {
          new Date(investigator.subscriptionEndDate) > new Date() ?

            <div className="fixed-popup" onClick={() => {
              buyPlan()
            }}>
              <div className="first-popup"></div>
              <div className="second-popup">
                <h2>Your free 30-day trial has ended</h2>
                <p>Upgrade now to keep using these amazing features</p>
                <div className="inner-popup">
                  <div className="inner-popup-card">
                    <img src="/images/popup/first-popup.png"/>
                    <p>GENERATE REPORTS IN MiNUTES</p>
                  </div>
                  <div className="inner-popup-card">
                    <img src="/images/popup/second-popup.png"/>
                    <p>FILES & PHOTOS IN ONE PLACE</p>
                  </div>
                  <div className="inner-popup-card">
                    <img src="/images/popup/third-popup.png"/>
                    <p>DIGITAL NOTE TAKING ANYWHERE</p>
                  </div>
                  <div className="inner-popup-card">
                    <img src="/images/popup/fourth-popup.png"/>
                    <p>CLIENT CONTACT INFO & SEARCH</p>
                  </div>
                  <div className="inner-popup-card">
                    <img src="/images/popup/fifth-popup.png"/>
                    <p>KEEP CONFIDENTIAL PROJECTS SECURE</p>
                  </div>
                </div>
                <button onClick={buyPlan}>Upgrade</button>
              </div>
            </div>

            : <></>
        }

        {showPopup &&
        <div className="fixed_popup-bg">
          <div className="subscription-popup">
            {cancelSubscriptionStep1 ? (
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
                    onClick={cancelSubscription}
                  >
                    CANCEL
                  </button>
                  <button className="gray-button">No, go back</button>
                </div>

                <span className="cross-container" onClick={() => setShowPopup(false)}>
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

                <button onClick={submitSubscriptionPopup}>SUBMIT</button>
              </div>
            )}
          </div>
        </div>
        }

      </div>);
  } else if (role.includes("ROLE_CLIENTS")) {
    let clientId = getCookie("uuid");
    const {investigator} = selector;
    return (
      <div>
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell shrink">
            <div className="dash-logo c-pointer">
              <HeaderLink href={`/client/${clientId}/`}>
                <img src={'/images/logo-files/OnTheCase-hori-Logo-tag.png'} alt="On The Case"/>
              </HeaderLink>
            </div>
          </div>
          <div className="cell auto client-div">
            <div className="top-header clearfix">
              <div className="img-text-box" onClick={toggle}>
                <div className="product-title">
                  <strong>{(investigator && Object.keys(investigator).length > 0) ? investigator.companyName : ""}</strong>
                </div>
                <div className="circle-box">
                  <img src={'/images/profile-icon.png'} alt="icons"/>
                </div>
                <div className="drop-down-menu" style={{
                  display: shownData ? "block" : "none"
                }}>
                  <ul> ===
                    <li>
                      <button onClick={handleLogout}>
                      <span>
                        <img src={'/images/logout-icon.png'}/>Logout</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="dash-header clearfix">
              <div className="topNav">
                <ul>
                  <li>
                    <HeaderLink href={`/client/${clientId}/`} className="header-button">
                      MY CASES
                    </HeaderLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>);
  } else {
    return (<div/>);
  }
}

export default Header;