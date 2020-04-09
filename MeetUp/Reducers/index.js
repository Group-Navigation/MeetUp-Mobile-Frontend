import {combineReducers} from 'redux';

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

  let groups = [
    // {name: "Beach Party", id: 1},
    // {name: "Snow Day", id:2},
    // {name: "Spring Fling", id:3},
    // {name: "Good Food", id:4}
  ];

let archivedGroups = [];

let invMembersGroupId = -1;

let currentGroup = -1;

let curGroupId = -1;

let newGroupId = 0;


const contactsReducer = (oldContacts = contacts, action) => {
    switch(action.payload){
        default: return oldContacts;
    }
}

const usersReducer = (oldUsers = [], action) => {
    switch(action.type){
        case "ADD_USERS":
            return oldUsers.concat(action.payload);
        default:
            return oldUsers;
    }
};

const groupsReducer = (oldGroups = groups, action) => {
    switch(action.type){
        case "ADD_GROUPS":
          action.payload.id = newGroupId;
          newGroupId++;
            return oldGroups.concat(action.payload);
        case "REMOVE_GROUP":
            let filteredGroups = oldGroups.filter(gp => gp.id !== action.payload.id);
            return filteredGroups;
        default:
            return oldGroups;
    }
};

const archivedGroupsReducer = (oldGroups = archivedGroups, action) => {
  switch(action.type){
      case "ADD_ARCHIVED_GROUP":
          return oldGroups.concat(action.payload);
      case "REMOVE_ARCHIVED_GROUP":
          let filteredGroups = oldGroups.filter(gp => gp.id !== action.payload.id);
          return filteredGroups;
      default:
          return oldGroups;
  }
};

const currentGroupReducer = (oldCurrentGroup = currentGroup, action) => {
    switch (action.type){
      case "ADD_CURRENT_GROUP":
        oldCurrentGroup = curGroupId;
        return oldCurrentGroup;
      case "CHANGE_GROUP":
        oldCurrentGroup = action.payload;
        return oldCurrentGroup;
      default:
        return oldCurrentGroup;
    }
};

const invMembersReducer = (oldInvMembersGroupId = invMembersGroupId, action) => {
switch(action.type){
    case 'CHANGE_INVITE_GROUP':
    return action.payload
    default:
    return oldInvMembersGroupId;
}
};

const invitationReducer = (oldInvitations = [], action) =>{
    switch(action.type){
      case "ADD_INVITATION":
        return oldInvitations.concat(action.payload);
      case "REMOVE_INVITATION":
        let newInv= oldInvitations.filter(inv => !isEquivalent(inv,action.payload));
        return newInv;
      case "SET_INVITATION":
        oldInvitations = action.payload;
        return action.payload;
      default:
        return oldInvitations;
    }
  }

const loginReducer = (currentUser = {}, action) => {
    switch (action.type) {
      case "SET_USER":
        return action.payload;
      default:
        return currentUser;
    }
  };

export default combineReducers({
    users: usersReducer,
    contacts: contactsReducer,
    groups: groupsReducer,
    login: loginReducer,
    currentGroup: currentGroupReducer,
    invGroup : invMembersReducer,
    invites : invitationReducer,
    archivedGroups: archivedGroupsReducer
  });