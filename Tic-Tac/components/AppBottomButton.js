
import { View, Text, Pressable, StyleSheet } from "react-native";
function AppBottomButton({title, onPress}) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
                <View style={styles.buttonTextContainer}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </Pressable>
        </View>
            
       
    );
}

export default AppBottomButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.5
      },
      buttonContainer: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 20
      },
      buttonTextContainer: {
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent: 'center'
      },
      buttonText: {
        fontWeight : 'bold',
        margin: 10,
        color: 'white'
      }
})