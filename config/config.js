module.exports = {
  // Your Github Access Token
  GITHUB_API_TOKEN: process.env.GITHUB_GANTT_TOKEN,
  
  // The name of the Github organization
  GITHUB_ORG_NAME: process.env.GITHUB_GANTT_ORG_NAME,
  // The repo name in the Github organization
  GITHUB_REPO_NAME: process.env.GITHUB_GANTT_REPO_NAME,
  
  // Configuration for the labels in Github issues to search for
  START_DATE_STRING: "#### 🗓 Start Date:",
  DUE_DATE_STRING: "#### 🗓 Expected Date:",
  LABEL_STRING: "#### 🏷 Label:",
  PROGRESS_STRING: "#### 📈 Progress (0-1):",
  
  // Configuration to use Realm Mobile Platform
  RMP_ADMIN_TOKEN: "",
  RMP_SYNC_URL: "", // realm://127.0.0.1:9080/github-gantt
}
