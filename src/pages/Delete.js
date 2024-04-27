import axios from 'axios';
import { Component } from 'react'

class RemoveFromAPI extends Component {

    state = {
        posts: []

    }

    componentDidMount() {
        axios.get(`https://hidden-anchorage-35495.herokuapp.com/api/posts`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })
    }

    deleteContact() {
        axios.delete(`https://hidden-anchorage-35495.herokuapp.com/api/posts/{id}`)
            .then(res => {
                const posts = res.data;
                this.setState({ posts });
            })

    }

    render() {

        const { posts } = this.state

        return (
            <div>
                <ul>
                    {this.state.posts.map(posts => <li>{posts.Name}</li>)}
                </ul>

                <button className='btn'
                    onClick={"deleteContact()"}
                >
                    Remove
                </button>

            </div>
        );
    }
}

RemoveFromAPI.propTypes = {};

export default RemoveFromAPI;