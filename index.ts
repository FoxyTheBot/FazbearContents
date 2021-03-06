import { app, express } from './server/server';
const port = 8000;

app.use(express.static("public"));
app.use("/", require("./routes/Other"));
app.use("/", require("./routes/Memes"));
app.use("/", require("./routes/Backgrounds"));

app.listen(port, () => {
    console.log(`[SERVER] Server is running on port ${port}`);
});
