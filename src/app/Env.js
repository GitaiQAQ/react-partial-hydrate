import React, { Component } from 'react';

export default class Env extends Component {
    render() {
        return (process.on !== process.off) ? 'Nodejs' : 'Browser';
    }
}