import React from "react"
import {Formik, Form, Field, ErrorMessage} from "formik"
import {useRouter} from "next/router";

const EmailComponent = () => {
  const router = useRouter();

  const submitEmail = (email) => {
    router.push({pathname: "/register", query: {...email}})
  }

  return (
    <Formik onSubmit={submitEmail} initialValues={{email: ""}}>
      {() => (
        <Form className='formClass no-gap'>
          {/* <div> */}
          <Field placeholder="Enter Your Email" style={{
            borderRadius: "5px",
            margin: "0",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            flex: "3",
            height: "44px",
            background: "transparent"
          }} name="email" type="email"/>

          {/* </div> */}
          <button type='submit' style={{
            flex: 1,
            marginTop: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }} className='emailButton'>Let's Start
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default EmailComponent