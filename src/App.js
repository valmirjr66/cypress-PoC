import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import ReadingsListingPage from './pages/ReadingsListing';
import ReadingsListingByCategoryPage from './pages/ReadingsListingByCategory';
import ErrorPage from './pages/Error';
import AboutUsPage from './pages/AboutUs';
import ReadingVisualizationPage from './pages/ReadingVisualization';

require('dotenv').config();

const App = () => {
    return (
        <Suspense fallback={null}>
            <BrowserRouter>
                <Switch>
                    <Route path={['/', '/home']} exact component={ReadingsListingPage} />
                    <Route path='/by-category' component={ReadingsListingByCategoryPage} />
                    <Route path='/about-us' component={AboutUsPage} />
                    <Route path='/reading' component={ReadingVisualizationPage} />
                    <Route path="*" component={ErrorPage} />
                </Switch>
            </ BrowserRouter>
        </Suspense>
    );
}

export default App;