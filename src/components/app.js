import React, { Component } from 'react';
import Button from './Button';
import Card from './Card';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button color='danger' text='Button'/>
        <Card />
      </div>
    );
  }
}
