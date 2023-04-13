import React from "react";

const UserIdPage = (props) => {
  return <div>{props.id}</div>;
};

export async function getServerSideProps(context) {
  const { params } = context;
  const userId = params.uid;
  return {
    props: { id: "userid-" + userId },
  };
}

export default UserIdPage;
