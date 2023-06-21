//sheet copy range
//copyRange(spreadsheetID, "input", "AM5:AM52", "output", "B2");
function copyRange(spreadsheetID, sourceSheetName, sourceRange, destinationSheetName, destinationCell) {
  let spreadsheet = SpreadsheetApp.openById(spreadsheetID);
  let sourceSheet = spreadsheet.getSheetByName(sourceSheetName);
  let destinationSheet = spreadsheet.getSheetByName(destinationSheetName);
  let sourceData = sourceSheet.getRange(sourceRange).getValues();
  let destinationRange = destinationSheet.getRange(destinationCell);
  destinationRange.offset(0, 0, sourceData.length, sourceData[0].length).setValues(sourceData);
}
