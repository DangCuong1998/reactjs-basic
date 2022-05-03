import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {

    state = {
        arrjob: [

            { id: 'abcjob1', title: 'developer', salary: '500' },

            { id: 'abcjob2', title: 'tester', salary: '400' },
            { id: 'abcjob3', title: 'PM', salary: '1000' }
        ]
    }

    handleSubmit = (event) => {

        event.preventDefault()
        console.log('check data input:', this.state)
    }

    render() {
        console.log('>>> call render', this.state)
        let name = 'cuong'
        return (
            <>
                <AddComponent></AddComponent>

                <ChildComponent
                    arrjob={this.state.arrjob}
                />
            </>

        )
    }
}
export default MyComponent;

