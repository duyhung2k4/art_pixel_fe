export type ObjectRouter = {
    href: string
    name?: string
    hrefIcon?: string
    type: "public" | "protected"
}

export type FieldRouter =
    | "LOGIN"
    | "HOME"
    | "FACE_AUTH"
    | "REGISTER"
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
    LOGIN: {
        href: "/login",
        type: "public",
    },
    HOME: {
        href: "/",
        type: "protected",
        name: "Trang chủ",
    },
    FACE_AUTH: {
        href: "/face_auth",
        type: "protected",
        name: "Xác thực khuôn mặt",
    },
    REGISTER: {
        href: "/register",
        type: "protected",
        name: "Đăng kí",
    },
}