import express from 'express'; //non named export not in obj
import { questions } from './routes/questions.js'; //named exports is insdie obj

const app = express();
//goes into express node module and grabs from index.js which here is just '/lib/express'
app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('hello world test')
// }) // test route

app.use('/api/questions',questions)

const port = process.env.PORT || 5001; // run the port from env or 5001

app.listen(port, () => console.log(`Server is listening on port ${port}`))
