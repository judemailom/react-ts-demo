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

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        // const course = this.state.course;
        // course.title = event.target.value;
        // this.setState({course:course});
    };

    onClickSave(){
        //this.props.createCourse(this.state.course);
    };

    render(){
        return(
            <CourseForm 
                course={this.state.course}
                errors={this.state.errors}
                allAuthors={this.props.authors}
                onSave={[]}
                onChange={[]}
                loading = "false"
            />
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