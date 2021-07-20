import React from 'react';
import {API} from 'aws-amplify';


export default function Home(){

    const getTodos = `{
        query getTodos {
            getTodos{
                id
                title
                done
            }
        }
    }`;

    const addTodo = `
    mutation AddTodo($todo: TodoInput!) {
        addTodo(todo: $todo) {
            id
            title
            done
        }
    }`;

    const fetchTodos = async () =>{
        try{
            const data = await API.graphql({query:getTodos})
            console.log(data)
        }
        catch(e){
            console.log( e)
        }
        
    }
    fetchTodos()
    console.log('hhhhh')

    const Add_Todo = async()=>{
        try{
            const todo = {
                id: '34',
                title: 'Helo',
                done: false
            }
            const data = await API.graphql({query:addTodo, variables:{todo:todo}})
            fetchTodos()

        }catch(e){
            console.log(e)
        }
    }
    return <div>HELLO WORLD
        <button onClick= {()=>Add_Todo()}>Add Todo</button>
    </div>

    
}