
import React, { Component } from 'react';


class Users extends Component  {
    constructor(props){
        super(props)

       this.state = {
        data:[]
         
        };
    }
   
componentDidMount(){
    var that = this;
    $.ajax({
        url:"/userinfo",
        type:"GET",
        success:function(data){
          console.log(data);
          that.setState({data:data})
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    
    render(){
        var users = [];
        if(Array.isArray(this.state.data)){
            users =this.state.data;
        }
        var listUsers = users.map((userinfo) =>
        <li>
           <p>{userinfo.name}</p>
           <p >{userinfo.location}</p>
           </li>
      );
        return (
            <div>
                {listUsers}
            </div>
        )
    }
}          

export default Users;