/**
* @Author: zhao lei <leozhao>
* @Date:   2016-05-24T15:24:33+08:00
* @Email:  leozhao.go@gmail.com
* @Last modified by:   leozhao
* @Last modified time: 2016-05-27T18:01:05+08:00
*/



import React, { Component } from 'react'
import { render } from 'react-dom'
import TimePicker from './timePicker'

export default class CustimizeList extends Component {
  constructor() {
    super()
    this.state = {
      wheelviewDisplay: false,
      time : '00:00'
    }
  }

  showTimePicker (type) {
    this.setState({
      wheelviewDisplay: true
    });
  }

  getPickedData(time){
    this.setState({
      wheelviewDisplay: false,
      time: time
    });
  }

  change (){

  }

  render () {
    const [ hour, minute ] =this.state.time.split(':');
    return (
      <div>
        <input type="text" value={this.state.time} onChange={this.change} onClick={this.showTimePicker.bind(this)}/>
        <TimePicker
          hour={+hour}
          minute={+minute}
          wheelviewDisplay={this.state.wheelviewDisplay}
          getPickedData={this.getPickedData.bind(this)}
        />
      </div>
    )
  }
}

render(
  <CustimizeList />,
  document.getElementById('container')
)
