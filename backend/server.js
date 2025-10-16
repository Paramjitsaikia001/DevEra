import app from "./app.js";
const PORT=8000

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
  

