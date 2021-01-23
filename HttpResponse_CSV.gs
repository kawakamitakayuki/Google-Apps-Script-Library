
function response_csv(csvString) {
  var csvFileName = 'data.csv';
  var res = ContentService.createTextOutput();
  res.setMimeType(ContentService.MimeType.CSV);
  res.setContent(csvString);
  res.downloadAsFile(csvFileName);
  return res;
}
