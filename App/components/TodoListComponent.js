import React,{Component} from 'react';
import { View,FlatList,
    Text,
    TouchableOpacity,
    StyleSheet,
    Alert
    } from 'react-native';
import { updateTodoList,deleteAllTodoList,queryAllTodoList} from '../database/allSchemas';
import relam from '../database/allSchemas';
import SwipOut from 'react-native-swipeout';

let FlatListItem =props => {
    return(
        <SwipOut right={[
            {
                text:'Edit',
                backgroundColor:'rgb(81,134,237)',
                onPress:showEditModal
            },
            {
                text:'Edit',
                backgroundColor:'rgb(237,80,64)',
                onPress:showDeleteConfiguration
            },
        ]} autoClose={true}></SwipOut>
    )
}
 

export default class TodoListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            todoLists:[]
        }
    }

    reloadData= () =>{
        queryAllTodoList().then((todoLists)=>{
            this.setState({todoLists});
        }).catch((error)=>{
            this.setState({todoLists:[] });
        });
        console.log('reloadData')
    
    }

    render(){
        <View style={StyleSheet.container}>
            <FlatList
                style={styles.flatList}
                data={this.state.todoList}
                renderItem={({item,index}) => <FlatListItem {...item} itemIndex={index}
                onPress={()=>{
                    alert("Ypu pressed");
                }}/>}
            />
        </View>
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'flex-start'
        
    }
})