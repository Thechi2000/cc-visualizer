import { MermaidChart } from "@/components/chart";

export default function Home() {
  return <MermaidChart chart={chart} />;
}

const chart = `flowchart
  0["Start"]
  1["i#a <- 5"]
  2["i#b <- 2"]
  3["i#c <- 0"]
  4["Join"]
  5["r#0 <- i#c < i#a"]
  6["r#1 <- r#0 == 0"]
  7["Fork r#1"]
  11["Join"]
  12["r#5 <- i#c + i#b"]
  13["i#c <- r#5"]
  14["r#6 <- i#c < i#a"]
  15["Fork r#6"]
  16["r#7 <- i#a > i#c"]
  17["r#8 <- r#7 == 0"]
  18["Fork r#8"]
  21["i#a <- i#c"]
  22["Join"]
  23["Ret i#c"]
  19["i#a <- i#b"]
  8["r#3 <- i#c + i#b"]
  9["i#c <- r#3"]
  0 --> 1
  1 --> 2
  2 --> 3
  3 --> 4
  4 --> 5
  5 --> 6
  6 --> 7
  7 --> 8
  7 --> 11
  11 --> 12
  12 --> 13
  13 --> 14
  14 --> 15
  15 --> 16
  15 --> 11
  16 --> 17
  17 --> 18
  18 --> 19
  18 --> 21
  21 --> 22
  22 --> 23
  19 --> 22
  8 --> 9
  9 --> 4
  4@{ shape: diam}
  7@{ shape: diam}
  11@{ shape: diam}
  15@{ shape: diam}
  18@{ shape: diam}
  22@{ shape: diam}
`;
