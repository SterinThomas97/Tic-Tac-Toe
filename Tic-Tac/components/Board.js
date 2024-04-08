
import { View, Text, StyleSheet } from "react-native";

const steps = ['0', '', '0', 'X', 'X', '0', 'X', '', '0'];

function Board() {
    return (
        <View style={styles.mainContainer}>
            {
              steps.map((s, i) => (
                  <View style={styles.ticTacBox} key={i}>
                      <Text style={styles.textStyle}>{s}</Text>
                  </View>))
            }
            
          </View>
    )
}

export default Board;

const styles = StyleSheet.create({
    ticTacBox : {
        backgroundColor: 'green',
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor : 'black'
    },
    mainContainer: {
        
        padding: 50,
        flexDirection : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'orange',
        borderWidth : 3,
        borderColor: 'black',
        borderRadius: 10,
        flexWrap:'wrap'
    },
    textStyle: {
        color : 'white',
        fontSize: 40,
        fontWeight: "bold"
    }
})