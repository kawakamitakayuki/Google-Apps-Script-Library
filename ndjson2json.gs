function ndjson2json(ndjsonID) {
  return JSON.parse("[" + DriveApp.getFileById(ndjsonID).getBlob().getDataAsString("utf-8").replace(/\n/g,",").replace(/,$/,"") + "]");
}
