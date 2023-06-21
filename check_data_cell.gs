//check_data(spreadsheetID, sheetNAME, "A1", "hoge")
function check_data(spreadsheetID, sheetNAME, cell, key) {
  let data = getCellValue(spreadsheetID, sheetNAME, cell);
  if (data != key) { Logger.log(`${cell}セルが${key}ではありませんでした。${data}`); return false; }
  return true;
}
