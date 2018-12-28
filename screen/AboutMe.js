import React, {Component} from 'react';
import {StyleSheet, Text, View,Dimensions,Image,Linking,} from 'react-native';

type Props = {};
export default class AboutMe extends Component<Props> {
    static navigationOptions = {
        title: "关于",
        headerStyle: {
            backgroundColor: '#27B5EE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };

    _onLinkClick(url){
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    }

    render() {
        return (
            <View style={{flex: 1}}>

                <Image style={{alignSelf: 'center', margin: 40}} source={require('../images/ic_app.png')}></Image>
                <Text style={{alignSelf: 'center', marginTop: -38, color: '#9c9c9c'}}>干货分享copy1.0.0</Text>
                <Text style={{alignSelf: 'center', fontSize: 18, margin: 6}}>每日提供技术干货的App。</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6}}>本App中所有数据均来自
                    <Text onPress={() => this._onLinkClick('http://gank.io')}
                          style={{color: '#9c9c9c', fontSize: 14, margin: 6}}>@干货集中营。</Text>
                </Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6}}>作者(Android)：sunny(丁平)</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6, color: 'blue',}}
                      onPress={() => this._onLinkClick('mailto:1046364355@qq.com')}>e-mail:1046364355@qq.com</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'blue', margin: 6}}
                      onPress={() => this._onLinkClick('https://github.com/zhongjie-chen')}>
                    @Github</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'blue', margin: 6}}
                      onPress={() => this._onLinkClick('https://github.com/zhongjie-chen/rn_rank')}>
                    @该项目开源地址1</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6}}>原作者(IOS)：刘鹏 天津 32003737 改版作者（丁平）</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6, color: 'blue',}}
                      onPress={() => this._onLinkClick('mailto:liupeng826@hotmail.com')}>e-mail:liupeng826@hotmail.com</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'blue', margin: 6}}
                      onPress={() => this._onLinkClick('https://github.com/liupeng826')}>
                    @Github</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'blue', margin: 6}}
                      onPress={() => this._onLinkClick('https://github.com/liupeng826/rn_rank')}>
                    @该项目开源地址2</Text>
                <Text style={{alignSelf: 'center', fontSize: 14, margin: 6}}>感谢
                    <Text onPress={() => this._onLinkClick('https://github.com/facebook/react-native')}
                          style={{color: '#9c9c9c', fontSize: 14, margin: 6}}>@React-native</Text>
                    <Text onPress={() => this._onLinkClick('http://toutiao.io/')}
                          style={{color: '#9c9c9c', fontSize: 14, margin: 6}}>@开发者头条</Text>
                    <Text onPress={() => this._onLinkClick('https://github.com/attentiveness/reading')}
                          style={{color: '#9c9c9c', fontSize: 14, margin: 6}}>@reading</Text>
                </Text>
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
        alignItems: 'center',
        padding: 10
    },
    headerText: {
        fontSize: 22,
        color: 'white',
        marginLeft: 10
    }
});
