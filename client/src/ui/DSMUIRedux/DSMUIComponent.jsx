import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import Downshift from 'downshift'
import { getStarwarsNames } from '../../store/selectors'
import * as actions from '../../store/actions'
import {
  Paper,
} from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { renderInput, renderSuggestion } from './dsmuiredux-helpers'
import { green } from '../../logger'

class DS2Redux extends React.Component {
  onInputValueChange = (inputValue, state) => {
    green('state', state)
    if (!(inputValue === '')) {
      this.props.starwarsNamesReadRequest(inputValue)
    } else {
      this.props.starwarsNamesClear()
    }
    this.props.onChange(state.selectedItem)
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
                  <label {...getLabelProps()}>Character Name</label>
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


export default compose(
  withStyles(styles),
  connect(mapStateToProps, actions),
)(DS2Redux)