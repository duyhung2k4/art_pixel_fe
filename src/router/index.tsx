import React from "react";
import AuthLayout from "../layout/auth";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

// import { Routes, Route, Router } from "react-router";
import { Routes, Route } from "react-router-dom";
import {
    PageRegsiter,
    PageFaceAuth,
    PageHome,
    PageLogin,
    PageNotFound,
} from "./lazy";
import { ROUTER } from "@/constant/router";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />
                <Route path={ROUTER.REGISTER.href} element={<PageRegsiter />} />
                <Route path={ROUTER.FACE_AUTH.href} element={<PageFaceAuth />} />

                <Route element={<ProtectedLayout />}>
                    <Route element={<AppshellLayout />}>
                        <Route path={ROUTER.HOME.href} element={<PageHome />} />
                    </Route>
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;