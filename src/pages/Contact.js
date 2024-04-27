import React, { useState } from 'react';
import Axios from 'axios';

function PostForm() {
    const url = "https://hidden-anchorage-35495.herokuapp.com/api/posts"

    const [data, setData] = useState({

        Name: "",
        Email: "",
        Subject: "",
        Message: ""
    })
    function Submit(e) {
        e.preventDefault();
        Axios.post(url, {
            Name: data.Name,
            Email: data.Email,
            Subject: data.Subject,
            Message: data.Message
        })
            .then(res => {
                console.log(res.data)
            })

    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.name] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return (

        <section class="contact" id="contact">
            <h1 class="heading"> <span>contact</span> me </h1>
            <form onSubmit={(e) => Submit(e)}>
                <input onChange={(e) => handle(e)} id="myInput" name="Name" class="box" value={data.Name} placeholder="your name" type="text"></input>
                <input onChange={(e) => handle(e)} id="myInput" name="Email" class="box" value={data.Email} placeholder="your email" type="text"></input>
                <input onChange={(e) => handle(e)} id="myInput" name="Subject" class="box" value={data.Subject} placeholder="subject" type="text"></input>
                <textarea onChange={(e) => handle(e)} id="myInput" name="Message" value={data.Message} class="box" placeholder="your message" cols="30" rows="10"></textarea>
                <button onclick="document.getElementById('myInput').value =' '" class="btnn">submit</button>
            </form>
        </section>
    );

}
export default PostForm;