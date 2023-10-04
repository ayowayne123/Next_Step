import Title from "@/components/pageTitle";
import Recent from "@/components/recentPosts";
import AllPosts from "@/components/allPosts";

export default function Home() {
  return (
    <main className="">
      <Title title="Next Step" />
      <Recent />
      <AllPosts />
    </main>
  );
}
