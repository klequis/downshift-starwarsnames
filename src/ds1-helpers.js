import React from 'react'
import {
  MenuItem,
  TextField,
} from '@material-ui/core'

export const renderInput = (inputProps) => {
  const { InputProps, classes, ref, ...other } = inputProps

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
         root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  )
}

export const renderSuggestion = ({ item, index, itemProps, highlightedIndex, selectedItem }) => {
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(item) > -1

  return (
    <MenuItem
      {...itemProps}
      key={item.toLowerCase()}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
        // color: isSelected ? 'red' : 'black'
      }}
    >
      {item}
    </MenuItem>
  )
}