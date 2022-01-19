import type { NextPage } from "next";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

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
