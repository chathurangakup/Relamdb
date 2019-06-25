import Relam from 'relam'
import { Promise } from 'es6-promise';
import { resolve } from 'uri-js';
import { reject } from 'rsvp';
export const TODOLIST_SCHEMA="TodoList";
export default TODO_SCHEMA="Todo",

export const TodoSchema={
    name:TODO_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        name:{ type:'string',indexed:true},
        done:{type:'bool',default:false},
    }
};

export const TodoListSchema={
    name:TODOLIST_SCHEMA,
    primaryKey:'id',
    properties:{
        id:'int',
        name:'string',
       createDate:'date',
       todos:{ type:'list',objectType:TODO_SCHEMA}
    }
};

const dtabaseOptions={
    path:'todoListApp.relam',
    schema:[TodoListSchema,TodoSchema],
    schemaVersion:0,
};

export const insertNewTodoList = newTodoList => new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
        relam.write(() => {
            relam.create(TODO_SCHEMA,newTodoList);
            resolve(newTodoList);
        });
    }).catch((error)=>reject(error));
    
});

export const updateTodoList = todoList => new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
        relam.write(() => {
          let updatingTodoList = relam.objectForPrimaryKey(TODOLIST_SCHEMA,todoList.id);
          updateTodoList.name=todoList.name;
          resolve();
        });
    }).catch((error)=>reject(error));
    
});

export const deleteAllTodoList = todoList => new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
        relam.write(() => {
          let allTodoList = relam.objects(TODOLIST_SCHEMA);
          relam.delete(allTodoList);
          resolve();
        });
    }).catch((error)=>reject(error));
    
});

export const queryAllTodoList = todoList => new Promise((resolve,reject)=>{
    Relam.open(databaseOptions).then(relam=>{
        relam.write(() => {
          let allTodoList = relam.objects(TODOLIST_SCHEMA);
        
          resolve(allTodoList);
        });
    }).catch((error)=>{
        reject(error)
    });
    
});

export default new Relam(databaseOptions);