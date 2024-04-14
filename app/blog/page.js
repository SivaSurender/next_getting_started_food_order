import Link from "next/link";
import React from "react";

function BlogsMain() {
  return (
    <main>
      <Link href="blog/blog-post-1"> Blog-one</Link>

      <Link href="blog/blog-post-2">Bloge-two</Link>
    </main>
  );
}

export default BlogsMain;
