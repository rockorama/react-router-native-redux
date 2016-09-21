import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RouterApp from './redux/reducers/navigate'
import Root from './components/Root'
import {View} from 'react-native'

let store = createStore(RouterApp)

class RouterDemo extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('RouterDemo', () => RouterDemo);
