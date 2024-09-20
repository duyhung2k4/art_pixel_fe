import { ROUTER } from "@/constant/router";
import { useSaveProcessMutation } from "@/redux/api/auth.api";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";



const SaveProcess: React.FC = () => {
    const [post] = useSaveProcessMutation();
    const navigation = useNavigate();

    const handleProcess = async () => {
        const result = await post(null);
        if("error" in result) return;
        navigation(ROUTER.ACCEPT_CODE.href);
    }

    useEffect(() => {
        handleProcess();
    }, []);

    return (
        <>Save process</>
    )
}

export default SaveProcess;