import React, {Component, PropTypes} from "react";
import {AppRegistry, StyleSheet, Text, View, ListView, TouchableHighlight, Image, TextInput} from "react-native";
import {connect} from "react-redux";
import {update as updateMe, load} from "../redux/modules/me";
import {logNickname, logIntroduction, initialForm} from "../redux/modules/containers_mobile/meUpdateInfo";

class EditMe extends Component {

  componentWillMount() {
    this.props.load();
  }

  componentDidMount(){
    const {me} = this.props;
    this.props.initialForm(me.nickname, me.introduction);
  }

  handleNickname(nickname) {
    this.props.logNickname(nickname)
  }

  handleIntroduction(introduction) {
    this.props.logIntroduction(introduction)
  }

  handleUpdateMe(){
    const{logInfo} = this.props;
    this.props.updateMe({
      nickname: logInfo.nickname,
      introduction: logInfo.introduction
    })
  }

  render() {
    const {me, logInfo} = this.props;
    return (
      <View>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>用户名</Text>
          <TextInput style={styles.input} value={me.username}/>
        </View>
        <View>
          <Text style={styles.label}>昵称</Text>
          <TextInput style={styles.input} value={logInfo.nickname} onChangeText={(text)=>
            this.handleNickname(text)
          }/>
        </View>
        <View>
          <Text style={styles.label}>简介</Text>
          <TextInput style={styles.input} value={logInfo.introduction} onChangeText={(text)=>
            this.handleIntroduction(text)
          }/>
        </View>
        <TouchableHighlight style={styles.button}
                            underlayColor='#99d9f4' onPress={this.handleUpdateMe.bind(this)}>
          <Text style={styles.buttonText}>确定</Text>
        </TouchableHighlight>
      </View>
    )
  }


}

var styles = StyleSheet.create({
  rowContain: {
    flexDirection: 'row'
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 36,
    padding: 4,
    margin: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    alignSelf: 'center'
  }
});

export default connect(
  (state, ownProps) => ({
    component: state.containers.meUpdate,
    me: state.me,
    logInfo: state.containers.meUpdateInfo
  }),
  {
    updateMe,
    load,
    logNickname,
    logIntroduction,
    initialForm
  }
)(EditMe);
