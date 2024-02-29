import OpenAI from "openai";
// import { OPENAI_KEY } from "./Constant";
// const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAPI_KEY,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
