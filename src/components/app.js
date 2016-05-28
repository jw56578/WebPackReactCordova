import React, {Component,PropTypes} from 'react';
import {vibrate} from '../services/vibrate';
import {confirm} from '../services/dialogs';

class App extends Component
{
    constructor(props, context) {
        super(props, context);
        this.doVibrate = this.doVibrate.bind(this);
        this.showDialog = this.showDialog.bind(this);
    }
    doVibrate(){
         vibrate(100);
    }
    showDialog(){
         confirm('is this working?',()=>{});
    }
    render(){
        return (
            <div>
                testing whether the new pluging format works
                <button onClick={this.doVibrate} style={{width:'100%'}}>Vibrate</button>
                <button onClick={this.showDialog} style={{width:'100%'}}>Dialog</button>
            </div>
            
        )
    }
}
export default App;