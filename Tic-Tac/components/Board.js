
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";



function Board() {

    const [boardElements, setBoardElements] = useState(['','','','','','','','','']);

    function boardElementsHandler(index) {
        const newBoardArray = [...boardElements];
        
        if (boardElements[index] == '') {
            newBoardArray[index] = 'X';
            setBoardElements(newBoardArray);
        } else if (boardElements[index] == 'X') {
            newBoardArray[index] = '0';
            setBoardElements(newBoardArray);
        } else if (boardElements[index] == '0') {
            newBoardArray[index] = 'X';
            setBoardElements(newBoardArray);
        }
    }
    return (
        <View style={styles.mainContainer}>
            {
              boardElements.map((s, i) => (
                <Pressable onPress={() => boardElementsHandler(i)}>
                  <View style={styles.ticTacBox} key={i}>
                      <Text style={styles.textStyle}>{s}</Text>
                  </View>
                </Pressable>
                  )) 
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