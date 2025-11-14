import dotenv from "dotenv";


import {app} from "./app.js";
const PORT=8000

dotenv.config();
import connectDB from "./db/index.js";


// console.log(process.env.CORS_ORIGIN);
// console.log(process.env.EMAIL_SERVICE);

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
  

