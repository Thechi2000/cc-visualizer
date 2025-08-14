"use client";

import { compile } from "@/actions/compiler";
import { MermaidChart } from "@/components/chart";
import { useEffect, useState } from "react";

export default function Home() {
  const [graph, setGraph] = useState<string | null>(null);

  useEffect(() => {
    compile("rtl", code).then(setGraph);
  }, []);

  return graph ? <MermaidChart chart={graph} /> : <></>;
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
