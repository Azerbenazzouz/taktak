import { View , StyleSheet , Text } from "react-native"

const New = () => {
  return (
    <View style={styles.container}>
      <Text>New</Text>
    </View>
  )
}

export default New

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})