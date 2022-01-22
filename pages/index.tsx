import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      console.log("user is not unauthenticated");
    },
  });

  // const { status, data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.replace("/api/auth/signin");
  //   },
  // });

  return status === "authenticated" ? (
    <>
      <Link href={"/protected"}>
        <a>Protected Page</a>
      </Link>
      <br />
      Signed in as {session?.user?.email} <br /> <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  ) : null;

  // return (
  //   <div className="h-screen bg-gray-500">
  //     <Link href={"/protected"}>
  //       <a className="text-2xl">Protected Page</a>
  //     </Link>
  //     <br />
  //     Signed in as {session?.user?.email} <br /> <br />
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </div>
  // );
};

export default Home;
