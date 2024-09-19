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
    | "ACCEPT_CODE"
    | "FACE_LOGIN"
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
        href: "/face-auth",
        type: "protected",
        name: "Xác thực khuôn mặt",
    },
    REGISTER: {
        href: "/register",
        type: "protected",
        name: "Đăng kí",
    },
    ACCEPT_CODE: {
        href: "/accept-code",
        type: "protected",
        name: "Mã xác nhận",
    },
    FACE_LOGIN: {
        href: "/face-login",
        type: "protected",
        name: "Xác thực",
    }
}