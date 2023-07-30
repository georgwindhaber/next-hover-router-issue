import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="text-6xl md:text-9xl font-bold p-5 text-center">
        Explanation
      </h1>
      <h4 className="text-2x text-center">
        This is a demo of a bug in Next.js.
      </h4>
      <p className="p-5">
        What happens: When you click on a image, which is wrapped in a link,
        brings you to a page. Now, on mobile, when you click the back button{" "}
        <span className="italic">and then scroll on the images</span>, you get
        redirectet <span className="italic">back</span> to the initial clicked
        post.
      </p>
      <div className="grid grid-cols-3 gap-5 p-5">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link
              className="relative aspect-square"
              href={`/posts/${i}`}
              key={i}
            >
              <Image
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
                className="rounded-lg object-contain"
              />
            </Link>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link
              className="relative aspect-square"
              href={`/posts/${i}`}
              key={i}
            >
              <Image
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
                className="rounded-lg object-contain"
              />
            </Link>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link
              className="relative aspect-square"
              href={`/posts/${i}`}
              key={i}
            >
              <Image
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
                className="rounded-lg object-contain"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
