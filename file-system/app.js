import { watch, open } from "fs/promises";

(async () => {
  const handler = await open("./command.txt");

  const watcher = watch("./command.txt");
  for await (const val of watcher) {
    if (val.eventType === "change") {
      const size = (await handler.stat()).size;

      //allocatin buffer in respective to file size
      const buffer = Buffer.alloc(size);
      const content = await handler.read(buffer, 0, buffer.byteLength, 2);
      console.log(buffer.toString());
    }
  }
  handler.close();
})();
