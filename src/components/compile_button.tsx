import styles from "@/styles/CompileButton.module.scss";

export default function CompileButton({
  onCompile,
}: {
  onCompile: () => void;
}) {
  return (
    <div className={styles.compile}>
      <span className={styles.text} onClick={onCompile}>
        Compile !
      </span>
      <div className={styles.separator} />
      <div className={styles.selector}>
        <div className={styles.arrow} />
      </div>
    </div>
  );
}
