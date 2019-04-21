import React,{Component} from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends Component {
    constructor(){
      super()
      this.state = {
        name: "Sally",
        age: 13
      }
    }

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} yaers old</h3>
            </div>
        )
    }
}

export default App