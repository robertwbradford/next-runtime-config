import React from "react";
import Link from "next/link";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Another = ({ apiUrl }) => (
  <main>
    <h1>I Am Another Page</h1>
    <dl>
      <dt>publicRuntimeConfig.API_URL</dt>
      <dd>{apiUrl}</dd>
    </dl>
    <Link href="/">
      <a href="/">Home</a>
    </Link>
  </main>
);

Another.getInitialProps = async () => {
  console.log("publicRuntimeConfig.API_URL", publicRuntimeConfig.API_URL);
  // Normally we would use the API_URL to fetch some data.
  // Instead we will just pass it through so we can see
  // which one is being used.
  return {
    apiUrl: publicRuntimeConfig.API_URL
  };
};

export default Another;
