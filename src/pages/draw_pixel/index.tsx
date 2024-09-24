import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

import { TOKEN_TYPE } from "@/model/variable";
import { useParams } from "react-router";
import { Button } from "@mantine/core";



const DrawPixel: React.FC = () => {
    const { id } = useParams();
    const accessToken = Cookies.get(TOKEN_TYPE.ACCESS_TOKEN);
    const [_, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        if(!accessToken || !id) return;

        const ws = new WebSocket(`${import.meta.env.VITE_ART_PIXEL_SOCKET}/event/${id}?auth=${accessToken}`);
        setWs(ws);

        ws.onmessage = (data) => {
            console.log(data.data);
        }
    }, [accessToken, id]);

    return (
        <>
            DrawPixel
            <Button>Draw</Button>
        </>
    )
}

export default DrawPixel;