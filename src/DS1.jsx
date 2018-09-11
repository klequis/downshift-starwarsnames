import React from 'react'
import { connect } from 'react-redux'
import Downshift from 'downshift'
import { getStarwarsNames } from './store/selectors'
import * as actions from './store/actions'
import {
  Paper,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { renderInput, renderSuggestion } from './ds1-helpers'

class DS1 extends React.Component {
  onInputValueChange = (inputValue, state) => {
    if (!(inputValue === '')) {
      this.props.starwarsNamesReadRequest(inputValue)
    } else {
      this.props.starwarsNamesClear()
    }
  }
  render() {
    const { classes, items } = this.props
    return (
      <div className={classes.root}>
        <p>items: {items.length}</p>
        <Downshift
          onInputValueChange={this.onInputValueChange}
        >
          {
            downshift => {
              const { isOpen, getMenuProps, getInputProps, getLabelProps, getItemProps, highlightedIndex, selectedItem } = downshift
              return (
                <div className={classes.container}>
                  <label {...getLabelProps()}>Postal Code</label>
                  {
                    renderInput({
                      fullWidth: true,
                      classes,
                      InputProps: getInputProps({
                        placeholder: 'Search a character name'
                      })
                    })
                  }
                  <div {...getMenuProps()}>
                    { isOpen ? (
                      <Paper className={classes.paper} square>
                        {
                          items.map((item, index) => {
                            return (
                              renderSuggestion({
                                item,
                                index,
                                itemProps: getItemProps({ item: item }),
                                highlightedIndex,
                                selectedItem,
                              })
                            )
                          })
                        }
                      </Paper>
                      ) : null
                    }
                  </div>
                </div>
              )
            }
          }
        </Downshift>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: getStarwarsNames(state)
  }
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 250
  },
  container: {
    flexGrow: 1,
    position: "relative"
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing.unit,
    left: 0,
    right: 0
  },
  inputRoot: {
    flexWrap: "wrap"
  },
})

export default connect(mapStateToProps, actions)(withStyles(styles)(DS1))