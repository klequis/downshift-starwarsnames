import React from 'react'
import { Field } from 'redux-form'
import { FormControl } from '@material-ui/core'
import PostalCodesComponent from './PostalCodesComponent';

class DS2Redux extends React.Component {
  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <FormControl
        fullWidth={true}
      >
        <PostalCodesComponent
          onChange={onChange}
          { ...rest }
        />
      </FormControl>
    )
  }

  render() {
    const { fieldLabel, fieldName } = this.props
    return (
      <Field
        component={this.picker}
        name={fieldName}
        label={fieldLabel}
      />
    )
  }
}

export default DS2Redux