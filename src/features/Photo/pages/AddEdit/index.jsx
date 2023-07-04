import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import './AddEdit.scss';
import PhotoForm from '../../components/PhotoForm';
import { useDispatch } from 'react-redux';
import { addPhoto } from 'features/Photo/photoSlice';
import { useNavigate } from 'react-router-dom';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        return new Promise((resolve) => {
            console.log('form submit:', values);

            setTimeout(() => {
                const action = addPhoto(values);
                console.log({ action });
                dispatch(action);
                navigate('/photos');
                resolve(true);
            }, 2000);
        });
    };
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                <PhotoForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default AddEditPage;
