import React from 'react'
import { Component } from 'react';

class Task extends Component {

    state = {
        plans: [
            { plan: "red a book c++ for beginner" },
            { plan: "red a book python from zero to hero" },
        ]
    }
    deleteItem = (index) => {

        var ppp = this.state.plans
        ppp.splice(index)
        this.setState(
            {
                plans: ppp

            })
        console.log(this.state.plans)
    }


    render() {

        return (
            <div className='task'>
                {this.state.plans.map(
                    (data, index) => {
                        return (
                            <div key={index}>
                                <span>{data.plan}</span>
                                <button onClick={() => { this.deleteItem(index) }}>Delete</button>
                            </div>
                        );
                    }
                )}
            </div>
        );
    }
}


export default Task;
