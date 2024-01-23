import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import { LinksPage } from './pages/LinksPage';
import { CreatePage } from './pages/CreatePage';
import { DetailPage } from './pages/DetailPage';
import { AuthPage } from './pages/AuthPage';



export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return(
            <Routes>
                <Route path='/links' exact element={<LinksPage> </LinksPage>}/>

                

                <Route path='/create' exact element={<CreatePage /> }/>


                <Route path='/detail/:id' element={<DetailPage />}/>


                <Route exact path="/create" element={<CreatePage /> }/>

                <Route
                    path="*"
                    element={<Navigate to="/create" replace />}
                />


            </Routes>
        )
    } 

    return(
        <Routes>

                <Route exact path='/' element={<AuthPage />}/>



                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
                 
        </Routes>
    )
}