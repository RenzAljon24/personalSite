import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'w1isjfj2', // Ensure this matches the projectId in sanity.config.js
    dataset: 'production', // Ensure this matches the dataset in sanity.config.js
  }
});
