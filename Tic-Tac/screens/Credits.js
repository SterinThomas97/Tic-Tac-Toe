
import { Text, StyleSheet, View, ScrollView } from "react-native";
import TitleButton from "../components/TitleButton";
import { useNavigation } from "@react-navigation/native";
import AppBottomButton from "../components/AppBottomButton";
import { credits } from "../components/Message";

function Credits() {
    const navigation = useNavigation();
    const creditMessage = credits;

    function backButtonHandler() {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.appContainer}>
            <View >
                <TitleButton title="Credits"/>
            </View>
            <ScrollView style={styles.messageContainer}>
                <Text style={{color: 'white', padding: 10, fontSize: 14}}>{creditMessage}</Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <AppBottomButton title="Back" onPress={backButtonHandler}/>
                </View>
            </View>
        </View>
    )
}

export default Credits;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor: '#c6c9c5',
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 50
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: 'blue',
        margin : 10,
        borderRadius: 20
    },
    messageContainer: {
        backgroundColor: "#373736",
        height: 400,
        marginHorizontal: 40,
        marginTop: 30

    }
});