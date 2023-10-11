import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas";

const config = defineConfig({
  projectId: "mdslvvw4",
  dataset: "production",
  title: "Next Step",
  apiVersion: "2023-10-09",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
