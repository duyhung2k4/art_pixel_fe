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
    | "SAVE_PROCESS"
    | "EVENT"
    | "DRAW_PIXEL"
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
    },
    SAVE_PROCESS: {
        href: "/save-process",
        type: "protected",
        name: "Lưu tiến trình",
    },
    EVENT: {
        href: "/event",
        type: "protected",
        name: "Sự kiện",
    },
    DRAW_PIXEL: {
        href: "/draw-pixel",
        type: "protected",
        name: "Vẽ pixel",
    }
}