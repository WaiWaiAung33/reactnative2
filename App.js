import React from "react";
import { StyleSheet, Text, View, Image, TextInput ,KeyboardAvoidingView,Button} from "react-native";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password:"",
    };
    this.handelOnChangeName = this.handelOnChangeName.bind(this);
    this.handelOnChangePassword=this.handelOnChangePassword.bind(this);
  }
  handelOnChangeName(name) {
    this.setState({ name });
  }
  handelOnChangePassword(password){
    this.setState({password})
  }
  render() {
    return (
      <View style={styles.container}>
       <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          enabled
        >
      <Image style={{margin:15}}
      source={require("./assets/image.jpg.png")}/>
          <TextInput
            placeholder={"UserName"}
            // value={this.state.name}
            style={styles.nameInput}
            onChangeText={this.handelOnChangeName}
          />
          <TextInput
            placeholder={"Password"}
            // value={this.state.password}
            secureTextEntry={true}
            style={styles.nameInput}
            onChangeText={this.handelOnChangePassword}
            
          />
          <View style={styles.buttonInput}>
          <Button title="Sing In"
          color="#0EA6B5"/>
          </View>
       </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  nameInput: {
    borderWidth: 2,
    borderStyle: "solid",
    width: 300,
    height: 50,
    backgroundColor: "#242132",
    marginBottom: 1,
    paddingHorizontal: 20,
    fontSize:16,
    borderRadius:6,
    marginTop:2,
  },
  buttonInput:{
    width: 300,
    height: 50,
    marginBottom: 1,
    marginTop:2,
    borderRadius:6,
  },
  

});
