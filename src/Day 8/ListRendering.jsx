import React, { Component } from 'react';
import axios from 'axios';
class ListRendering extends Component {
    constructor(props){
        super(props)
        this.state={
            usersData:['Prajkta','Sonali','Adesh','Prerana','Suhani'],
           users:[]  
        }
    }

    async getUsersData(){
        
        // const usersRes = await axios.get('https://jsonplaceholder.typicode.com/users')
        // console.log(usersRes);

        // this.setState({
        //     users:usersRes.data
        // })
    }
    render() {
        const {users} = this.state.usersData
        return (
            <div>
               <h1>List Rendering</h1>
               <button onClick={()=>this.getUsersData()}>Get Data</button>
               <h1>{this.state.usersData[0]}</h1> 
               <h1>{this.state.usersData[1]}</h1> 
                <h1>{this.state.usersData[2]}</h1>
                <h1>{this.state.usersData[3]}</h1> 
                <h1>{this.state.usersData[4]}</h1> 
                <h1>{this.state.usersData[5]}</h1>

                {/* this.state.usersData.map((users)=><h1>{users}</h1>) */}

                {
                    this.state.users.map((users)=>{
                        return <h1>Id : {users.id}  User Name : {users.name} Email :{users.email}</h1>
                    })
                }
            </div>
        );
    }
}

export default ListRendering;