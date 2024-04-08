import { View, Text, StyleSheet, Button } from "react-native";
import Board from "../components/Board";
import AppBottomButton from "../components/AppBottomButton";
import TitleButton from "../components/TitleButton";
import { useNavigation } from "@react-navigation/native";

function Home() {
    const navigation = useNavigation();

    function rulesButtomHandler() {
        navigation.navigate('Rules');
    }

    function creditsButtonHandler() {
        navigation.navigate('Credits');
    }

    return (
        <View style={styles.appContainer}>
            <View style={{marginBottom: 80}}>
                <TitleButton title="Tic Tac Toe"/>
            </View>
            <View>
                <Board/>
            </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <AppBottomButton title="Rules" onPress={rulesButtomHandler}/>
            </View>
            <View style={styles.button}>
                <AppBottomButton title="Credits" onPress={creditsButtonHandler}/>
            </View>
          </View>
        </View>
        
    );
}

export default Home;

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
        margin : 40,
        borderRadius: 20
    }
});