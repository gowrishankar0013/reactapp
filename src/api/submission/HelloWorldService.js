import axios from "axios"

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    }

    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/hello/path/${name}`)
        //console.log('executed service')
    }
}

export default new HelloWorldService()