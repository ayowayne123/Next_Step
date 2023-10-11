import Title from "@/components/pageTitle";
import Recent from "@/components/recentPosts";
import AllPosts from "@/components/allPosts";
import { getPosts } from "./utils/sanity-utils";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="">
      <Title title="Next Step" />
      <Recent />
      <AllPosts AllPosts={posts} />
    </main>
  );
}
