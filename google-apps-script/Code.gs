/**
 * Google Apps Script Web App — receives lead JSON from the website and
 * appends a row to the matching sheet tab (creating the tab + header
 * row automatically the first time it's used).
 *
 * SETUP:
 * 1. Create (or open) the Google Sheet where you want leads to land.
 * 2. In the Sheet, go to Extensions > Apps Script.
 * 3. Delete any starter code and paste in this entire file.
 * 4. Click Deploy > New deployment.
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone"
 * 5. Click Deploy, authorize the permissions it asks for.
 * 6. Copy the "Web app URL" (ends in /exec) — this is your
 *    GOOGLE_SHEETS_WEBHOOK_URL env var on Vercel.
 *
 * Each form submission creates/uses a tab named after the "sheet" field
 * sent from the website (e.g. "Contact", "Enquiry", "Newsletter").
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheetName = data.sheet || "Leads";
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(sheetName);

    // Build header + row from the payload keys, excluding "sheet"
    const keys = Object.keys(data).filter((k) => k !== "sheet");

    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      sheet.appendRow(keys.map(capitalize));
      sheet.setFrozenRows(1);
    }

    // If headers don't match (new fields appeared), rebuild header row
    const existingHeaders = sheet
      .getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
      .getValues()[0]
      .filter(String);
    const missing = keys.filter((k) => !existingHeaders.includes(capitalize(k)));
    if (missing.length > 0 && existingHeaders.length > 0) {
      const newHeaders = existingHeaders.concat(missing.map(capitalize));
      sheet.getRange(1, 1, 1, newHeaders.length).setValues([newHeaders]);
    }

    const headerRow = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];
    const row = headerRow.map((h) => {
      const key = keys.find((k) => capitalize(k) === h);
      return key ? data[key] : "";
    });

    sheet.appendRow(row);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/([A-Z])/g, " $1");
}
