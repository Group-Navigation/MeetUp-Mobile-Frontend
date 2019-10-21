import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

//additional variables would depend on the further implementation (such as the contacts system and account customization)
// btw we don't want to expose user emails and passwords in the local store, otherwise they can be accessible by anyone
/*** ids and usernames must be unique ***/
let contacts = [
    {id: 1, userName: "contact1", name: "Contact 1", curLocation: {latitude: 1, longitude: 1}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 2, userName: "contact2", name: "Contact 2", curLocation: {latitude: 2, longitude: 2}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 3, userName: "contact3", name: "Contact 3", curLocation: {latitude: 3, longitude: 3}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 4, userName: "contact4", name: "Contact 4", curLocation: {latitude: 4, longitude: 4}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 5, userName: "contact5", name: "Contact 5", curLocation: {latitude: 5, longitude: 5}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 6, userName: "contact6", name: "Contact 6", curLocation: {latitude: 6, longitude: 6}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 7, userName: "contact7", name: "Contact 7", curLocation: {latitude: 7, longitude: 7}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 8, userName: "contact8", name: "Contact 8", curLocation: {latitude: 8, longitude: 8}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 9, userName: "contact9", name: "Contact 9", curLocation: {latitude: 9, longitude: 9}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"},
    {id: 10, userName: "contact10", name: "Contact 10", curLocation: {latitude: 10, longitude: 10}, image: "https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"}
  ];

class Main extends Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <View>
                <Text> Dashboard Here, With a nested side menu </Text>
                <Button
                    title = "Create New Group"
                    onPress = {() => {
                        this.props.navigation.navigate('Form', {contacts: contacts}); 
                    }}
                
                />
            </View>
        );
    }
}

export default Main;