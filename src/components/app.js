import React, { Component } from 'react';
import axios from 'axios';
import MDSpinner from 'react-md-spinner';
import CamperList from './camper_list';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    };
  }

  componentWillMount() {
    // ^ this runs once. runs before render
    //make requests at the same time and set state to the data we receive. updating
    //the empty arrays with the new data we receive from axios fetch
    axios.all([this.fetchRecentCampers(), this.fetchAllTimeCampers()])
      .then(axios.spread((recentCampers, allTimeCampers) => {
        //in ES6, if object key:value are the same, you can just type it once
        //but here we need to access the data property inside the object so we'll type it out
        this.setState({
          recentCampers: recentCampers.data,
          allTimeCampers: allTimeCampers.data
        });
        console.log(this.state);
      }));
  }

  fetchRecentCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }

  fetchAllTimeCampers() {
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  }

  changeView(currentView) {
    this.setState( {currentView} );
  }

  render() {
    //if the arrays are empty, (before we make network request), display a loading message
    if (!this.state.recentCampers.length && !this.state.allTimeCampers.length) {
      return (
        <MDSpinner className="spinner" size={100} />
      )
    }
    return (
      <div>
        <h2>{`Top ${this.state.currentView}`}</h2>
        <button onClick={() => this.changeView('recentCampers')} className="btn btn-primary">Recent</button>
        <button onClick={() => this.changeView('allTimeCampers')} className="btn btn-primary">All Time</button>
        <CamperList campers={this.state[this.state.currentView]}/>
      </div>
    );
  }
}
