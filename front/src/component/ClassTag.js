import React, { Component } from 'react';
import axios from 'axios'

class ClassTag extends Component {
    constructor(props){
        super(props)
        this.state = {
            textC : " text C 의 초기값 ",
            textCjson : " text Cjson 의 초기값 "
        }
    }

    componentDidMount = async ()=>{
        const gettext = await axios.get('/getsend')
        this.setState({textC : gettext.data})
    
  
        const gettext2 = await axios.get('/getsend/getjson')
        this.setState({textCjson : gettext2.data.url})
    }
    

    render() {
        return (
            <div><h1>Class tag</h1>

            <p>{this.state.textC}  1</p>
            <p>{this.state.textCjson}    2</p>

             
                
            </div>
        );
    }
}

export default ClassTag;