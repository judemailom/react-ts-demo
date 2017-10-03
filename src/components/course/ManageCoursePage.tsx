import * as React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {CourseForm} from './CourseForm';
import toastr from 'toastr';
import {withRouter} from 'react-router-dom';

class ManageCoursePage extends React.Component<any,any>{
    constructor(props:any,state:any){
        super(props,state);
        this.state = {
            course: this.props.courses,
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    saveCourse(event){
        event.preventDefault();
        this.props.saveCourse(this.state.course);
        this.props.history.push('/courses');
        // this.setState({saving: true});
        // this.props.actions.saveCourse(this.state.course)
        //     .then(() => this.redirect())
        //     .catch(error => {
        //         toastr.error(error);
        //         this.setState({saving: false});
        //     });
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState({course:course});
    }

    render(){
        return(<div>
            <CourseForm 
                course={this.state.course}
                allAuthors={this.props.authors}
                onSave={this.saveCourse}
                onChange={this.updateCourseState}
                loading = {false}
                errors={this.state.errors}                
            /></div>
        );
    }
}

function mapStateToProps(state,ownProps){ //adds a prop named courses with the state value

    const authorsFormattedForDD = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName   
           }
    });

    let course = {id:"",title:"",watchHref: "",authorId: "",length: "",category: ""}
    return{
        courses: course,
        authors: authorsFormattedForDD
    };
}

function mapDispatchToProps(dispatch){ //adds a prop named createCourse which is technically a function (dispatch) responsible for calling the action
    return{
        createCourse: (course) => dispatch(courseActions.createCourse(course)),
        saveCourse: (course) => dispatch(courseActions.saveCourse(course))
        //createCourse: bindActionCreators(courseActions.createCourse,dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(ManageCoursePage);

withRouter(ManageCoursePage);