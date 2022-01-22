import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

export default function Admin() {
  const router = useRouter();

  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/api/auth/signin");
    },
  });

  return status === "authenticated" ? (
    <div className="h-screen text-red-500 bg-black ">
      <Link href={"/"}>
        <a>Home Page</a>
      </Link>
      <br />
      User is logged in
    </div>
  ) : null;
}
