function getCSV(spreadsheet,sheetname,url) {
  // get CSV
  var sheet = spreadsheet.getSheetByName(sheetname);
  // get
  var blob = UrlFetchApp.fetch(url).getBlob();
  var data = blob.getDataAsString();
  // conv csv
  var values = Utilities.parseCsv(data);
  // clear csv
  sheet.clear();
  // set csv
  sheet.getRange(1,1,values.length,values[0].length).setValues(values);
  //
  return spreadsheet;
}
