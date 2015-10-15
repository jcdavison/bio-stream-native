var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight
} = React;

var styles = StyleSheet.create({
    mainContainer:{
        flex:1
    },

    toolbar:{
        backgroundColor:'#237B7E',
        paddingTop:20,
        paddingBottom:10,
        flexDirection:'row',
    },

    toolbarButton:{
        width: 130,
        color:'#fff',
        textAlign:'center'
    },

    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1
    },
});

class NavBar extends React.Component{
    componentDidMount() {
        console.log("navbar props", this.props.navigator)
    }

    navigateTo(opts) {
        var routeId = opts.view == 'Feed' ? 1 : 0
        this.props.navigator.jumpTo(this.props.navigator.getCurrentRoutes()[routeId])
    }

    render() {
        return (
            <View style={styles.toolbar}>
                <TouchableHighlight onPress={ this.navigateTo.bind(this, {view: 'Feed'})} underlayColor='yellow'>
                    <Text style={styles.toolbarButton}>Feed</Text>
                </TouchableHighlight>
                <Text style={styles.toolbarTitle}>BioStream</Text>
                <TouchableHighlight onPress={ this.navigateTo.bind(this, {view: 'LogEvent'})} underlayColor='yellow'>
                    <Text style={styles.toolbarButton}>Log Event</Text>
                </TouchableHighlight>
            </View>
        )
    }
};

module.exports = NavBar;
