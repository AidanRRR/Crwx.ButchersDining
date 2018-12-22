import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    splash: {
        width: '100%',
        height: '100%',
        backgroundColor: 'red'
    },
    textContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: '10%',

        backgroundColor: 'white',

        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        fontFamily: 'microbrew-soft-one',
        fontSize: 30,
        fontWeight: 'bold'
    }
});