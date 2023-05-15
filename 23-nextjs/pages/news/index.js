import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            next.js is a great framework
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
