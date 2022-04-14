import React from 'react';
class MyComponent extends React.Component {

    state = {
        name: 'Eric',
        channel: 'Hoi dan it'
    }
    render() {
        let name = 'cuong'
        return (
            <div className='abc'>
                <div className='first'>
                    {console.log('My name is:', name)}
                    hello my Component Hoi dan it,My name is {this.state.name}
                </div>
                <div className='second'>
                    My youtube channel: {this.state.channel};
                </div>

            </div>

        )
    }
}
export default MyComponent;
