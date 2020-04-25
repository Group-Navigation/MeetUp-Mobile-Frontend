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

