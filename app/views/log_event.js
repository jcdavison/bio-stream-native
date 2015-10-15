var React = require('react-native');
var Api = require('../utils/api');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ScrollView,
    ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    feedContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});

class LogEvent extends React.Component{
    constructor(props) {
        console.log("log event constru")
        super(props);
    }

    render() {
        return(
            <View><Text>Create Event</Text></View>
        )
    }
};

module.exports = LogEvent;
