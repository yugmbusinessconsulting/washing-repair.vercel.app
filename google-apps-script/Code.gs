// ============================================================
// City Appliance — Google Apps Script for Contact Form
// ============================================================
// SETUP STEPS:
//  1. Go to https://sheets.new  →  create a new Google Sheet
//  2. Rename Sheet1 tab to "Leads"
//  3. Add these headers in row 1 (columns A–E):
//     Timestamp | Name | Phone | Brand | Issue
//  4. Go to Extensions → Apps Script
//  5. Delete any existing code and paste this entire file
//  6. Click Save (Ctrl+S)
//  7. Click Deploy → New deployment
//     - Type: Web App
//     - Execute as: Me
//     - Who has access: Anyone
//  8. Click Deploy → Authorize (sign in with your Google account)
//  9. Copy the Web App URL
// 10. In your Next.js project, create a .env.local file and add:
//     NEXT_PUBLIC_APPS_SCRIPT_URL=<paste your Web App URL here>
// ============================================================

const SHEET_NAME = "Leads";

function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // If sheet is empty, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Phone", "Brand", "Issue"]);
    }

    const params = e.parameter;

    sheet.appendRow([
      params.timestamp || new Date().toLocaleString("en-IN"),
      params.name    || "",
      params.phone   || "",
      params.brand   || "",
      params.issue   || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
