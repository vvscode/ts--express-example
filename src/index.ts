import app from './app';
import mongoose from "mongoose";

const port = 8001;


// НЕ СОХРАНЯЕМ ПАРОЛЬ НА GITHUB!
const url =
  "mongodb+srv://test-user:test@cluster0.ijexn.mongodb.net/test?retryWrites=true&w=majority";

console.log("connecting to", url);

app.listen(port, () => {
  mongoose
  .connect(url)
  .then((result) => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

  console.log(`Example app listening at http://localhost:${port}`);
});
