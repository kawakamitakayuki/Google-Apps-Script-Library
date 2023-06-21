//file check
function checkFileExists(fileId) {
  try {
    let file = DriveApp.getFileById(fileId);
    return true;
  } catch (error) {
    Logger.log('Err: ' + error);
    return false;
  }
}
