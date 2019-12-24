import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponet from './LoginComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import WelcomeComponet from './WelcomeComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import FooterComponent from './FooterComponent.jsx'

class GenerateQrda extends Component{
    render(){
        return(
            <div className="QRDA">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/" exact component={LoginComponet}/>
                            <Route path="/login" component={LoginComponet}/>
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponet}/>
                            <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                            <Route component={ErrorComponent}/>
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>
                {/*<LoginComponet></LoginComponet>
                <WelcomeComponet></WelcomeComponet>*/}
            </div>
        )
    }
}

function ErrorComponent(){
    return <div>An error Occured.</div>
}

export default GenerateQrda;