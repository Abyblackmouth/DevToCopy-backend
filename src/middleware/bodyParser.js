import { json } from "express";
import BodyParserXml from "body-parser-xml";
import bodyParser from "body-parser";

BodyParserXml(bodyParser)

export const jsonParser = json({ limit: "500kb"})
export const xmlParser = bodyParser.xml()