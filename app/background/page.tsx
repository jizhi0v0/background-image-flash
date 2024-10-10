import Image from "next/image";
import ViewSource from "../../components/view-source";
import mountains from "../../public/mountains.jpg";
import styles from "../../styles.module.css";

const BackgroundPage = () => (
  <div>
    <ViewSource pathname="app/background/page.tsx" />
    <div className={styles.bgWrap}>
      <Image
        alt="Mountains"
        src={mountains}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
    <p className={styles.bgText}>
      Image Component
      <br />
      as a Background
    </p>
  </div>
);

export default BackgroundPage;
