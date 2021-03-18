// @ts-ignore
import { parse } from "https://deno.land/std@0.90.0/encoding/csv.ts";

export function csv(
  input: string,
  options?: {
    columns?: boolean | string[];
    delimiter?: string;
  }
): Promise<any | undefined> {
  const parseOptions: Record<string, any> = {};
  if (options !== undefined) {
    if (options.columns === true) {
      parseOptions.skipFirstLine = true;
    }
    if (Array.isArray(options)) {
      parseOptions.columns = options.columns;
    }
    if (typeof options.delimiter === "string") {
      parseOptions.separator = options.delimiter;
    }
  }
  return parse(input, parseOptions);
}
