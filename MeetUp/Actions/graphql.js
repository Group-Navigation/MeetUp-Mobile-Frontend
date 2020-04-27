import gql from "graphql-tag";

export const GET_INVITATIONS = gql`
    query invitations($id : Int){
        user(id: $id){
            invitations
        }
    }
`;

export const GET_CONTACTS = gql`
    query contactList($id : Int){
        user(id : $id){
            contacts
        }
    }
`;

export const TEST = gql`
    query testing{
        user(id: 1)
        {
            displayName
        }
    }
`;

export const GET_PATHS = gql`
    query paths{
        pathsOfGroup(id: 1){
            path
            eta
            user{
                id
                displayName
            }
        }
    }
`;

export const CREATE_GROUP = gql`
    mutation newGroup($name: String!, $address: String!, $users: [ID]!){
        createGroup(name: $name, address: $address, users: $users)
    }
`;
