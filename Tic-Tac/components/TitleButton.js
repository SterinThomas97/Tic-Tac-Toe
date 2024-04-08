import { View, Pressable, Text, StyleSheet } from "react-native";
function TitleButton({title}) {
   return (
    <View>
        <Pressable>
            <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </Pressable>
    </View>
   );
}

export default TitleButton;

const styles = StyleSheet.create({
    buttonTextContainer: {
        flexDirection: 'row',
        backgroundColor: '#1F5102',
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 120
    },
    buttonText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    }
});