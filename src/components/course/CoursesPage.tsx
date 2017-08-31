import * as React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {CourseList} from './CourseList';
//import {bindActionCreators} from 'redux';


class CoursesPage extends React.Component<any,any>{
    constructor(props:any,state:any){
        super(props,state);
        this.state = {
            course: {title: ""}
        };
    }

    courseRow(course,index){
        return <div key={index}> {course.title} </div>
    }
    
    render() {
        return(
            <div>
                <h1>Courses</h1>
                <CourseList courses={this.props.courses}/>
            </div>
        );
    }
}

function mapStateToProps(state,ownProps){ //adds a prop named courses with the state value
    return{
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){ //adds a prop named createCourse which is technically a function (dispatch) responsible for calling the action
    return{
        createCourse: (course) => dispatch(courseActions.createCourse(course))
        //createCourse: bindActionCreators(courseActions.createCourse,dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CoursesPage);