import React, { Component} from 'react';
import Axios from 'axios';

export default class App extends Component {
    state = {
        movies: []
    }

    componentDidMount() {
        Axios.get('https://reactnative.dev/movies.json')
        .then(res => {
            const movies = res.data.movies;
            this.setState({ movies });
        })
        .catch(function (error) {
            //handle error
            console.log(error);
        })
    }

    render() {
        return (
            <ul>
                {this.state.movies.map(movies => <li>{movies.title}</li>)}
            </ul>
        );
    }
}
