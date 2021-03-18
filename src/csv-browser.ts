import csvParse from "csv-parse/lib/browser";

export function csv(
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
      csvParse(input, options, cb);
    } else {
      csvParse(input, cb);
    }
  });
}
