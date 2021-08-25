
import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.css';

 class Home extends Component {
     state={
         myArray:[]
     }
     componentDidMount(){
         axios.get('https://jsonplaceholder.typicode.com/users').then(res=>{
             console.log(res.data);
             this.setState({
                 myArray:res.data
             })
         })
     }
    render() {
        return (
            <div>
                 <h1 className='text-center  text-light ' > Seller Informaition</h1>
                
                 <table className='table  '>
                 
                   <thead class="thead-dark text-light">
                    <tr>
                         <th>name</th>
                         <th>username</th>
                         <th>email</th>

                         </tr>
                         </thead>
                     <tbody className='tbody'>

                     {this.state.myArray.map(user => <tr><td>{user.name}</td> <td>{user.username}</td> <td>{user.email}</td> </tr>)}
                     </tbody>
                     
                 </table>

            </div>
        )
    }
} 
export default Home;

