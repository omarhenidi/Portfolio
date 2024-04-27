import './assets/CSS/main.css'
import React from 'react';
import axios from 'axios';

export default class PostList extends React.Component {
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

  deleteRow(id, e) {
    axios.delete(`https://hidden-anchorage-35495.herokuapp.com/api/posts/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        const posts = this.state.posts.filter(item => item.id !== id);
        this.setState({ posts });
      })

  }

  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "darkBlue",
      padding: "10px",
      fontFamily: "Arial",

    };


    return (

      <div>

        <h1 class="hdas" style={mystyle}> Messages</h1>

        <table class="table table-hover" >
          <thead class="text">
            <tr >
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {this.state.posts.map((post) => (
              <tr>
                <td class="td">{post.Name}</td>
                <td class="td">{post.Email}</td>
                <td class="td">{post.Subject}</td>
                <td class="td">{post.Message}</td>
                <td>
                  <button className="btndas" onClick={(e) => this.deleteRow(post.id, e)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    )
  }
}


