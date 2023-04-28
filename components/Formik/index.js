import React from "react"
import {ErrorMessage, Field, Form, Formik} from "formik";
// import "./style.css"
import {CgProfile} from "react-icons/cg"
import PreviewImage from "../PreviewImage";
import CustomPassword from "../CustomPassword";

const FormikForm = ({ fields, action,formClass="",eachFieldDiv="",widthFullClass="",inputType="", isFull=false ,...props}) => {

  return (
    <Formik {...props}>
      {({values, setFieldValue}) => {
        return (

          <Form className={formClass}>
            {fields.map((x, i) => (
              <div key={i} className={'eachFieldDiv'}>
                <label htmlFor={x.name}>{x.type === "file" ? <span className='profileSpanContainer'>
                                    
                  {values[x.name] ? <PreviewImage file={values[x.name]}/>  : <CgProfile size={"5rem"}/>}
                  <span className='button'>Upload {x.label}</span>
                  {/* <button type='button'>Upload Photo</button> */}
                </span> : x.label}<span className="subLabel">{x.sublabel? ' '+x.sublabel :''}</span></label>
                {x.options ? <Field className="inputClass" {...x} >
                  <option className='inputClass'>{x.name === 'agencyState'? "Select State": "Select Size"}</option>
                  {x.options.data.map((state,i)=>(
                    <option key={i} value={state.value}>{state.name}</option>

                  ))}
                </Field> :
                  <div className={` ${x.type === "file" ? "displayHidden": x.type=== "password"?"fieldContainer custom_class": "fieldContainer"}`}>
                    {x.name ==="phoneNumber" && <span className='numberSpan'>US&nbsp;(+1)</span>}
                    {x.type === "file" ? <input id={x.name} className="inputClass" {...x}
                      onChange={(e) => setFieldValue(x.name, e.target.files[0])}/>
                      : (x.name === "password" || x.name === "confirmPassword")?<Field id={x.name} className={'inputClass'} {...x} component={CustomPassword}/>:<Field id={x.name} className={`inputClass ${x.name ==="phoneNumber" && "leftBorderRadius"}`} {...x} />}
                  </div>
                }
                <ErrorMessage
                  name={x.name}
                  component={({ children }) => (
                    <p className="errorText">{children}</p>
                  )}
                />
              </div>
            ))}
            <br/>
            {action && action()}

          </Form>

        )
      }}
    </Formik>

  )
}

export default FormikForm