var React = require('react-native');
var Api = require('../utils/api');
var BioEvent = require('../components/bio_event');

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
        backgroundColor: 'white',
    },
    borders: {
        borderColor: 'grey',
        borderWidth: 3,
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    indicator: {
        marginTop: 100,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

class Feed extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: false
        }
    }

    componentDidMount() {
        this.setState({isLoading: true})
        Api.get('/events').then((res) => 
                    this.setState({events: this.formatEvents(res.events), isLoading: false})
                )
    }

    formatEvents(eventObjs) {
        return eventObjs.map( (eventObj, index) => {
                return <BioEvent key={index} info={eventObj.info} createdAt={eventObj.createdAt} /> 
            }
        )
    }

    render() {
        if ( this.state.isLoading == false) {
            return(
                    <View style={styles.mainContainer}>
                        <ScrollView>
                            {this.state.events}
                        </ScrollView>
                    </View>
                )
        } else {
            return (
                <View style={styles.indicator}>
                    <ActivityIndicatorIOS
                        animating={this.state.isLoading}
                        color="#1F7073"
                        size="large"></ActivityIndicatorIOS>
                </View>
            )
        }
    }
};


module.exports = Feed;
