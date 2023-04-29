import React, { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

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
const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
};

export default HomePage;
