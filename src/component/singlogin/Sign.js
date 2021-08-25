import React, { Component } from "react";
import './sign.css';
import {Link} from "react-router-dom";
 
class Sign extends Component {
    render() {
        return (
            <form className='for'>
                <h3 className='text-center  '>Register</h3>

                <div className="form-group ">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group  ">
                    <label>Last name</label>
                    <input type="text" className="form-control " placeholder="Last name" />
                </div>

                <div className="form-group ">
                    <label>Email</label>
                    <input type="email" className="form-control " placeholder="Enter email" />
                </div>

                <div className="form-group ">
                    <label>Password</label>
                    <input type="password" className="form-control " placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block ">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link href="to">log in?</Link>
                </p>
            </form>
        );
    }
}
export default Sign;
