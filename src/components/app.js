import React, {Component,PropTypes} from 'react';
import {vibrate} from '../services/vibrate';

class App extends Component
{
    constructor(props, context) {
        super(props, context);
        this.doVibrate = this.doVibrate.bind(this);
    }
    doVibrate(){
         vibrate(100);
    }
    render(){
        return (
            <div>
                <button onClick={this.doVibrate} style={{width:'100%'}}>Do something</button>
            </div>
            
        )
    }
}
export default App;