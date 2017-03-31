import React, { Component } from 'react';


class Opacity extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


const Loader = (props) => {
    return(
        <div>
        Loading
        </div>
    )
}


class Tabele extends Component {
    
    render() {
        return (
            <div>
                {this.state.data ? <table></table> : <Opacity><Loader /></Opacity>}
            </div>
        );
    }
}