import React from "react";
import PostHeader from "./post-header";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";

const DUMMY_POSTS = {
  title: "Getting started with nextjs",
  image: "getting-started-nextjs.png",
  content: "# This is the first post",
  date: "2022-02-10",
  slug: "getting-started-with-nextjs1",
};

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POSTS.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
