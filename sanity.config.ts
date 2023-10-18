import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./schemas";
import { codeInput } from "@sanity/code-input";

const config = defineConfig({
  projectId: "mdslvvw4",
  dataset: "production",
  title: "Next Step",
  apiVersion: "2023-10-09",
  useCdn: true,
  basePath: "/admin",
  plugins: [deskTool(), codeInput(), visionTool()],
  schema: { types: schemas },
});

export default config;
