import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));
export const PageRegsiter = lazy(() => import("@/pages/register"));
export const PageFaceAuth = lazy(() => import("@/pages/face_auth"));
export const PageAcceptCode = lazy(() => import("@/pages/accept_code"));
export const PageFaceLogin = lazy(() => import("@/pages/face_login"));
export const PageSaveProcess = lazy(() => import("@/pages/save_process"));
export const PageHome = lazy(() => import("@/pages/home"));
export const PageDrawPixel = lazy(() => import("@/pages/draw_pixel"));

// protected page
export const PageEvent = lazy(() => import("@/pages/events"));
// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));