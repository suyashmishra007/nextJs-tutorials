import React from "react";

const userProfilePage = (props) => {
  return <div>{props.username}</div>;
};

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
}

export default userProfilePage;
