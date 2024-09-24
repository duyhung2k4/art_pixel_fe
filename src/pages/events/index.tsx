import { useGetAllEventQuery } from "@/redux/api/event.api";
import React, { useEffect } from "react";


const Event: React.FC = () => {
    const {
        data,
        refetch,
    } = useGetAllEventQuery(null);

    console.log(data?.data);

    useEffect(() => {
        refetch();
    }, []);



    return (
        <>Event</>
    )
}

export default Event;