import Head from "next/head";

import { PageTitle } from "../components/ui";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageTitle text="Calender" />
    </>
  );
}
