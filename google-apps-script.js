// ============================================================
// City Appliance — Google Apps Script (Sheets Webhook)
// ============================================================
// HOW TO DEPLOY:
// 1. Go to https://script.google.com and create a new project
// 2. Paste this entire file into the editor (replace the default code)
// 3. Replace SHEET_ID below with your Google Sheet's ID
//    (it's in the Sheet URL: docs.google.com/spreadsheets/d/YOUR_ID_HERE/edit)
// 4. Click "Deploy" → "New deployment"
//    - Type: Web app
//    - Execute as: Me
//    - Who has access: Anyone
// 5. Click "Deploy" and copy the Web App URL
// 6. Paste that URL into your .env.local as GOOGLE_APPS_SCRIPT_URL
// ============================================================

const SHEET_ID = "YOUR_GOOGLE_SHEET_ID_HERE"; // ← Replace this
const SHEET_NAME = "Leads"; // The tab name in your Sheet

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet + headers if it doesn't exist yet
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Submitted At",
        "Name",
        "Phone",
        "Brand",
        "Issue Description",
      ]);

      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setBackground("#0e7490"); // cyan-700
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the new lead
    sheet.appendRow([
      data.submittedAt || new Date().toLocaleString("en-IN"),
      data.name || "",
      data.phone || "",
      data.brand || "",
      data.issue || "—",
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 5);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "ok" })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test this function from the editor (Run → doGet)
function doGet() {
  return ContentService.createTextOutput("City Appliance Webhook is live ✅");
}
