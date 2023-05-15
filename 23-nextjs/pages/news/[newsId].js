import { useRouter } from "next/router";

const DetailPage = () => {
  const router = useRouter();
  const newId = router.query.newsId;

  return <div>the detail page</div>;
};

export default DetailPage;
