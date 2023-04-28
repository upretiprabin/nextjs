import React from 'react'
import Register from '../containers/Register'
import { NotRequireAuth } from '../helpers/requireAuth'

const RegisterPage = () => {
  return (
    <Register/>
  )
}

export default NotRequireAuth(RegisterPage)