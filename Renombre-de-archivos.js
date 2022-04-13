function newMonthFunction2() {
  var folder = DriveApp.getFolderById('id');
    var contents = folder.getFiles();    
    
    while (contents.hasNext()) {     
      var file = DriveApp.getFileById(contents.next().getId());    
       
      var newName = file.getName().replace("oldName","newName");    
      file.setName(newName);
      console.log(newName);
    }
}