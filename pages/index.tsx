import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";

const Home: NextPage = () => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/api/auth/signin");
    },
  });

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
};

export default Home;
