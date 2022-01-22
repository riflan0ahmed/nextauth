import { useSession } from "next-auth/react";
import Link from "next/link";
import Router from "next/router";

export default function Admin() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      Router.replace("/api/auth/signin");
    },
  });

  return status === "authenticated" ? (
    <div className=" bg-black h-screen text-red-500">
      <Link href={"/"}>
        <a>Home Page</a>
      </Link>
      <br />
      User is logged in
    </div>
  ) : null;
}
