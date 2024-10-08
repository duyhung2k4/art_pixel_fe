import React from "react";
import AuthLayout from "../layout/auth";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

import { Routes, Route } from "react-router-dom";
import {
    PageRegsiter,
    PageFaceAuth,
    PageHome,
    PageLogin,
    PageNotFound,
    PageAcceptCode,
    PageFaceLogin,
    PageSaveProcess,
    PageEvent,
    PageDrawPixel,
} from "./lazy";
import { ROUTER } from "@/constant/router";



const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />
                <Route path={ROUTER.REGISTER.href} element={<PageRegsiter />} />
                <Route path={ROUTER.FACE_AUTH.href} element={<PageFaceAuth />} />
                <Route path={ROUTER.ACCEPT_CODE.href} element={<PageAcceptCode />} />
                <Route path={ROUTER.FACE_LOGIN.href} element={<PageFaceLogin />} />
                <Route path={ROUTER.SAVE_PROCESS.href} element={<PageSaveProcess />} />
                <Route path={ROUTER.HOME.href} element={<PageHome />} />

                <Route element={<ProtectedLayout />}>
                    <Route element={<AppshellLayout />}>
                        <Route path={ROUTER.EVENT.href} element={<PageEvent />} />
                        <Route path={`${ROUTER.DRAW_PIXEL.href}/:id`} element={<PageDrawPixel />} />
                    </Route>
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;