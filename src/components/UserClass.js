import React from "react";

class UserClass extends React.Component{

    constructor (props){ 
        super(props);

        this.state ={
           userInfo:{
            name: "Dummy",
            bio: "default",
           }
        }
     //   console.log("Child Constructor");
      
    }

   async componentDidMount (){
        const data = await fetch("https://api.github.com/users/deeepalisharma");
        const json = await data.json();
        this.setState({
           userInfo :json,
        });

 
       
    }

    componentWillUnmount(){
      //  clearInterval(this.timer);
        console.log("Un mount")
    }
    render()
    {
     //   console.log("Child Render");
       // const {name} =this.props;
        const {name, bio,avatar_url
        }= this.state.userInfo;
        return(
           
            <div className="user-card">
               
                <img src= {avatar_url}/>
                
                <h1>Name:{name}</h1>
                <h1>BIO:{bio}</h1>
                <h2>Team</h2>
            </div>
        )

    }
}
export default UserClass;