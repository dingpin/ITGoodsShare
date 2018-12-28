import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import RefreshListView, {RefreshState} from "react-native-refresh-list-view";
import { navigator, createAppContainer } from 'react-navigation';

var navigation = null;
export default class AndroidList extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            dataValue: [],
            refreshstate: RefreshState.Idle
        };
        this._goToMore=this._goToMore.bind(this);
    }

    async componentDidMount() {
        this.HeaderRefresh();

    }

    HeaderRefresh = async () => {
        this.setState({
            page: 1 ,
            refreshstate: RefreshState.HeaderRefreshing
        });
        let url =
            "https://gank.io/api/data/Android/10/1"
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
                    dataValue: result.results,
                    refreshstate: RefreshState.Idle,
                    page:this.state.page+1
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
            "https://gank.io/api/data/Android/10/"+this.state.page;
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
                    dataValue: [...this.state.dataValue, ...result.results],
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
    _goToMore(){
        this.props.navigation.navigate("DetailArticle")
    }
    render() {
        return (

            <RefreshListView
                style={{flex: 1}}
                data={this.state.dataValue}
                renderItem={({item}) => (
                    <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)"
                                        onPress={() =>{this.props.navigation.navigate('DetailArticle',{obj:{url:item.url,desc:item.desc}})}}>
                        <View style={{
                            flexDirection: 'row',
                            padding: 12,
                            borderBottomWidth: StyleSheet.hairlineWidth,
                            borderColor: '#c9c9c9'
                        }}>

                            <View style={{marginLeft: 10, flex: 1}}>
                                <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>{item.desc}</Text>
                                <View style={{marginTop: 4, justifyContent: 'space-between', flexDirection: 'row'}}>
                                    <Text style={{}}>{'作者：' + item.who}</Text>
                                    <Text style={{}}>{this._formatDate(item.publishedAt)}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableHighlight>
                )}
                refreshState={this.state.refreshstate}
                onFooterRefresh={this.FooterRefresh}
                onHeaderRefresh={this.HeaderRefresh}
            />
        );
    }
    _formatDate (strTime) {
        var date = new Date(strTime);
        return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
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
