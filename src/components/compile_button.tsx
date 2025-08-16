import styles from "@/styles/CompileButton.module.scss";

export default function CompileButton({
  onCompile,
}: {
  onCompile: () => void;
}) {
  return (
    <div className={styles.compile} onClick={onCompile}>
      Compile !
    </div>
  );
}
