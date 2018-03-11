import {Dimensions} from 'react-native'
import Colors from '../Themes/Colors'
import styled from 'styled-components'

const {width, height} = Dimensions.get('window')
const borderWidth = 1

export const MondrianView = styled.View `
  width: ${width - 20}px;
  height: ${(width - 20) * (34/55)}px;
  display: flex;
  margin: 10px;
  flexDirection: column;
`

export const XXXLBox = styled.View `
  borderWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 34;
  flexDirection: row;
`

export const XXLBox = styled.View `
  borderLeftWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 21;
  flexDirection: column;
`

export const XLBox = styled.View `
  borderTopWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 13;
  flexDirection: row;
`

export const LBox = styled.View `
  borderRightWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 8;
  flexDirection: column;
`

export const MediumBox = styled.View `
  borderBottomWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 5;

  flexDirection: row;
`

export const SBox = styled.View `
  borderLeftWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 3;

  flexDirection: column;
`

export const XSBox = styled.View `
  borderTopWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 2;
  flexDirection: row;
`

export const XXSBox = styled.View `
  borderRightWidth: ${props => props.container
  ? borderWidth
  : 0}px;
  flex: 1;
  flexDirection: column;
`

export const XXXSBox = styled.View `
  borderBottomWidth: ${props => props.first
  ? borderWidth
  : 0}px;
  flex: 1;
  flexDirection: column;
`