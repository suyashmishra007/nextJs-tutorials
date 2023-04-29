import React from "react";
import AllPosts from "../../components/posts/all-posts";
const DUMMY_POSTS = [
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NExtjs is production ready framework",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs1",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NExtjs is production ready framework",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs2",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NExtjs is production ready framework",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs3",
  },
  {
    title: "Getting started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt: "NExtjs is production ready framework",
    date: "2022-02-10",
    slug: "getting-started-with-nextjs4",
  },
];
const AllPostsPage = (props) => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
