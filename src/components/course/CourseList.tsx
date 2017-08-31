import * as React from 'react';
import {CourseListRow} from './CourseListRow';

export const CourseList = ({courses}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                {courses.map(course=><CourseListRow key={course.id} course={course}/>)} 
            </tbody>
        </table>
    );
};

