var React = require('react-native');
var Api = require('../utils/api');
var PubSub = require('../utils/pub_sub');

var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    Image,
    ScrollView,
    ActivityIndicatorIOS,
    TextInput,
    TouchableHighlight
} = React;

var styles = StyleSheet.create({
    borders: {
        borderColor: 'grey',
        borderWidth: 2
    },

    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    indicator: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
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

    eventInfo: {
        height: 40,
        margin: 10,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1
    },

    createButton: {
        fontSize: 22,
        padding: 5,
        margin: 5
    },

    buttonTouch: {
        margin: 10,
        borderRadius: 5
    }
});

class LogEvent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            info: null,
            isLoading: false
        }
    }

    submitEvent() {
        if (this.state.info == null) {
            return null
        } else {
            this.setState({isLoading: true});
            Api.post('/events', {info: this.state.info})
                .then( (res) => {
                        this.setState({info: null, isLoading: false});
                        PubSub.publish('refreshIndex');
                    }
                )
        }
    }

    render() {
        if ( this.state.isLoading == false) {
            return (
                <View>
                    <TextInput
                        keyboardType='default'
                        style={styles.eventInfo}
                        onChangeText={(text) => this.setState({info: text})}
                        value={this.state.info} 
                    />

                    <TouchableHighlight style={styles.buttonTouch} onPress={ this.submitEvent.bind(this)} underlayColor='#1F7073'>
                        <View style={styles.centering} >
                            <Text style={styles.createButton} >Create</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            )
        } else {
            return (
                <View style={styles.mainContainer}>
                    <View style={styles.indicator}>
                        <ActivityIndicatorIOS
                            animating={this.state.isLoading}
                            color="#1F7073"
                            size="large"></ActivityIndicatorIOS>
                    </View>
                </View>
            )
        }
    }
};

module.exports = LogEvent;
