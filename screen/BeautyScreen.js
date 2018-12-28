import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableHighlight, Image, Animated, Dimensions} from 'react-native';
import {RefreshState} from "react-native-refresh-list-view";
import RefreshListView from "react-native-refresh-list-view";

type Props = {};
export default class BeautyScreen extends Component<Props> {
    static navigationOptions = {
        title: "福利",
        headerStyle: {
            backgroundColor: '#27B5EE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

    };

    constructor(props) {
        super(props);
        this.state = {
            ImageList: [],
            page: 1,

            refreshstate: RefreshState.Idle
        };
    }

    async componentDidMount() {
        this.HeaderRefresh();
    }

    HeaderRefresh = async () => {
        this.setState({
            page: 1,
            refreshstate: RefreshState.HeaderRefreshing
        });
        let url =
            "https://gank.io/api/data/福利/10/1"
        //debugger
        let response = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(result => {
                // alert(JSON.stringify(result))
                this.setState({
                    ImageList: result.results,
                    refreshstate: RefreshState.Idle,
                    page: this.state.page + 1
                })

            })
            .catch(error => {
                this.setState({
                    refreshstate: RefreshState.Failure
                });
            });
    };
    FooterRefresh = async () => {
        this.setState({
            refreshstate: RefreshState.FooterRefreshing
        });
        let url =
            "https://gank.io/api/data/福利/10/" + this.state.page;
        //debugger
        let response = await fetch(url, {
            method: "get",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(result => {
                // alert(JSON.stringify(result))
                this.setState({
                    ImageList: [...this.state.ImageList, ...result.results],
                    refreshstate: RefreshState.Idle,
                    page: this.state.page + 1
                })

            })
            .catch(error => {
                this.setState({
                    refreshstate: RefreshState.Failure
                });
            });
    };

    render() {
        return (
            <View style={{flex: 1}}>
                    <RefreshListView
                        style={{flex: 1}}
                        data={this.state.ImageList}
                        renderItem={({item}) => (
                            <View style={{flexDirection: "row",justifyContent: "center",backgroundColor:"#f0f2f6",flexWrap: "wrap",width:width}}>
                            <Image source={{uri: item.url}}
                                   style={{
                                       height: width/1.2 ,
                                       margin:5,
                                       width: width/1.2
                                   }}/>
                                <Text>来源：{item.who}</Text>
                            </View>
                        )}
                        refreshState={this.state.refreshstate}
                        onFooterRefresh={this.FooterRefresh}
                        onHeaderRefresh={this.HeaderRefresh}
                    />
            </View>
        );
    }

}
let {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    iconImage: {
        height: 30,
        margin: 4,
        width: 30
    },
    headerBar: {
        backgroundColor: '#27B5EE',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    headerText: {
        fontSize: 22,
        color: 'white',
        marginLeft: 10
    }
});
