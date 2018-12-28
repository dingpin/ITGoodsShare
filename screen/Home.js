import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, Image, TouchableHighlight,ImageBackground} from 'react-native';
import ScrollableTabView, {
    DefaultTabBar,
    ScrollableTabBar
} from "react-native-scrollable-tab-view";
import SideMenu from 'react-native-side-menu';
//import { NavigationActions } from "react-navigation";
import AndroidList from '../screen/AndroidList';
import AppleList from './AppleList';
import ExpandList from '../screen/ExpandList'
type Props = {};

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;
export default class Home extends Component<Props> {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            Messagelist: [],
            isOpen: false,
            tag: ""
        };
    }

    async componentDidMount() {

    }


    _onHomeClick(){
        this.setState({
            isOpen:false
        })
    }
    _onBeautyClick(){
        this.setState({
            isOpen:false
        })
        this.props.navigation.navigate("BeautyScreen");
    }
    _onAboutClick(){
        this.setState({
            isOpen:false
        })
        this.props.navigation.navigate("AboutMe");
    }
    render() {
        const menu = (
            <View style={styles.container}>
                <ImageBackground style={styles.headerImage} source={require('../images/bg_drawer_header.png')}>
                    <Text style={styles.titleText}>技术干货&&福利</Text>
                </ImageBackground>
                <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={() => this._onHomeClick()}>
                    <View style={styles.item}>
                        <Image style={styles.iconHomeImage} source={require('../images/icon_home.png')}>
                        </Image>
                        <Text style={styles.itemText}>首页</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop: 10}} underlayColor="rgba(34, 26, 38, 0.1)"
                                    onPress={() => this._onBeautyClick(this.props)}>
                    <View style={styles.item}>
                        <Image style={styles.iconHomeImage} source={require('../images/icon_beautiful.png')}></Image>
                        <Text style={styles.itemText}>福利</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{marginTop: 10}} underlayColor="rgba(34, 26, 38, 0.1)"
                                    onPress={() => this._onAboutClick()}>
                    <View style={styles.item}>
                        <Image style={styles.iconHomeImage} source={require('../images/icon_about.png')}></Image>
                        <Text style={styles.itemText}>关于</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
        return (

            <SideMenu
                menu={menu}                    //抽屉内的组件
                isOpen={this.state.isOpen}     //抽屉打开/关闭
                openMenuOffset={screenWidth / 1.3}     //抽屉的宽度
                hiddenMenuOffset={0}          //抽屉关闭状态时,显示多少宽度 默认0 抽屉完全隐藏
                edgeHitWidth={60}              //距离屏幕多少距离可以滑出抽屉,默认60
                disableGestures={false}        //是否禁用手势滑动抽屉 默认false 允许手势滑动
                /*onStartShouldSetResponderCapture={
                    () => console.log('开始滑动')}*/
                onChange={                   //抽屉状态变化的监听函数
                    (isOpen) => {
                        isOpen ? console.log('抽屉当前状态为开着')
                            :
                            console.log('抽屉当前状态为关着')

                    }}

                onMove={                     //抽屉移动时的监听函数 , 参数为抽屉拉出来的距离 抽屉在左侧时参数为正,右侧则为负
                    (marginLeft) => {
                        console.log(marginLeft)
                    }}

                menuPosition={'left'}     //抽屉在左侧还是右侧
                autoClosing={true}         //默认为true 如果为true 一有事件发生抽屉就会关闭
            >

                <View style={styles.container}>
                    <View style={styles.headerBar}>
                        <TouchableHighlight underlayColor="rgba(34, 26, 38, 0.1)" onPress={() => {
                            this.setState({
                                isOpen: true
                            })
                        }}>
                            <Image style={styles.iconImage} source={require('../images/ic_menu.png')}></Image>
                        </TouchableHighlight>
                        <Text style={styles.headerText}>干货分享</Text>
                    </View>
                    <ScrollableTabView
                        tabBarActiveTextColor={"#ffffff"}
                        tabBarInactiveTextColor={"#dcdcdc"}
                        tabBarTextStyle={{
                            fontWeight: "bold",
                            fontSize: 18
                        }}
                        scrollWithoutAnimation={true}
                        tabBarBackgroundColor={"#27B5EE"}
                        tabBarUnderlineStyle={{
                            width: screenWidth / 3,
                            backgroundColor: "#fff",
                            alignItems: "center",
                            height: 3
                        }}
                    >
                        <AndroidList tabLabel='安卓'{...this.props} style={{backgroundColor: "#f0f2f6"}}>
                        </AndroidList>
                        <AppleList tabLabel='苹果'{...this.props} style={{backgroundColor: "#f0f2f6"}}>
                        </AppleList>
                        <ExpandList tabLabel='拓展'{...this.props} style={{backgroundColor: "#f0f2f6"}}>
                        </ExpandList>
                    </ScrollableTabView>
                </View>
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f2f6",
        flex: 1
    },
    headerBar: {
        backgroundColor: '#27B5EE',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    iconImage: {
        height: 30,
        margin: 4,
        width: 30
    },
    headerImage: {
        height: screenHeight / 5,
        width: screenWidth * 0.8,
        backgroundColor: '#27B5EE',
        marginBottom: 20
    },
    headerText: {
        fontSize: 22,
        color: 'white',
        marginLeft: 10
    },
    titleText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        backgroundColor: 'transparent',
        margin: 80,
    },
    item: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'rgba(34, 26, 38, 0.1)'
    },
    iconHomeImage: {
        height: 30,
        margin: 8,
        width: 30
    },
    itemText: {
        marginLeft: 6,
        fontWeight: 'bold',
        fontSize: 16
    },
});
