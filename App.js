import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            Messagelist: [],
            tag: ""
        };
    }

    async componentDidMount() {
        this.getMessageOfApp();

    }

    getMessageOfApp = async () => {

        let url =
            "https://gank.io/api/data/拓展资源/10/1"
        debugger
        let response = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(result => {
                 alert(JSON.stringify(result))
                this.setState({
                    Messagelist: result.results
                })


            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>111111</Text>

            </View>
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
