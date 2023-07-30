import styles from "./post.module.css";

export default async function Post({ params }: { params: { index: number } }) {
  return (
    <>
      <h1 className={styles.center}>Post {params.index}</h1>
      <p className={styles.center}>
        There is no back button, use your mobile device native
      </p>
    </>
  );
}
