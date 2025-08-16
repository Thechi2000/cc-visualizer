"use server";

import { execSync } from "node:child_process";
import { assert } from "node:console";
import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

export type CompilationStage = "rtl" | "ssa";

export async function compile(
  stage: CompilationStage,
  code: string
): Promise<string> {
  assert(["rtl", "ssa"].indexOf(stage) !== -1);

  // Create temporary directory.
  const dir = await fs.mkdtemp(join(tmpdir(), "ccviz-"));

  // Create input file.
  const inputPath = join(dir, "input.c");
  await fs.writeFile(inputPath, code);

  // Run compiler.
  const cp = execSync(`./compiler ${stage} -o mermaid ${inputPath}`);

  // Cleanup temporary directory.
  await fs.rm(dir, { recursive: true });

  return cp.toString();
}
