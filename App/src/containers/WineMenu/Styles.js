import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    loadingBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black'
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row'
    },
    leftNavbar: {
        width: '20%',
        marginLeft: 35,
    },
    leftNavbarHome: {
        marginTop: 23,
        marginBottom: 40
    },
    leftNavbarText: {
        fontFamily: 'Microbrew-Soft-One',
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
        fontFamily: 'Microbrew-Soft-One',
        color: 'white',
        fontSize: 22.5,
        marginLeft: 25,
        marginRight: 25
    },
    topNavbarTextFirst: {
        fontFamily: 'Microbrew-Soft-One',
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
        fontFamily: 'MinionPro-Medium',
        fontSize: 22,
        fontWeight: 'bold'
    },
    ListItemDomainContainer: {
        marginTop: 40,
        width: '70%'
    },
    ListItemDomainTitle: {
        fontFamily: 'Microbrew-Soft-One',
        color: 'white',
        fontSize: 27
    },
    ListItemDomainText: {
        fontFamily: 'MinionPro-Medium',
        color: '#B8B8B8',
        fontSize: 20
    },
    ListItem: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 60
    },
    ListItemBasement: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 40
    },
    TitleSeperator: {
        fontFamily: 'MinionPro-Medium',
        fontSize: 21,
        color: 'white'
    },
    ItemTitle: {
        fontFamily: 'MinionPro-Medium',
        fontSize: 22,
        color: 'white'
    },
    ItemRegion: {
        fontFamily: 'MinionPro-Medium',
        fontSize: 22,
        color: 'white'
    },
    ItemPrice: {
        fontFamily: 'MinionPro-Medium',
        color: 'white',
        textAlign: 'right',
        marginRight: 85,
        fontSize: 22,
    },
    ItemType: {
        color: '#B8B8B8',
        fontStyle: 'italic',
        fontSize: 15
    },
    ItemDescriptionContainer: {
        width: '85%'
    },
    ItemDescription: {
        color: '#B8B8B8',
        fontStyle: 'italic',
        fontSize: 15
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