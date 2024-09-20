import React from "react";
import { Grid, Group } from "@mantine/core";



const Home: React.FC = () => {
    return (
        <Group h={"100vh"} w={"100%"}>
            <Grid gutter={0} h={"100%"} w={"100%"}>
                <Grid.Col span={6}>

                </Grid.Col>
                <Grid.Col span={6}>

                </Grid.Col>
            </Grid>
        </Group>
    )
}

export default Home;