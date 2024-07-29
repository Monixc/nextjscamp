export default function reviewDetailPage({
  params,
  searchParams,
}: {
  params: { id: string; reviewId: string };
  searchParams: { lang: string; order: string };
}) {
  console.log(params);
  console.log(searchParams);
  return (
    <>
      <div>Review Detail Component: </div>
    </>
  );
}
