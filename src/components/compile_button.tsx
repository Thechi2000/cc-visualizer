import { CompilationStage } from "@/actions/compiler";
import styles from "@/styles/CompileButton.module.scss";
import { Dispatch, SetStateAction, useState } from "react";

const STAGE_DISPLAY_STRINGS: { [key in CompilationStage]: string } = {
  rtl: "RTL",
  ssa: "SSA",
};

export default function CompileButton({
  onCompile,
  compilationStage,
  setCompilationStage,
}: {
  onCompile: () => void;
  compilationStage: CompilationStage;
  setCompilationStage: Dispatch<SetStateAction<CompilationStage>>;
}) {
  const [opened, setOpened] = useState(false);

  return (
    <div className={styles.compile}>
      <div className={styles.menu + (opened ? " " + styles.opened : "")}>
        {Object.entries(STAGE_DISPLAY_STRINGS).map((e) => (
          <div
            key={e[0]}
            onClick={() => setCompilationStage(e[0] as CompilationStage)}
          >
            <input
              readOnly
              type="checkbox"
              checked={compilationStage === e[0]}
            />
            {e[1]}
          </div>
        ))}
      </div>

      <div className={styles.button}>
        <span className={styles.text} onClick={onCompile}>
          Compile !
        </span>
        <div className={styles.separator} />
        <div className={styles.selector} onClick={() => setOpened((v) => !v)}>
          <div className={styles.arrow} />
        </div>
      </div>
    </div>
  );
}
