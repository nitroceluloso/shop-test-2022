import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        }
    }
});

export const NetworkProvider: React.FC<any> = (props) =>
    (<QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>)