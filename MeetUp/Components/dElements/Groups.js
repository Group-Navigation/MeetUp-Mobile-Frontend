import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';

const vh = Dimensions.get("window").height;
const vw = Dimensions.get("window").width;

class Item extends Component{
  constructor(props)
  {
    super(props);
  }

  render(){

    const style = StyleSheet.create({
      container:{
        borderWidth: 2,
        borderColor: '#9a6b3c',
        marginTop: 20,
        marginHorizontal: 20,
        height: 55,
        width: vw*.475,
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      text:{
        color: '#000000',
        fontWeight: '600',
        fontSize: 18
      }
    });

    return(
      <TouchableOpacity style= {style.container}>
            <Text style={style.text}> {this.props.name} </Text>
      </TouchableOpacity>
    )
  }
}
class Groups extends Component{
    constructor(props)
    {
      super(props);
    }

    static navigationOptions = {
    };
  
    render(){

      const style = StyleSheet.create({
        container:{
          borderWidth: 2,
          borderColor: '#9a6b3c',
          marginTop: 20,
          marginHorizontal: 20,
          height: vh*.4,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flex: 1
        }
      });

      return(
        
        <View style={style.container}>
          <FlatList 
            data= {this.props.groups}
            renderItem={ ({item}) => {
              return( <Item name={item.name}/> )
            }}
            keyExtractor={ group => group.id.toString()}
          />
        </View>
      )
          
    }     
}

const mapStateToProps = state => {
  return {
      groups: state.groups,
  };
};

export default connect(
  mapStateToProps,
  {}
)(Groups);