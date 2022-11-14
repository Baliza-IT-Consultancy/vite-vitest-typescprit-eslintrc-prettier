import { QueryClient } from "react-query";
const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
      staleTime: 6000,
    },
  },
});

export default queryClient;
