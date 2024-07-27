const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "videotestimonialtest-e4e99849889a.json",
  scopes: ["https://www.googleapis.com/auth/drive.file"],
});

async function listFiles() {
  const driveService = google.drive({ version: "v3", auth });
  const res = await driveService.files.list({
    q: "'1vQvQYb3pyO8RHvzorSI7AyxWlR9_KWkB' in parents",
    fields: "files(id, name)",
  });
  console.log("Files in folder:", res.data.files);
}

listFiles().catch(console.error);
