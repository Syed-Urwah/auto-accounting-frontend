import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

const protectedRoutes = ["/company"];

export function LoginGuard({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useQuery({ queryKey: ["user"] });
  const router = useRouter();

  useEffect(() => {
    const isProtectedRoute = protectedRoutes.some((route) =>
      router.pathname.startsWith(route)
    );

    if (!isLoading && !user && isProtectedRoute) {
      router.push("/login");
    }
  }, [isLoading, user, router]);

  const isProtectedRoute = protectedRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  if (isLoading && isProtectedRoute) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  if (!user && isProtectedRoute) {
    return null; // Or a proper loading spinner
  }

  return <>{children}</>;
}
