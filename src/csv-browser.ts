import csvParse from "csv-parse/lib/browser";

export function csv(
  input: string,
  options?: {
    columns?: boolean | string[];
    delimiter?: string;
  }
): Promise<any | undefined> {
  return new Promise((resolve, reject) => {
    const cb: csvParse.Callback = (err, output) => {
      if (err !== undefined) {
        reject(err);
      } else {
        resolve(output);
      }
    };
    csvParse(input, options, cb);
  });
}
