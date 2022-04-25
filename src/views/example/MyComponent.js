import React from 'react';
import ChildComponent from './ChildComponent';
class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrjob: [

            { id: 'abcjob1', title: 'developer', salary: '500$' },

            { id: 'abcjob2', title: 'tester', salary: '400$' },
            { id: 'abcjob3', title: 'PM', salary: '100$' }
        ]
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
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
                <form>
                    <label htmlFor='fname'>First name:</label><br />
                    <input type="text" value={this.state.firstName} onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor='lname'>Last name:</label><br />
                    <input type="text" value={this.state.lastName} onChange={(event) => this.handleChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
                </form>
                <ChildComponent
                    name={this.state.name}
                    age={'25'}
                    address={'Ha Noi'}
                    arrjob={this.state.arrjob}
                />
            </>

        )
    }
}
export default MyComponent;

