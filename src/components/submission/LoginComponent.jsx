import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js'


class LoginComponet extends Component{

    constructor(props){
        super(props)
        this.state = {
            username:'',
            password: '',
            hasLoginfailed: false,
            showSuccessMessage: false
        }
        this.handlechange = this.handlechange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handlechange(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    loginClicked(){
        if(this.state.username==='shankar' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
            this.props.history.push(`/welcome/${this.state.username}`)
            //this.setState({showSuccessMessage:true})
            //this.setState({hasLoginfailed:false})
        } else {
            console.log("Login Failed")
            this.setState({showSuccessMessage:false})
            this.setState({hasLoginfailed:true})
        }
    }

    render(){
        return(
            <div className="container">
                {this.state.hasLoginfailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div className="alert alert-warning">Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handlechange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handlechange}/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
            
        )
    }
}

export default LoginComponet