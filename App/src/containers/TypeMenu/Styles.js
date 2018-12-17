import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    touchableItem: {
        backgroundColor: '#DDDDDD'
    },
    menuView: {

    },
    menuItem: {
        width: '33.33%',
        height: '100%'
    },
    menuItemView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    menuItemHeader: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        marginBottom: 15
    },
    menuItemText: {
        textAlign: 'center',
        color: 'white'
    }
});