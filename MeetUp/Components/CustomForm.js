import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native';

class CustomForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            formValue: this.props.formValue
        }
    }

    modifyChildAndParentInput = (formValue) => {
        this.setState({formValue});
        this.props.modifyInput(formValue);
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.tInput} 
                ref= {(el) => { this.formValue = el; }}
                onChangeText={(formValue) => 
                    this.modifyChildAndParentInput(formValue)
                }
                value={this.state.formValue}></TextInput>
                {/* <Text>{this.state.formValue}</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    formData: {
    },
    tInput: {
        // color: "transparent",
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5
    }
})

export default CustomForm;