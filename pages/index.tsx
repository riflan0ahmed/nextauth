import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Router, useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/api/auth/signin");
    },
  });

  return (
    <>
      <Link href={"/protected"}>
        <a>Protected Page</a>
      </Link>
      <br />
      Signed in as {session?.user?.email} <br /> <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
};

export default Home;
