import React from "react";
import Link from "next/link";

const Index = () => (
  <main>
    <h1>Hello world!</h1>
    <Link href="/another">
      <a href="/another">Link to another page</a>
    </Link>
  </main>
);

// Index.getInitialProps = async () => ({});

export default Index;
