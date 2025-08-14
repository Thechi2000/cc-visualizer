"use client";

import { compile } from "@/actions/compiler";
import { MermaidChart } from "@/components/chart";
import { useEffect, useRef, useState } from "react";
import styles from "./main.module.css";
import { Editor } from "@monaco-editor/react";

export default function Home() {
  const [graph, setGraph] = useState<string | null>(null);

  const editorRef = useRef<any>(null);

  useEffect(() => {
    compile("rtl", code).then(setGraph);
  }, []);

  return (
    <>
      <button
        className={styles.compileButton}
        onClick={() =>
          compile("rtl", editorRef.current!.getValue()).then(setGraph)
        }
      >
        Compile !
      </button>
      <div className={styles.main}>
        <Editor
          height="90vh"
          defaultLanguage="c"
          defaultValue={code}
          theme="vs-dark"
          onMount={(editor) => (editorRef.current = editor)}
        />
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
