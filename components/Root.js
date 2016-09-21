import React from 'react';

import { connect } from 'react-redux'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  MemoryRouter as Router,
  Match,
} from 'react-router'

import Link from './Link'

const Home = ({ pathname }) => (
  <View>
    <Text>Home</Text>
  </View>
)

const About = () => (
  <View>
    <Text>About</Text>
  </View>
)

const Topics = ({ pathname }) => (
  <View>
    <Text>Topics</Text>
      <View><Link to={`${pathname}/rendering`}>Rendering with React</Link></View>
      <View><Link to={`${pathname}/components`}>Components</Link></View>
      <View><Link to={`${pathname}/props-v-state`}>Props v. State</Link></View>

    <Match pattern={`${pathname}/:topicId`} component={Topic}/>
    <Match pattern={pathname} exactly render={() => (
      <Text>Please select a topic</Text>
    )}/>
  </View>
)

const Topic = ({ params }) => (
  <View>
    <Text>{params.topicId}</Text>
  </View>
)

const mapStateToProps = (state) => {
  console.log(state)
  if (!state.navigation.length) {
    return {location: "/"}
  }
  return {
    location: state.navigation[0].location
  }
}

class Root extends React.Component {

  render() {
    console.log(`location: ` + this.props.location)
    return (
      <Router location={this.props.location}>
        <View style={styles.container}>
          <View><Link to="/">Home</Link></View>
          <View><Link to="/about">About</Link></View>
          <View><Link to="/topics">Topics</Link></View>
          <Match exactly pattern="/" component={Home} />
          <Match pattern="/about" component={About} />
          <Match pattern="/topics" component={Topics} />
        </View>
      </Router>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default connect(mapStateToProps)(Root)
