import { useRouter } from "next/router";
const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push("/clients/max/projects");
  }
  return (
    <div>
      <h1>The Project of a given client.</h1>
      <button onClick={loadProjectHandler}>Load a Project !!</button>
    </div>
  );
};

export default ClientProjectPage;
