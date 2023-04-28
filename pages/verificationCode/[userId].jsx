import React from 'react'
import VerificationCode from '../../containers/VerificationCode'
import {NotRequireAuth} from '../../helpers/requireAuth'

const VerificationPage = () => {
  return (
    <div>
      <VerificationCode/>
    </div>
  )
}

export default NotRequireAuth(VerificationPage)