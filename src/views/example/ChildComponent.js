import React from 'react';
class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: ''
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
        console.log('>>> check props:', this.props)
        let name = this.props.name;
        let age = this.props.age;
        let address = this.props.address;
        let arrjob = this.props.arrjob;
        return (
            <>
                <div className="job-lists">
                    {
                        arrjob.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {item.title}-{item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>

        )
    }
}
export default ChildComponent;

