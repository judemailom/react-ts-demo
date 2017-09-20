import * as React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {CourseForm} from './CourseForm';

class ManageCoursePage extends React.Component<any,any>{
    constructor(props:any,state:any){
        super(props,state);

        this.state = {
            course: this.props.courses,
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        //this.onClickSave = this.onClickSave.bind(this);
    }

    updateCourseState(event){
        const field = event.target.value;
        let course = this.state.course;
        course[field] = event.target.value;
        this.setState({course:course});
    }

    render(){
        return(<div>
            <input type="text" onChange={() => {alert('adsadsa');}} value={this.state.course.title}/>
            <CourseForm 
                course={this.state.course}
                allAuthors={this.props.authors}
                onSave={[]}
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
        createCourse: (course) => dispatch(courseActions.createCourse(course))
        //createCourse: bindActionCreators(courseActions.createCourse,dispatch)
    };
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(ManageCoursePage);