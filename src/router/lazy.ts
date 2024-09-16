import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));
export const PageRegsiter = lazy(() => import("@/pages/register"));
export const PageFaceAuth = lazy(() => import("@/pages/face_auth"));
export const PageAcceptCode = lazy(() => import("@/pages/accept_code"));

// protected page
export const PageHome = lazy(() => import("@/pages/home"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));