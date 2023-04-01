import { useRouter } from "next/router";
const SelectedClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <div>The project page for a specific project for a selected client.</div>
  );
};

export default SelectedClientProjectPage;
