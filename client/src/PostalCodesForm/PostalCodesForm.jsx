import React from 'react'
import { reduxForm } from 'redux-form'
import PostalCodesRedux from '../PostalCodesRedux'
import { compose } from 'recompose'

class PostalCodesForm extends React.Component {

  render() {
    return (
      <form>
        <PostalCodesRedux
          fieldName='postalCode'
          fieldLabel='Enter a US postal code'
        />
      </form>
    )
  }
}

export default compose(
  // withStyles(styles),
  // connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'postalCodesForm',
    // validate,
    // asyncBlurFields: ['combinedDateTime']
  })
)(PostalCodesForm)
