
import express from "express"
import textRoutes from "./routes/textRoutes"
import dotenv from "dotenv"

dotenv.config();

const app = express();


app.use(express.json());


app.use('/api', textRoutes);


const PORT = process.env.PORT ;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
