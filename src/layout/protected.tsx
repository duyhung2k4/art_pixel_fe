import React, { Suspense } from "react";

import { LoadingOverlay } from "@mantine/core";
import { useOutlet } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";



const ProtectedLayout: React.FC = () => {
  const outlet = useOutlet();

  const isLoading = useAppSelector(state => Object.values(state.authApi.mutations).some(mutation => mutation?.status === 'pending'))

  if(isLoading) {
    return <LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />
  }

  return (
    <Suspense fallback={<LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />}>
      {outlet}
    </Suspense>
  )
}

export default ProtectedLayout;