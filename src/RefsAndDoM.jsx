import React from 'react'

export default class RefsAndDoM extends React.Component{

    constructor() {
        super();
        this.HelloDiv = React.createRef();
    }

    componentDidMount() {
        console.log(this.HelloDiv.current.style.color = 'red');
    }

    render(){
        return(
            <div>
                Refs and DOM
                <div>
                    Hello
                </div>
            </div>
        )
    }
}