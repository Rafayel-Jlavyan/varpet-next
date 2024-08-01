import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page" />
        <meta property="og:title" content="Home Page" />
        <meta property="og:description" content="This is the home page" />
      </Head>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
}
