import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Component/Form';
import Success from './Component/Success';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Form />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
};

export default App;
