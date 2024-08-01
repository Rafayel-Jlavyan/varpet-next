import Head from "next/head";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
        <meta property="og:title" content="Contact Us" />
        <meta property="og:description" content="Get in touch with us" />
      </Head>
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us through this page.</p>
      <a href="/">Go to Home Page</a>
      <a href="/about">Go to About Page</a>
    </div>
  );
}
