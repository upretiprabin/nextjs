import Link from 'next/link';
import React from 'react'
import {useDispatch} from 'react-redux';
import swal from 'sweetalert';
import Header from "../components/Header/index2";
import {createPopup} from '../components/popups/action';
import Head from "next/head";

const ContactUs = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Head>
        <title>OnTheCase | Contact Us</title>
        <meta property="keywords"
              content="Private investigator,Investigations,PI services,Private investigation,Investigator,Detective services,Background check,Infidelity investigations,Surveillance,Skip tracing,Asset search,Corporate investigation,Investigative services,Criminal investigation,Locate missing persons,Process serving,Legal investigation,Fraud investigation,Insurance investigation,Investigative agency,Private investigator case management software,Investigation case management software,PI case management system,Investigation management software,Case management for private investigators,Investigator case management tool,Private investigation case management,Digital case management for investigators,PI case management software solutions,Case tracking software for private investigators"></meta>
      </Head>
      <div className='contact-body'>
        <Header/>
        <div className='contact-wrapper-body'>

          <div className='contact-content'>
            <h2>Get In Touch With Us</h2>
            <p>Got questions? We&apos;re here to help you out if you&apos;re experiencing any issues or you&apos;re just
              curious about things.</p>
          </div>
          <div className='contact-form'>
            <div className='contact-upper-section'>
              <ContactInputComponent
                label={'First Name*'}
                name={'first_name'}
                type={'text'}
              />
              <ContactInputComponent
                label={'Last Name*'}
                name={'last_name'}
                type={'text'}
              />
            </div>
            <ContactInputComponent
              label={'Email*'}
              name={'email'}
              type={'email'}
            />
            <ContactInputComponent
              label={'Message*'}
              name={'message'}
              type={'textarea'}
            />
            <button
              onClick={() => {
                // swal({title:'title',text:'text',buttons:['success']});
                createPopup(dispatch, {
                  title: 'title',
                  message: 'message',
                  type: 'success',
                  isButton: true,
                  buttonText: 'PROCEED'
                })
              }}
            >SUBMIT
            </button>
          </div>
          <div className="blue-box">
            <h3>Try On The Case FREE for 30 Days</h3>
            <p>Try OnTheCase’s investigative software free for 30 days with no obligation. Easy setup. No credit card
              required. Cancel anytime.</p>
            <div className='text-center'>
              <Link href={'/register'}><span className="white-btn"> Start My Free Trial</span></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const ContactInputComponent = ({label, name, value, onChange, type}) => {
  return <div>
    <label htmlFor={name}>{label}</label>
    {
      type === 'textarea' ?
        <textarea name={name} id={name} cols="30" rows="5"></textarea>
        :
        <input type={type} name={name} id={name}/>
    }
  </div>
}

export default ContactUs