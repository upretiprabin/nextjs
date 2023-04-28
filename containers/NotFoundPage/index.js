import React from 'react';
import { FormattedMessage } from 'react-intl';

import H1 from '../../components/H1';
import messages from './messages';

export default function NotFound() {
  return (
    <article style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}>
      <H1>
        Page not found.
        {/* <FormattedMessage {...messages.header} /> */}
      </H1>
    </article>
  );
}
