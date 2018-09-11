import React from 'react'
import { reduxForm } from 'redux-form'
import DS2Redux from '../DS2Redux'
import { compose } from 'recompose'

class StarwarsForm extends React.Component {

  render() {
    return (
      <form>
        <DS2Redux
          fieldName='characters'
          fieldLabel='Choose a character'
        />
      </form>
    )
  }
}



export default compose(
  // withStyles(styles),
  // connect(mapStateToProps, eventActions),
  reduxForm({
    form: 'starwarsForm',
    // validate,
    // asyncBlurFields: ['combinedDateTime']
  })
)(StarwarsForm)
