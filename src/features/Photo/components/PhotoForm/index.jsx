import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { Button, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { PHOTO_CATEGORY_OPTIONS } from '../../../../constants/global';
import Images from 'constants/images';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';
import RandomPhotoField from 'custom-fields/RandomPhotoField';
import * as Yup from 'yup';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
};

function PhotoForm(props) {
    const iniitialValues = {
        title: '',
        categoryId: null,
        photo: '',
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('This field is required.'),

        categoryId: Yup.number().required('This field is required.').nullable(),

        photo: Yup.string().when('categoryId', {
            is: 1,
            then: () => Yup.string().required('This field is required.'),
            otherwise: () => Yup.string().notRequired(),
        }),
    });
    // npm i --save react-select
    return (
        <Formik initialValues={iniitialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
            {(formikProps) => {
                const { values, error, touched, isSubmitting } = formikProps;
                // console.log(formikProps);
                return (
                    <Form>
                        <FastField
                            // Props cua fastfield
                            name="title"
                            component={InputField}
                            // Input field
                            label="Title"
                            placeholder="Eg: Wow Nature..."
                        />

                        {/* <FormGroup>
                            <Label for="titleId">Title</Label>
                            <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
                        </FormGroup> */}

                        <FastField
                            name="categoryId"
                            component={SelectField}
                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

                        {/* <FormGroup>
                            <Label for="categoryId">Photo</Label>

                            <div>
                                <Button type="button" outline color="primary">
                                    Random a photo
                                </Button>
                            </div>
                            <div>
                                <img width="200px" height="200px" src={Images.COLORFUL_BG} alt="colorful background" />
                            </div>
                        </FormGroup> */}
                        <FastField name="photo" component={RandomPhotoField} label="Photo" />

                        <FormGroup>
                            <Button type="submit" color="primary">
                                {isSubmitting && <Spinner size="sm"></Spinner>}
                                Add to album
                            </Button>
                        </FormGroup>
                    </Form>
                );
            }}
        </Formik>
    );
}

export default PhotoForm;
