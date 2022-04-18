import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        channel: 'Hoi dan it'
    }
    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        alert('click me');
    }
    render() {
        let name = 'cuong'
        return (
            <div className='abc'>
                <div className='first'>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} />
                    {console.log('My name is:', name)}
                    hello my Component Hoi dan it,My name is {this.state.name}
                </div>
                <div className='second'>
                    My youtube channel: {this.state.channel};
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>click me</button>
                </div>
            </div>

        )
    }
}
export default MyComponent;
