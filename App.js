import React from 'react'
import {Dimensions, StyleSheet, StatusBar, Text, View} from 'react-native'

import {
  Container,
  Mondrian,
  XXXLBox,
  XXLBox,
  XLBox,
  LBox,
  MediumBox,
  SBox,
  XSBox,
  XXSBox,
  XXXSBox
} from './App/StyledComponents/App'
import styles from "./App/Styles/App"

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar hidden/>
        <Mondrian>
          <XXXLBox container>
            <XXXLBox>
              <View style={[styles.spiral34, styles.defaultSpiral]}/>
            </XXXLBox>
            <XXLBox container>
              <XXLBox>
                <View style={[styles.spiral21, styles.defaultSpiral]}/>
              </XXLBox>
              <XLBox container>
                <LBox container>
                  <MediumBox container>
                    <MediumBox>
                      <View style={[styles.spiral5, styles.defaultSpiral]}/>
                    </MediumBox>
                    <SBox container>
                      <SBox>
                        <View style={[styles.spiral3, styles.defaultSpiral]}/>
                      </SBox>
                      <XSBox container>
                        <XXSBox container>
                          <XXXSBox first>
                            <View style={[styles.spiral1First, styles.defaultSpiral]}/>
                          </XXXSBox>
                          <XXXSBox>
                            <View style={[styles.spiral1, styles.defaultSpiral]}/>
                          </XXXSBox>
                        </XXSBox>
                        <XSBox>
                          <View style={[styles.spiral2, styles.defaultSpiral]}/>
                        </XSBox>
                      </XSBox>
                    </SBox>
                  </MediumBox>
                  <LBox>
                    <View style={[styles.spiral8, styles.defaultSpiral]}/>
                  </LBox>
                </LBox>
                <XLBox>
                  <View style={[styles.spiral13, styles.defaultSpiral]}/>
                </XLBox>
              </XLBox>
            </XXLBox>
          </XXXLBox>
        </Mondrian>
      </Container>
    )
  }
}