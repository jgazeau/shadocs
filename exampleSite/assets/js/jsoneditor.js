// Function to run additionnal process after standard JSON Schema validation in jsoneditor
window.examplePostAnalyzeFunction = function examplePostAnalyzeFunction(schema, json) {
  return [{path: 'root.dummy', message: 'A dummy error'}]
}
// Function to run additionnal process after standard JSON process in jsoneditor
window.examplePostProcessFunction = function examplePostProcessFunction(schema, json) {
  return 'An example post process JSON'
}
// Function to define filename to download
window.exampleFilenameToDownloadFunction = function exampleFilenameToDownloadFunction(schema, json) {
  return 'exampleFile.json'
}
