import React from 'react'
import { reduxForm } from 'redux-form'
import { compose } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import DSMUIRedux from '../DSMUIRedux'
import ShowValues from '../ShowValues/ShowValues'

class StarwarsForm extends React.Component {
  state = { values: '' }
  onSubmit = (values) => {
    this.setState({ values: values })
  }
  render() {
    const { classes, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div>
      <form>
        <DSMUIRedux
          fieldName='characters'
          fieldLabel='Choose a character'
        />
        <Button
          type='button'
          onClick={handleSubmit(this.onSubmit)}
          disabled={pristine || submitting}
        >
          Submit
        </Button>
        <Button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </form>
        <ShowValues values={this.state.values} />
      </div>
    )
  }
}

const styles = {}

export default compose(
  withStyles(styles),
  reduxForm({
    form: 'starwarsForm',
  })
)(StarwarsForm)
