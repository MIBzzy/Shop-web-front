import React from 'react';
import MyNav from "./MyNav";

class App extends React.Component{
    render(){

        const nav1 = ['Homepage','Videos','Learning'];
        const nav2 = ['Web','Java','Node'];

        return (
            <div>
                <h1>Hello React Component</h1>
                <h3>Learn React. </h3>
                <MyNav nav={ nav1 } title="Learning Guiding"/>
                <MyNav nav={ nav2 } title="Road Guiding"/>
            </div>

        )
    }
}

export default App