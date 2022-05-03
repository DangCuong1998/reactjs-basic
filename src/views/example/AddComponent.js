import React from "react";
class AddComponent extends React.Component {
    state = {
        titlejob: '',
        salary: '',
    }
    handleChangetitlejob = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {

        event.preventDefault()
        console.log('check data input:', this.state)
    }

    render() {
        return (
            <form>
                <label htmlFor='fname'>job's title</label><br />
                <input type="text" value={this.state.titlejob} onChange={(event) => this.handleChangetitlejob(event)} /><br />
                <label htmlFor='lname'>salary:</label><br />
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangesalary(event)} /><br /><br />
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
            </form>
        )
    }
}
export default AddComponent;