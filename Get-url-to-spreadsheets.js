function resoluciones () {  
  var salida = SpreadsheetApp.openByUrl('url')
  var carpeta = DriveApp.getFolderById('id');  
  var archivos = carpeta.getFiles();  
  salida = salida.getActiveSheet();
  var name_parts  
  var name = ""
  var file; 
  var row;
  var url;
  var number= 0;
  
  while(archivos.hasNext()){
    file = archivos.next();
    name = file.getName();
    url = file.getUrl();

    var newName = file.getName().replace("oldName_1","");  
    newName = newName.replace("oldName_2","");  
    
    if (isNaN(parseInt(newName))){
      Logger.log(newName)
    }else{
      row = parseInt(newName) + 1
      //Logger.log(name_parts[1]);
      Logger.log(row);
      salida.getRange(row,16).setValue(url) 
    }  
    number = number + 1;
  }
Logger.log(number)
}