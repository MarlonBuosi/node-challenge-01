import axios from 'axios';
import { parse } from 'csv-parse';

const fs = import("fs");
const csv = new URL("./reader.csv", import.meta.url)

const postTasks = async () => {
  const parser = (await fs).createReadStream(csv).pipe(
    parse({
      fromLine: 2,
    })
  );
  for await (const record of parser) {
    const [title, description] = record
    console.log(title, description)

    axios.post('http://localhost:3333/tasks', {
      title,
      description
    })
  }
};

postTasks()
