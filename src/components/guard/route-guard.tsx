import { useUser } from "@/contexts/user-provider";
import { useRouter } from "next/router";
import { useEffect } from "react";

const protectedRoutes = ["/company"];
const publicRoutes = ["/login", "/signup"];

export function LoginGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    const isProtectedRoute = protectedRoutes.some((route) =>
      router.pathname.startsWith(route)
    );

    const isPublicRoute = publicRoutes.some((route) =>
      router.pathname.startsWith(route)
    );

    if (!loading && !user && isProtectedRoute) {
      router.push("/login");
    }

    if (user && isPublicRoute) {
      router.push(`/company/${user.company.id}/dashboard`);
    }
  }, [loading, user, router]);

  const isProtectedRoute = protectedRoutes.some((route) =>
    router.pathname.startsWith(route)
  );

  if (loading && isProtectedRoute) {
    return <div>Loading...</div>; // Or a proper loading spinner
  }

  if (!user && isProtectedRoute) {
    return null; // Or a proper loading spinner
  }

  return <>{children}</>;
}
