"use client";

import { compile } from "@/actions/compiler";
import { MermaidChart } from "@/components/chart";
import { useEffect, useRef, useState } from "react";
import styles from "./main.module.scss";
import { Editor } from "@monaco-editor/react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

export default function Home() {
  const [graph, setGraph] = useState<string | null>(null);

  const editorRef = useRef<any>(null);

  const refreshGraph = () => {
    compile("rtl", editorRef.current!.getValue()).then(setGraph);
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("keydown", (event) => {
        if (event.ctrlKey && event.key === "s") {
          refreshGraph();
          event.preventDefault();
          event.stopPropagation();
        }
      });
    }
  }, []);

  return (
    <>
      <div className={styles.main}>
        {/* <h1>
            CC Visualizer
        </h1> */}
        <div className={styles.editor}>
          <button className={styles.compile} onClick={refreshGraph}>
            Compile !
          </button>
          <Editor
            defaultLanguage="c"
            defaultValue={code}
            theme="vs-dark"
            onMount={(editor) => {
              editorRef.current = editor;
              refreshGraph();
            }}
          />
        </div>
        <TransformWrapper>
          <TransformComponent wrapperClass={styles.chart}>
            {graph ? <MermaidChart chart={graph} /> : <></>}
          </TransformComponent>
        </TransformWrapper>
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
