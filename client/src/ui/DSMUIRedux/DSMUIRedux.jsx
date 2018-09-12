import React from 'react'
import { Field } from 'redux-form'
import DS2Component from './DSMUIComponent'
import { FormControl } from '@material-ui/core'


class DS2Redux extends React.Component {
  picker = (props) => {
    const { onChange, ...rest } = props.input
    return (
      <FormControl
        fullWidth={true}
      >
        <DS2Component
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