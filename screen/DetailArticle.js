import React, {Component} from 'react';
import {StyleSheet, Text, View, WebView} from 'react-native';

type Props = {};
export default class DetailArticle extends Component<Props> {

    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.obj.desc,
            headerStyle: {
                backgroundColor: '#27B5EE',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            Messagelist: [],
            tag: ""
        };
    }
    async componentDidMount() {

    }
    render() {
        return (
            <WebView
                source={{uri: this.props.navigation.state.params.obj.url}}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
