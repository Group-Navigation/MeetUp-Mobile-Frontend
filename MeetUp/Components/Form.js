import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import t from 'tcomb-form-native';

const GroupForm = t.form.Form;

//name and address are required
const NewGroup = t.struct({
    name: t.String,
    address: t.String
});

//custom error messages
const GroupOptions = {
    fields: {
        name: {
            error: "You must give a name to your group."
        },
        address: {
            error: "Enter the name or the address of your meetup spot."
        }
    }
}

class Form extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            name: "", //name of the group
            selectedUsers: [], //users selected for the group
            address: "", //meetup name or address
            userSelectionComplete: false //indicates the stage of group creation
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.finishUserSelection = this.finishUserSelection.bind(this);
    }

    //validates input and creates a new group
    handleSubmit(){
        let value = this._form.getValue();
        console.log(value);
        if (value){
            this.setState({
                name: value.name,
                address: value.address,
                userSelectionComplete: true
            })
        }
    }

    //called when users are selected
    finishUserSelection(){
        //do stuff here to populate selectedUsers array
        this.setState({
            userSelectionComplete: true
        })
    }

    render(){
        return(
            !this.state.userSelectionComplete ?
            <View>
                <Text>Select users here. Once done, click the "Next" button to complete creating the group</Text>
                <Text>User1</Text>
                <Text>User2</Text>
                <Text>User3</Text>
                <Text>User4</Text>
                <Text>User5</Text>
                <Button 
                    title="Next"
                    onPress={this.finishUserSelection}
                />
                
            </View>
            :
            <View>
                <Text> Almost Done! </Text>
                <Text> Give your group a name and enter a meetup location </Text>
                <GroupForm 
                    ref={c => this._form = c}
                    type={NewGroup}
                    options={GroupOptions}
                />
                <Button
                    title="Create Group!"
                    onPress={this.handleSubmit}
                />

            </View>
            
        );
    }
}

export default Form;