import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import CustomForm from './CustomForm';



class UserSearch extends Component{
    constructor(props){
        super(props);
        this.state = {
          searchRequest: "",
          searchResult: []
        }
    }


    modifyInput = (value) => {
        this.setState({
            searchRequest: value
        })
    }

  
    render() {
      return (
        <View style={styles.container}>
            <CustomForm style={styles.userInput} formValue={this.state.searchRequest} modifyInput={this.modifyInput}/>
            <Text>{this.state.searchRequest}</Text>
      </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
        marginTop: 100
    }
});


const mapStateToProps = state => {
    return {
        contacts: state.contacts
        // login: state.login
    };
};

export default connect(
    mapStateToProps,
    {}
)(UserSearch);