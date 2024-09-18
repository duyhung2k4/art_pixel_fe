import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";

import { TOKEN_TYPE } from "@/model/variable";
import { Stack } from "@mantine/core";
import { useSendFileAuthMutation } from "@/redux/api/auth.api";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";



const FaceAuth: React.FC = () => {
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [load, setLoad] = useState<boolean>(false);

    const uuid = Cookies.get(TOKEN_TYPE.PROFILE_UUID_PENDING);
    const [post] = useSendFileAuthMutation();
    const navigation = useNavigate();

    useEffect(() => {
        if(!uuid) return;
        const ws = new WebSocket(`${import.meta.env.VITE_ART_PIXEL_SOCKET}/auth?uuid=${uuid}`);
        
        setWs(ws);

        ws.onmessage = (data) => {
            console.log(data.data);
            if(data.data === "done") {
                navigation(ROUTER.ACCEPT_CODE.href);
            }
            setLoad(false);
        }
    }, [uuid]);

    const sendMessage = async (dataBase64: string) => {
        // if (!ws) return
        const result = await post({ data: dataBase64 });

        // const imageBase64 = dataBase64.split(",")[1];
        // if (!imageBase64) return

        // console.log("send");

        // ws.send(JSON.stringify({
        //     type: "send_file_auth_face",
        //     auth: Cookies.get(TOKEN_TYPE.PROFILE_UUID_PENDING),
        //     data: {
        //         data: imageBase64,
        //     },
        // }));
        // setLoad(true);
    }







    const videoRef = useRef<HTMLVideoElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const captureFrameAsImage = () => {
        if (!videoRef.current || !canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (ctx) {
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
            const imageDataUrl = canvas.toDataURL("image/png");
            sendMessage(imageDataUrl);
        }
    };

    useEffect(() => {
        if (!ws) return

        const getCameraStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error("Lỗi khi truy cập camera:", error);
            }
        };

        getCameraStream();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
                tracks.forEach((track) => track.stop());
            }
        };
    }, [ws]);

    useEffect(() => {
        if (!ws) return;

        const cap = setInterval(() => {
            captureFrameAsImage();
        }, 1000);

        return () => {
            clearInterval(cap);
        }
    }, [ws]);



    if (!ws) {
        return (<>Not ws</>)
    }

    return (
        <>
            <Stack h={"100vh"} justify="center" align="center">
                <div style={{ width: "60%" }}>
                    <video ref={videoRef} autoPlay playsInline style={{ width: "100%", transform: "scaleX(-1)" }} />
                    <canvas ref={canvasRef} width={640} height={480} style={{ display: "none" }} />
                </div>
            </Stack>
        </>
    )
}

export default FaceAuth;