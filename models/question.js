import mongoose from "mongoose";
const Schema = mongoose.Schema

const QuestionsSchema = Schema({
  name: {
    type: String,
    required:true
  },
  content: {
    type: String,
    required:true
  },
  isAnswered: {
    type:Boolean,
    default: false
  },
  link: {
    type: String,

  },
}, {timestamps: true}) // first obj defines what we create second is options obj we might want to add to body of question

export const Question = mongoose.model('Question', QuestionsSchema) //model from schema to appropriate format
//now that we have exported it, an instance of the mongoose model
