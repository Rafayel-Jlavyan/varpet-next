import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us on this page" />
        <meta property="og:title" content="About Us" />
        <meta property="og:description" content="Learn more about us on this page" />
      </Head>
      <h1>About Us</h1>
      <p>Here is some information about us.</p>
      <a href="/">Go to Home Page</a>
      <a href="/contact">Go to Contact Page</a>
    </div>
  );
}
