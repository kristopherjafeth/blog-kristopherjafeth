import { getAllFilesMetadata } from "@/lib/mdx";
import Image from "next/image";
import Link from "next/link";
export default function Home({ posts }) {
  return (
    <>
      <main>
        <h3 className="section title font-bold text-2xl">Ultimos Posts</h3>
        <div>
          {posts.map((post) => (
            <Link key={post.slug} href={`blog/${post.slug}`}>
              <div class="bg-gray-800 shadow-md border border-gray-900 rounded-lg max-w-sm mb-5">
                <div class="p-5">
                  <h5 class="text-white font-bold text-2xl tracking-tight mb-2">
                    {post.title}
                  </h5>
                  <p class="font-normal text-white mb-3">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
