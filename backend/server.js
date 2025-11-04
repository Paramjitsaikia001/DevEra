import app from "./app.js";
import dotenv from "dotenv";
const PORT=8000
dotenv.config();

import connectDB from "./db/index.js";

connectDB()
.then(
  ()=>{

    app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
  }
).catch(
  (err)=>{

    console.log('mongoDB connection failed',err);
  }
)
  

