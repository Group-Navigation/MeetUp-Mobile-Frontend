import React, {Component} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import UserCard from "./UserCard"
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
        this.addUserToGroup = this.addUserToGroup.bind(this);
        this.removeUserFromGroup = this.removeUserFromGroup.bind(this);
    }

    //clicking on user's icon adds them to the group
    addUserToGroup(user) {
        let newSelectedUsers = [...this.state.selectedUsers, user];
        this.setState({
            selectedUsers: newSelectedUsers
        });
    }

  //when the user is selected, but is clicked on again, it gets removed from the group
    removeUserFromGroup(user) {
        let newSelectedUsers = this.state.selectedUsers;
        for (let i = 0; i < newSelectedUsers.length; i++) {
            if (newSelectedUsers[i].id === user.id) {
                newSelectedUsers.splice(i, 1);
                break;
            }
        }
        this.setState({
            selectedUsers: newSelectedUsers
        });
    }


    //validates input and creates a new group
    handleSubmit(){
        let value = this._form.getValue();
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
                <Button 
                    title="Next"
                    onPress={this.finishUserSelection}
                />
                <View 
                style = {styles.userSelection}>
                    {this.props.navigation.state.params.contacts.map((contact) => {
                            return(
                                <UserCard contact={contact} addUserToGroup={this.addUserToGroup} removeUserFromGroup={this.removeUserFromGroup}/>
                            )
                    })}
                </View>
                
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

const styles = StyleSheet.create({
    userSelection: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignContent: "center",
        flexWrap: "wrap"
    }
});

export default Form;