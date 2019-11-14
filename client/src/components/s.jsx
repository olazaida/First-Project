// import React, { Component } from 'react';


// class Reviewers extends Component  {
//     constructor(props){
//         super(props)

//        this.state = {
//         data:[]
         
//         };
//     }

//     componentDidMount() {
//         this.getDataFromDb();
//         if (!this.state.intervalIsSet) {
//           let interval = setInterval(this.getDataFromDb, 1000);
//           this.setState({ intervalIsSet: interval });
//         }
//       }
//       componentWillUnmount() {
//         if (this.state.intervalIsSet) {
//           clearInterval(this.state.intervalIsSet);
//           this.setState({ intervalIsSet: null });
//         }
//       }

//       putDataToDB = (message) => {
//         let currentIds = this.state.data.map((data) => data.id);
//         let idToBeAdded = 0;
//         while (currentIds.includes(idToBeAdded)) {
//           ++idToBeAdded;
//         }
//      // our update method that uses our backend api
//     // to overwrite existing data base information
//       updateDB = (idToUpdate, updateToApply) => {
//       let objIdToUpdate = null;
//       parseInt(idToUpdate);
//       this.state.data.forEach((dat) => {
//       if (dat.id == idToUpdate) {
//         objIdToUpdate = dat._id;
//       }
//      });



    // render() {
    //         const { data } = this.state;
    //         return (
    //           <div>
    //             <ul>
    //               {data.length <= 0
    //                 ? 'NO DB ENTRIES YET'
    //                 : data.map((dat) => (
    //                     <li style={{ padding: '10px' }} key={data.message}>
    //                       <span style={{ color: 'gray' }}> id: </span> {dat.id} <br />
    //                       <span style={{ color: 'gray' }}> data: </span>
    //                       {dat.message}
    //                     </li>
    //                   ))}
    //             </ul>
    //             <div style={{ padding: '10px' }}>
    //               <input
    //                 type="text"
    //                 onChange={(e) => this.setState({ message: e.target.value })}
    //                 placeholder="add something in the database"
    //                 style={{ width: '200px' }}
    //               />
    //               <button onClick={() => this.putDataToDB(this.state.message)}>
    //                 ADD
    //               </button>
    
    // export default Reviewers;
    // ```

    import React, { Component } from 'react';


class Comments extends Component  {
    constructor(props){
        super(props)

       this.state = {
     comments:[]
         
        };
    }
   
componentDidMount(){
    var that = this;
    $.ajax({
        url:"/Reviewers",
        type:"GET",
        success:function(data){
        //   console.log(data);
          that.setState({comments:data})
          console.log(that.state.data)
          
        },
        error:function(err){
          console.log(err)
        }
      });
    }

    // render(){
    //     const listUsers = this.state.data.map(userinfo) =>
    //     // <li>
    //     // <img src={img.url}></img>
    //     // <p >{img.imgInfo}</p>
    //     // </li>
    //     // <div> </div>
    //     <li>
    //     <p>{userInfo.name}</p>
    //     <p >{userInfo.location}</p>
    //     </li>
    //   );
    
    render(){
        var cc = [];
        if(Array.isArray(this.state.comments)){
            cc =this.state.comments;
        }
        var listcomments = cc.map((Reviewers) =>
        <li>
           <p>{Reviewers.profilePic}</p>
           <p >{Reviewers.time}</p>
           <p >{Reviewers.userName}</p>
           <p >{Reviewers.comment}</p>

           </li>
      );
        return (
            <div>
                {listcomments}
            </div>
        )
    }
}          

export default Comments;