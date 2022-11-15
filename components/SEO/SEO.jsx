// Next
import Head from "next/head";

export function SEO({ title }) {
  return (
    <Head>
      <title>Boreal - {title} </title>
      <meta
        name="description"
        content={`${title} page of Boreal Invetory Management`}
      />
      <link rel="icon" href="/logos/Logo.png" />
    </Head>
  );
}
