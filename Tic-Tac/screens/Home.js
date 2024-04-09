import { View, Text, StyleSheet, Button } from "react-native";
import Board from "../components/Board";
import AppBottomButton from "../components/AppBottomButton";
import TitleButton from "../components/TitleButton";
import { useNavigation } from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";

function Home() {
    const navigation = useNavigation();

    function rulesButtomHandler() {
        navigation.navigate('Rules');
    }

    function creditsButtonHandler() {
        navigation.navigate('Credits');
    }

    function newGameButtonHandler() {

    }

    return (
        <View style={styles.appContainer}>
            <View>
                <TitleButton title="Tic Tac Toe"/>
            </View>
            <View style={styles.gameControlContainer}>
                <View style={styles.icon}>
                    <Ionicons name="chevron-back-circle" size={40} color="grey" />
                </View>
                <View style={styles.newGameButton}>
                    <AppBottomButton title="New Game" onPress={newGameButtonHandler} color="grey"/>
                </View>
                <View style={styles.icon}>
                    <Ionicons name="chevron-forward-circle" size={40} color="grey" />
                </View>
            </View>
            <View>
                <Board/>
            </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <AppBottomButton title="Rules" onPress={rulesButtomHandler} color="blue"/>
            </View>
            <View style={styles.button}>
                <AppBottomButton title="Credits" onPress={creditsButtonHandler} color="blue"/>
            </View>
          </View>
        </View>
        
    );
}

export default Home;

const styles = StyleSheet.create({
    icon: {
        marginHorizontal: 20,
        marginVertical: 40
    },
    newGameButton: {
        marginHorizontal: 20,
        marginVertical: 40
    },
    gameControlContainer: {
        flexDirection : 'row'
    },
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
        margin : 40,
        borderRadius: 20
    }
});