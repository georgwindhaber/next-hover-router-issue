export default async function Post({ params }: { params: { index: number } }) {
  return (
    <>
      <h1 className="text-center">Post {params.index}</h1>
      <p className="p-5 text-center">
        There is no back button, use your mobile device native way (swipe back
        most of the times)
      </p>
    </>
  );
}
