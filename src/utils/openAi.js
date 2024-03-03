import OpenAI from "openai";
// import { OPENAI_KEY } from "./Constant";
// const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});

export default openai;
