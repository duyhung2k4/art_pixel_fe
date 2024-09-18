import Cookies from "js-cookie";

import { TOKEN_TYPE } from "@/model/variable";



export const HEADER = {
    defaultHeader: () => ({
        accept: 'application/json',
    }),
    refreshTokenHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.REFRESH_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },
    protectedHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    },
    authHeader: () => {
        const token = Cookies.get(TOKEN_TYPE.PROFILE_UUID_PENDING);
        return {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
}

export const endPoint = {
    auth: {
        register: () => ({
            url: "api/v1/auth/register",
            method: "POST",
            headers: HEADER.defaultHeader(),
        }),
        sendFileAuth: () => ({
            url: "api/v1/auth/send-file-auth",
            method: "POST",
            headers: HEADER.authHeader(),
        }),
    },
}