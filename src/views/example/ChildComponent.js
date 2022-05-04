import React from 'react';
class ChildComponent extends React.Component {
    state = {
        showjobs: false
    }
    handleShowHide = (status) => {
        this.setState({

            showjobs: !this.state.showjobs
        })
    }
    render() {
        let { arrjob } = this.props;
        let { showjobs } = this.state;
        let check = showjobs === true ? 'showjobs = true' : 'showjobs = false';
        return (
            <>
                {showjobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>

                    </div>

                    :
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
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}
// const ChildComponent = (props) => {

//     let { arrjob } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrjob.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title}-{item.salary} $
//                                 </div>
//                             )
//                         }
//                     })

//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;
