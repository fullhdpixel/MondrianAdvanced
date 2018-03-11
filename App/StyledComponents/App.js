import {Dimensions} from 'react-native'
import Colors from '../Themes/Colors'
import styled from 'styled-components'

const {width, height} = Dimensions.get('window')

export const Container = styled.View `
  backgroundColor: ${Colors.background};
  width: ${width}px;
  height: ${height}px;
  justifyContent: center;
`
