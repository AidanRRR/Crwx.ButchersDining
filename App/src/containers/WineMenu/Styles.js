import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row'
    },
    leftNavbar: {
        width: '20%',
        paddingLeft: 35,
        paddingTop: 25
    },
    leftNavbarText: {
        alignSelf: 'flex-start',
        color: 'white',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 20
    },
    leftNavbarTextUnderline: {
        borderColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 2.5,
    },
    topNavbar: {
        width: '100%',
        height: '20%',
        paddingTop: 40,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    topNavbarText: {
        color: 'white',
        fontSize: 22.5,
        marginLeft: 25,
        marginRight: 25
    },
    topNavbarTextFirst: {
        color: 'white',
        fontSize: 22.5,
        marginRight: 25,
        height: 40
    },
    topNavbarTextUnderline: {
        borderColor: 'white',
        borderStyle: 'solid',
        borderBottomWidth: 2.5,
    },
    mainArea: {
        width: '80%',
        height: '100%',
    },
    wineList: {
        width: '100%',
        height: 'auto',
    },
    ListTitle: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 45
    },
    ListTitleText: {
        fontSize: 20
    },
    ListItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 35
    },
    TitleSeperator: {
        color: 'white'
    },
    ItemTitle: {
        color: 'white'
    },
    ItemRegion: {
        color: 'white'
    },
    ItemPrice: {
        color: 'white'
    },
    ItemType: {
        color: 'gray'
    },
    ItemDescription: {
        color: 'gray',
        fontStyle: 'italic',
    },
    ItemTitleDescPrice: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%'
    },
    ListItemPrice: {
        width: '20%'
    }
});