function csv2sheet(spreadsheetID, sheetNAME, csvID) {
  //read_csv
  const csv = DriveApp.getFileById(csvID).getBlob().getDataAsString("utf-8");
  //
  if (csv) {
    //sheetid
    const sheetID = SpreadsheetApp.openById(spreadsheetID).getSheetByName(sheetNAME).getSheetId();
    //clear_sheet
    Sheets.Spreadsheets.batchUpdate({ requests: [{ updateCells: { range: { sheetId: sheetID, }, fields: "userEnteredValue,userEnteredFormat", } }] }, spreadsheetID)
    //sleep
    Utilities.sleep(3000);
    //update_sheet
    Sheets.Spreadsheets.batchUpdate({ requests: [{ pasteData: { data: csv, coordinate: { sheetId: sheetID, 'rowIndex': 0, 'columnIndex': 0 }, delimiter: ",", type: 'PASTE_VALUES', } }] }, spreadsheetID)
  }
  //
}
