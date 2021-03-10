import React from 'react'

export default class RefsForm extends React.Component{
    constructor() {
        super();
        this.username=React.createRef();
    }

    clickHandler = () => {
        console.log(this.username.current.value);
}
    render(){
        return(
            <div>
                <input type='text' ref={this.username}/>
                <button onClick={this.clickHandler}> Submit </button>
            </div>
        )
    }
}