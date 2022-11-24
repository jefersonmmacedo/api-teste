import { Mongoose } from "mongoose";

Mongoose.connect(
  "mongodb+srv://suachave:211902fluminense@suachave.ytkq5it.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("MongoDB Conectado com sucesso!");
    }
  }
);

// Teste

export { Mongoose };
