import React, { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import { useAcceptCodeMutation } from "@/redux/api/auth.api";



const AcceptCode: React.FC = () => {
    const [code, setCode] = useState<string>("");

    const [post] = useAcceptCodeMutation();

    const handleAcceptCode = async () => {
        const result = await post(code);
        console.log(result);
    }

    return (
        <>
            <TextInput
                label="Code"
                placeholder="Code"
                value={code}
                onChange={e => setCode(e.target.value)}
            />
            <Button onClick={handleAcceptCode}>Send</Button>
        </>
    )
}

export default AcceptCode;