import React from "react";
import Cookies from "js-cookie";

import { RegisterRequest } from "@/dto/request/auth";
import { TOKEN_TYPE } from "@/model/variable";
import { useRegisterMutation } from "@/redux/api/auth.api";
import { Button, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";



const Register: React.FC = () => {
    const [post, { isLoading }] = useRegisterMutation();
    const navigation = useNavigate();

    const form = useForm<RegisterRequest>({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        }
    });

    const handleRegister = async (values: RegisterRequest) => {
        const result = await post(values);
        if ("error" in result) {
            console.log(result);
            return;
        }

        const uuid = result.data.data;
        if (!uuid) {
            return;
        }

        Cookies.set(TOKEN_TYPE.PROFILE_UUID_PENDING, uuid, { expires: 24 * 60 * (1 / (24 * 3600)) * 60 });
        navigation(ROUTER.FACE_AUTH.href);
    }

    return (
        <>
            <Stack align="center" justify="center" h={"100vh"}>
                <Stack w={"35%"}>
                    <form id="register" onSubmit={form.onSubmit(handleRegister)}>
                        <TextInput
                            label="Họ, tên đệm"
                            placeholder="Họ, tên đệm"
                            {...form.getInputProps("firstName")}
                        />
                        <TextInput
                            label="Tên"
                            placeholder="Tên"
                            {...form.getInputProps("lastName")}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Email"
                            {...form.getInputProps("email")}
                        />
                    </form>
                    <Button
                        form="register"
                        type="submit"
                        disabled={isLoading}
                        loading={isLoading}
                    >Đăng kí</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default Register;