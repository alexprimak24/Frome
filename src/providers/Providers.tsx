"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FuelProviderWrapper from "./FuelProviderWrapper";
import { SnackbarProvider } from "notistack";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <FuelProviderWrapper>
        <SnackbarProvider>{children}</SnackbarProvider>
      </FuelProviderWrapper>
    </QueryClientProvider>
  );
};

export default Providers;
