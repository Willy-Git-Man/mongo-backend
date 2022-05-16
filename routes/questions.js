import express from 'express';
import { Question } from '../models/question.js';
const router = express.Router(); //invoke the Router function from express
console.log(router)

router.get('/', (__req, res) => {
  Question.find().then(questions => res.json(questions)).catch(err => res.status(404).send(err))
})

router.post('/', (req,res) => {
  const newQuestion = new Question({
    name: req.body.name,
    content: req.body.content,
    link: req.body.link
  })
  newQuestion.save()
  .then(question => res.json(question))
  .catch(err => res.status(422).json(err))
})

router.delete('/:question_id', (req,res) => {
  const id = req.params.question_id //params a kv pair inside req
  Question.findOneAndDelete({__id: id })
  .then(question => res.json({__id: question.__id})) //__id is what we will call it on the backend
    .catch(err => res.status(404).json(err))
})

console.log(router.stack)

export const questions = router;
