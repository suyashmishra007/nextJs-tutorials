import { useRouter } from "next/router";

const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);

  // send a request to the backend server
  // to fetch the piece of data with an id of router.project.projectid
  return (
    <div>
      <h1>The Portfolio Project Page !!</h1>
    </div>
  );
};

export default PortfolioProjectPage;
