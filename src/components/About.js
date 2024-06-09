import Userfuction from "./Userfuction";
import UserClass from "./UserClass";
import { Component } from "react";


class About extends Component{

   constructor(props){
    super(props);

    console.log("Parent Constructor")
   }



    componentDidMount(){
        console.log("Parent Mount");
    }

    render(){

        console.log("Parent render");
        return(
            <div className="about"> 
             <h1>We are bound to deliver quality food.</h1>
            <Userfuction name ="DS/fuction"  team ="Hello"/>
            <UserClass name ="DS/class"/>
            </div>
           
        )
    }
  
}



export default About;