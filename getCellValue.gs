//cell="A1"
function getCellValue(spreadsheetID, sheetName, cell) {
  let spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  let sheet = spreadsheet.getSheetByName(sheetName);
  let value = sheet.getRange(cell).getValue();
  return value;
}
