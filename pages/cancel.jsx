import React from 'react'
import Header from '../components/Header'
import RequireAuth from '../helpers/requireAuth'

const Cancel = () => {
  return (
    <>
    <Header/>
    <div>Cancel</div>
    </>
  )
}

export default RequireAuth(Cancel)