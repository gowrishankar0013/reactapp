import React, {Component} from 'react'
import HelloWorldService from '../../api/submission/HelloWorldService.js'


class WelcomeComponet extends Component{

    constructor(props){
        super(props)
        this.state = {
            memberid:'',
            providerid:'',
            welcomeMessage:''
        }
        this.handlechange = this.handlechange.bind(this)
        this.submitClicked = this.submitClicked.bind(this)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this)
    }

    handlechange(event){
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        )
    }

    submitClicked(){
        console.log('Submit Button Clicked');
        console.log(this.state)
    }

    // retrieveWelcomeMessage(){
    //     HelloWorldService.executeHelloWorldService()
    //     .then( response => this.handleSuccessfulResponse(response))
    // }

    retrieveWelcomeMessage(){
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then( response => this.handleSuccessfulResponse(response))
    }

    handleSuccessfulResponse(response){
        this.setState(
            {welcomeMessage:response.data.message}
        )
    }



    render(){
        return(
            <>
            <div>Welcome {this.props.match.params.name} for QPP Submission Portal</div>
            <div className="container">
                Member Id: <input type="text" name="memberid" value={this.state.memberid} onChange={this.handlechange}/>
                Provider Id: <input type="text" name="providerid" value={this.state.providerid} onChange={this.handlechange}/>
                <button onClick={this.submitClicked}>Submit</button>
            </div>
            <div className="container">
                Click here to call the Rest Api
                <button className="btn btn-success" onClick={this.retrieveWelcomeMessage}>Get Message</button>
            </div>
            <div className="container">
                {this.state.welcomeMessage}
            </div>
            </>
        )
    }
}

export default WelcomeComponet