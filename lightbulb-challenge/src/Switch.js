import React, {Component} from 'react';
import OffBulb from './offBulb.jpeg'
import OnBulb from './onBulb.png'
import PowerOff from './powerOff.png'
import PowerOn from './powerOn.png'


class Switch extends Component{
    constructor(props){
        super(props)
        this.state = {
            lightBulb: OnBulb,
            onOrOff: false,
            // color: "yellow",
            powerSwitch: PowerOff,
        }
    }
    handleChange = () => {
       let onOrOffnew = !this.state.onOrOff
       this.setState({ onOrOff: onOrOffnew})
       if (this.state.onOrOff) {
           this.setState({lightBulb: OnBulb, powerSwitch: PowerOff,})}
       else {
           {this.setState({lightBulb: OffBulb, powerSwitch: PowerOn,})}
       }
     }



    render(){
        return(
            <div>
                <img src={this.state.lightBulb} alt="lightbulb" />
                <img onClick = {this.handleChange} src={this.state.powerSwitch} alt="powerswitch" />

            </div>
        )
    }
}

export default Switch
