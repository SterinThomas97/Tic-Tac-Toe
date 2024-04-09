
import { Text, StyleSheet, View, ScrollView } from "react-native";
import TitleButton from "../components/TitleButton";
import { useNavigation } from "@react-navigation/native";
import AppBottomButton from "../components/AppBottomButton";
import { rules } from "../components/Message";

function Rules() {
    const navigation = useNavigation();

    function backButtonHandler() {
        navigation.navigate('Home');
    }
    const rulesMessage = rules;
    return(
        <View style={styles.appContainer}>
            <View>
                <TitleButton title="Rules"/>
            </View>
            <ScrollView style={styles.messageContainer}>
                <Text style={{color: 'white', padding: 10, fontSize: 14}}>{rules}</Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <AppBottomButton title="Back" onPress={backButtonHandler}/>
                </View>
            </View>
        </View>
    )
}

export default Rules;

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
        margin : 30,
        borderRadius: 20
    },
    messageContainer: {
        backgroundColor: "#373736",
        height: 400,
        marginHorizontal: 40,
        marginTop: 30

    }
});