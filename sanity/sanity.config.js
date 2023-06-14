import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structure, defaultDocumentNode } from "./desk/deskStructure";
import schemas from "./schemas/schema";

export default defineConfig({
  title: `XXX ToolKit`,
  projectId: `gi242c7p`,
  dataset: `production`,
  plugins: [
    deskTool({
      structure,
      defaultDocumentNode
    })
  ],
  schema: {
    types: schemas
  }
});
