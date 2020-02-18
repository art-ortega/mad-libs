import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Story from './components/Story'

class App extends Component {
    constructor(props){
        super(props)
        this.state =  {
            noun1:"",
            noun2:"",
            noun3:"",
            noun4:"",
            verb1:"",
            verb2:"",
            adj1:"",
            adj2:"",
            storyRender: ""
        }
    }
    handleChange = (e)=>{
        let value = e.target.value
        this.setState({...this.state,[e.target.name]:value})
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let { storyRender } = this.state
        storyRender = ( <Story
        noun1 = {this.state.noun1}
        noun2 = {this.state.noun2}
        noun3 = {this.state.noun3}
        noun4 = {this.state.noun4}
        verb1 = {this.state.verb1}
        verb2 = {this.state.verb2}
        adj1 = {this.state.adj1}
        adj2 = {this.state.adj2}
        />)
        this.setState( { storyRender: storyRender } )
    }
    refreshPage = () =>{
        window.location.reload()
    }

    render(){
        return(
            <div> <h1 className="rainbow-text"> MAD LIBS ARE DOPE AS <h3>HECK</h3> </h1>
                <div className = "app-container">
                    <div>
                    <input
                    name = "noun1"
                    placeholder = "Noun here please!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "verb1"
                    placeholder = "verb here!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "noun2"
                    placeholder = "I also need a noun"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "noun3"
                    placeholder = "This one needs a noun!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "adj1"
                    placeholder = "This needs an adjective!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "verb2"
                    placeholder = "Verb here please!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "adj2"
                    placeholder = "Gimmie an adjective!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    <input
                    name = "noun4"
                    placeholder = "Place a noun here!"
                    onChange = {this.handleChange}
                    />
                    <br/>
                    </div>
                    <div className = "story">
                    {this.state.storyRender}
                    </div>
                </div>
                <button onClick = {this.handleFormSubmit} > Submit </button>
                <button onClick = {this.refreshPage} > Clear</button>
                <br />
                <br />
                <p>No but really they are like super great.</p>
            </div>
        )
    }
}

export default App;
