import React from "react";
import { Button, Grid, Group, Stack, Text } from "@mantine/core";
import { useNavigate } from "react-router";
import { ROUTER } from "@/constant/router";



const Home: React.FC = () => {
    const navigation = useNavigate();

    const handleNavigation = (type: TYPE_ACTION) => {
        navigation(
            type === "login" ?
                ROUTER.FACE_LOGIN.href :
                ROUTER.REGISTER.href
        )
    }



    return (
        <Group h={"100vh"} w={"100%"}>
            <Grid gutter={0} h={"100%"} w={"100%"}>
                <Grid.Col span={7}>

                </Grid.Col>
                <Grid.Col
                    span={5}
                    style={{
                        height: "100vh",
                        width: "100%",
                        backgroundColor: "#000",
                        padding: "0px 60px"
                    }}
                >
                    <Stack mt={"30vh"}>
                        <Text>Welcome</Text>
                        <Group>
                            <Button onClick={() => handleNavigation("register")}>Đăng kí</Button>
                            <Button onClick={() => handleNavigation("login")}>Đăng nhập</Button>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Group>
    )
}

type TYPE_ACTION = "register" | "login";

export default Home;