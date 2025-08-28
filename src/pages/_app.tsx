import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { LoginGuard } from "@/components/guard/route-guard";
import { UserProvider } from "@/contexts/user-provider";

const QueryProvider = dynamic(
  () => import("@/components/query-provider").then((res) => res.QueryProvider),
  { ssr: false }
);

const ReactQueryDevtools = dynamic(
  () =>
    import("@tanstack/react-query-devtools").then(
      (res) => res.ReactQueryDevtools
    ),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProvider>
      <UserProvider>
        <LoginGuard>
          <Component {...pageProps} />
        </LoginGuard>
        <ReactQueryDevtools initialIsOpen={false} />
      </UserProvider>
    </QueryProvider>
  );
}
