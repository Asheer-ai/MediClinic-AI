import express from 'express'
import { chatWithAI } from '../controllers/googleAIController.js';

const Router=express.Router();

Router.post('/chat',chatWithAI)

export default Router;