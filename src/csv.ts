import csvParse from "csv-parse";

export function csv(
  parse: typeof csvParse,
  input: string,
  options?: csvParse.Options
): Promise<any | undefined> {
  return new Promise((resolve, reject) => {
    const cb: csvParse.Callback = (err, output) => {
      if (err !== undefined) {
        reject(err);
      } else {
        resolve(output);
      }
    };
    if (options !== undefined) {
      parse(input, options, cb);
    } else {
      parse(input, cb);
    }
  });
}
