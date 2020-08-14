import React, { Component } from 'react'
import UserService from '../../Services/UserService';
import * as alertify from 'alertifyjs';
import "alertifyjs/build/css/alertify.css";
import AlertifyService from '../AlertifyService';

export default class UserSignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            username: '',
            email:'',
            password: '',
            repeatPassword: "",
            name: '',
            surname: ''
        };
        this.onChangeData = this.onChangeData.bind(this);
    }

    onChangeData(type, event) {
        const stateData = this.state;
        stateData[type] = event
        this.setState({ stateData });
    }
    onClickSignUp = (e) => {
        // browser form içeriğini bir yere göndermesini engeller.
        // browserin bizim yerimize bir şey yapmasını engellemiş oluyoruz.
        e.preventDefault(); 

        UserService.post(this.state)
        .then(res=>{
             console.log(res.data);
        })
        .catch(error=> {
            if (error.response) {
                console.log(error.response.data.message);
                AlertifyService.alert(error.response.data.message);
            }
            else if (error.request) 
                console.log(error.request);
            else 
                console.log(error.message);
        });
    }
    render() {
        return (
            <div className="col-lg-12">
                <h5>User Sign Up</h5>
                
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input
                            type="text" className="form-control"
                            name="username"
                            onChange={e => this.onChangeData("username", e.target.value)}
                            value={this.state.username}
                            placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="text" className="form-control"
                            name="email"
                            onChange={e => this.onChangeData("email", e.target.value)}
                            value={this.state.email}
                            placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Password</label>
                        <input
                            type="password" className="form-control"
                            name="password"
                            onChange={e => this.onChangeData("password", e.target.value)}
                            value={this.state.password}
                            placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Repeat Password</label>
                        <input
                            type="password" className="form-control"
                            name="repeatPassword"
                            onChange={e => this.onChangeData("repeatPassword", e.target.value)}
                            value={this.state.repeatPassword}
                            placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input
                            type="text" className="form-control"
                            name="name"
                            onChange={e => this.onChangeData("name", e.target.value)}
                            value={this.state.name}
                            placeholder="Enter Username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Surname</label>
                        <input
                            type="text" className="form-control"
                            name="surname"
                            onChange={e => this.onChangeData("surname", e.target.value)}
                            value={this.state.surname}
                            placeholder="Enter Username" />
                    </div>
                     <button className="btn btn-success" type="button" onClick={this.onClickSignUp}>   Save   </button>
                </form>
            </div>
        )
    }
}
