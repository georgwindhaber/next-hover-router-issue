import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Explanation</h1>
      <h4 className={styles.subtitle}>This is a demo of a bug in Next.js.</h4>
      <p>
        What happens: When you click on a image, which is wrapped in a link,
        brings you to a page. Now, on mobile, when you click the back button{" "}
        <span className="italics">and then scroll on the images</span>, you get
        redirectet <span className="italics">back</span> to the initial clicked
        post.
      </p>
      <div className={styles.grid}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link className={styles.link} href={`/posts/${i}`} key={i}>
              <Image
                key={i}
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
              />
              ;
            </Link>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link className={styles.link} href={`/posts/${i}`} key={i}>
              <Image
                key={i}
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
              />
            </Link>
          );
        })}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
          return (
            <Link className={styles.link} href={`/posts/${i}`} key={i}>
              <Image
                key={i}
                src={`/imgs/${i}.jpg`}
                fill
                sizes="30vw"
                alt={"img" + i}
              />
              ;
            </Link>
          );
        })}
      </div>
    </main>
  );
}
