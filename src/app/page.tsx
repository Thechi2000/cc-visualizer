"use client";

import { compile } from "@/actions/compiler";
import { MermaidChart } from "@/components/chart";
import { useEffect, useRef, useState } from "react";
import styles from "./main.module.css";

export default function Home() {
  const [graph, setGraph] = useState<string | null>(null);

  useEffect(() => {
    compile("rtl", code).then(setGraph);
  }, []);

  const area = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <button
        className={styles.compileButton}
        onClick={() => compile("rtl", area.current?.value!).then(setGraph)}
      >
        Compile !
      </button>
      <div className={styles.main}>
        <textarea className={styles.editor} ref={area} defaultValue={code} />
        <div className={styles.chart}>
          {graph ? <MermaidChart chart={graph} /> : <></>}
        </div>
      </div>
    </>
  );
}

const code = `int main() {
  int a = 5;
  int b = 2;
  int c = 0;

  while (c < a) {
    c += b;
  }

  do {
    c += b;
  } while (c < a);

  if (a > c) {
    a = b;
  } else {
    a = c;
  }

  return c;
}`;
