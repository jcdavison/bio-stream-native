var React = require('react-native');
var moment = require('moment');

var {
    View,
    Text,
    StyleSheet,
    Image
} = React;

var styles = StyleSheet.create({
    eventContainer: {
        flex: 1,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderBottomWidth: 3,
        margin: 20,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    feedImage: {
        height: 345,
        width: 345,
        alignSelf: 'center'
    },
    info: {
        fontSize: 28,
        marginLeft: 5,
        color: '#1F7073'
    },
    time: {
        fontSize:16,
        marginLeft: 5,
        color: 'grey'
    }

});

class BioEvent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            info: props.info,
            createdAt: moment(props.createdAt).format('H:mm')
        }
    }

    render() {
        return (
            <View style={styles.eventContainer}>
                <Image style={styles.feedImage} resizeMode='stretch' source={{ uri: 'http://www.startuplandia.io/images/i-004.jpg'}} />
                <Text style={styles.info}>{this.state.info}</Text> 
                <Text style={styles.time}>{this.state.createdAt} </Text>
            </View>
        )
    }
};

module.exports = BioEvent;
