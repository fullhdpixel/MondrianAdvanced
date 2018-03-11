import React from 'react'
import {StatusBar} from 'react-native'
import {
  Container
} from './App/StyledComponents/App'
import Mondrian from './App/Components/Mondrian'

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden/>
        <Mondrian/>
      </Container>
    )
  }
}