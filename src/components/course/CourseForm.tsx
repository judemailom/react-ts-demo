import * as React from 'react';
import {TextInput} from '../common/TextInput';
import {SelectInput} from '../common/SelectInput';

//props are on the params
export const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return(
        <form>
            <h1> Manage Course </h1>
            <TextInput
                name = "title"
                label = "Title"
                onChange = {onChange}
                placeHolder = ""
                value = {course.title}
                error = {errors.title}/>

            <SelectInput
                name = "authorId"
                label = "Author"
                onChange = {onChange}
                defaultOption = "Select Author"
                value = {course.authorId}
                error = {errors.authorId}
                options = {allAuthors}/>

            <TextInput
                name = "category"
                label = "Category"
                onChange = {onChange}
                placeHolder=""
                value = {course.category}
                error = {errors.category}/>
                
            <TextInput
                name = "length"
                label = "Length"
                value = {course.length}
                placeHolder=""
                onChange = {onChange}
                error = {errors.length}/>

            <input
                type="submit"
                disabled={loading}
                value={loading? 'Saving...' : 'Save'}
                className="btn btn-primary"
                onClick={onSave}/>
        </form>
    );
}