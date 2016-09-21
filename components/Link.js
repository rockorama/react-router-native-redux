import React, { PropTypes } from 'react'
import {TouchableHighlight, Text} from 'react-native'
import { connect } from 'react-redux'
import { navigateTo } from '../redux/actions'

class Link extends React.Component {
  redirect() {
    if (this.props.onPress) {
      this.props.onPress(this.props.to)
    }
  }

  render() {
    return (
      <TouchableHighlight onPress={this.redirect.bind(this)}>
        <Text>{this.props.children}</Text>
      </TouchableHighlight>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onPress: () => {
      dispatch(navigateTo(ownProps.to))
    }
  }
}

const NavigateLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default NavigateLink
