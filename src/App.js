import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';
import MainPage from './features/Photo/pages/Main';
import AddEditPage from './features/Photo/pages/AddEdit';

// Lazy Load
// const photo = React.lazy(() => import('./features/Photo/pages/Main'));

function App() {
    return (
        <div className="photo-app">
            {/* <Suspense fallback={<div>Loading ... </div>}> */}
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Navigate to="/photos" />} />
                    <Route path="/photos" element={<MainPage />} />
                    <Route path="/photos/add" element={<AddEditPage />} />
                    <Route path="/photos/:photoId" element={<AddEditPage />} />
                    <Route element={NotFound} />
                </Routes>
            </BrowserRouter>
            {/* </Suspense> */}
        </div>
    );
}

export default App;
