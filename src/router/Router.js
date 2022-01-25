import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Tech } from "../pages/Tech";
import { CreateTech } from "../pages/Tech/CreateTech";
import { CreateTemplate } from "../pages/Templates/CreateTemplate";
import { EditTemplate } from "../pages/Templates/EditTemplate";
import { EditTech } from "../pages/Tech/EditTech";
import { Template } from "../pages/Templates";
import { Works } from "../pages/Webs";
import { Dashboard } from "./Dashboard";
import { CreateWork } from "../pages/Webs/CreateWork";
import { EditWork } from "../pages/Webs/EditWork";
import { NoFound } from "../pages/NoFound";

export const Router = () => {

    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/dashboard' element={<Dashboard />} >
                    <Route path="tech" element={<Tech />} />
                    <Route path="create_tech" element={<CreateTech />} />
                    <Route path="edit_tech" element={<EditTech />} />
                    <Route path="template" element={<Template />} />
                    <Route path="create_template" element={<CreateTemplate />} />
                    <Route path="edit_template" element={<EditTemplate />} />
                    <Route path="works" element={<Works />} />
                    <Route path="create_works" element={<CreateWork />} />
                    <Route path="edit_works" element={<EditWork />} />
                    
                    edit_tech
                </Route>
                <Route path='*' element={<NoFound />} />
            </Routes>
        </>

    );


}