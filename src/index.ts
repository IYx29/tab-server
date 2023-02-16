import { app } from "./app";
import { connectDB } from "./db";


const port = process.env.PORT! || 3000;
console.log(process.env.dbURI);

app.listen(port, () => {
  console.log(`Express is listening at http://localhost:${port}`);
  connectDB();
});
