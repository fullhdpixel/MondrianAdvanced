import {StyleSheet} from 'react-native'
import Colors from '../Themes/Colors'

const borderWidth = 1

const borderRadius = 1000

const styles = StyleSheet.create({
  defaultSpiral: {
    position: "absolute",
    width: "100%",
    height: "66.9%",
    borderColor: "black",
    top: "16.7%",
    transform: [
      {
        scaleY: 1.5
      }
    ]
  },
  spiral34: {
    backgroundColor: Colors.black,
    borderTopLeftRadius: borderRadius,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth
  },
  spiral21: {
    backgroundColor: Colors.blue,
    borderTopRightRadius: borderRadius,
    borderTopWidth: borderWidth,
    borderRightWidth: borderWidth
  },
  spiral13: {
    backgroundColor: Colors.yellow,
    borderBottomRightRadius: borderRadius,
    borderBottomWidth: borderWidth,
    borderRightWidth: borderWidth
  },
  spiral8: {
    backgroundColor: Colors.red,
    borderBottomLeftRadius: borderRadius,
    borderLeftWidth: borderWidth,
    borderBottomWidth: borderWidth
  },
  spiral5: {
    backgroundColor: Colors.yellow,
    borderTopLeftRadius: borderRadius,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth
  },
  spiral3: {
    backgroundColor: Colors.black,
    borderTopRightRadius: borderRadius,
    borderTopWidth: borderWidth,
    borderRightWidth: borderWidth
  },
  spiral2: {
    backgroundColor: Colors.red,
    borderBottomRightRadius: borderRadius,
    borderBottomWidth: borderWidth,
    borderRightWidth: borderWidth
  },
  spiral1: {
    backgroundColor: Colors.blue,
    borderBottomLeftRadius: borderRadius,
    borderBottomWidth: borderWidth,
    borderLeftWidth: borderWidth
  },
  spiral1First: {
    backgroundColor: Colors.black,
    borderTopLeftRadius: borderRadius,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth
  }
})

export default styles