import React from 'react';
import {StyleSheet,Text, View} from 'react-native';


const steps = ['0', '', '0', 'X', 'X', '0', 'X', '', '0'];
export default function App() {
    return (
        <View style={styles.appContainer}>
          <View style={styles.mainContainer}>
            {
              steps.map((s, i) => (
                  <View style={styles.ticTacBox} key={i}>
                      <Text style={styles.textStyle}>{s}</Text>
                  </View>))
            }
            
          </View>
        </View>
        
    );
}

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
    textStyle: {
        color : 'white',
        fontSize: 40,
        fontWeight: "bold"
    }
});
