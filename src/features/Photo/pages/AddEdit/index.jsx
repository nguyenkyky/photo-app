import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../../../components/Banner';
import './AddEdit.scss';
import PhotoForm from '../../components/PhotoForm';

AddEditPage.propTypes = {};

function AddEditPage(props) {
    return (
        <div className="photo-edit">
            <Banner title="Pick your amazing photo 😎" />

            <div className="photo-edit__form">
                
                <PhotoForm  />
            </div>
        </div>
    );
}

export default AddEditPage;
