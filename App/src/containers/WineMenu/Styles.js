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
        paddingTop: 130
    },
    leftNavbarText: {
        fontFamily: 'microbrew-soft-one',
        alignSelf: 'flex-start',
        color: 'white',
        marginTop: 15,
        marginBottom: 15,
        fontSize: 25
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
        fontFamily: 'microbrew-soft-one',
        color: 'white',
        fontSize: 22.5,
        marginLeft: 25,
        marginRight: 25
    },
    topNavbarTextFirst: {
        fontFamily: 'microbrew-soft-one',
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
        height: '100%'
    },
    wineList: {
        width: '100%',
        height: 'auto',
    },
    ListTitleFirst: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 35,
        marginTop: 0
    },
    ListTitle: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: 'white',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 35,
        marginTop: 45
    },
    ListTitleText: {
        fontFamily: 'minionpro-Medium',
        fontSize: 22,
        fontWeight: 'bold'
    },
    ListItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 35
    },
    TitleSeperator: {
        fontFamily: 'minionpro-Medium',
        fontSize: 21,
        color: 'white'
    },
    ItemTitle: {
        fontFamily: 'minionpro-Medium',
        fontSize: 22,
        color: 'white'
    },
    ItemRegion: {
        fontFamily: 'minionpro-Medium',
        fontSize: 22,
        color: 'white'
    },
    ItemPrice: {
        fontFamily: 'minionpro-Medium',
        color: 'white',
        fontSize: 22,
    },
    ItemType: {
        color: '#B8B8B8',
        fontStyle: 'italic',
        fontSize: 15
    },
    ItemDescription: {
        color: '#B8B8B8',
        fontStyle: 'italic',
        fontSize: 15,
        width: '50%'
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