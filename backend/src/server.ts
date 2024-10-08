import { connectToDatabase } from "./db/connection";
import app from "./app";
import { Request, Response } from "express";

const PORT = process.env.PORT || 3000;

// Added on cron-job to ping the server every 10 mins to avoid the server sleep on render for inactivity
app.get("/server-alive", (req: Request, res: Response) => {
  try {
    res.status(200).send("Test route working");
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

connectToDatabase()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server is running on port ${PORT} & Connected To MongoDB`)
    );
  })
  .catch((err: unknown) => console.log(err));
