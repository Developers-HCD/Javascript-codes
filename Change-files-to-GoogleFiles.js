function sincroF(){
  var carpeta = DriveApp.getFolderById('id');
  var reporte = DriveApp.getFolderById('id');
  
  var archivos = carpeta.getFiles();
  var file ; 
  while(archivos.hasNext()){
    file = archivos.next();
    Logger.log(file)
    
    var name = file.getName()
    var partes = name.split(".");
    var extension = partes[partes.length-1]
    if(extension == "pdf"||extension == "PDF"||extension == "docx"||extension == "DOCX"){
      file.moveTo(reporte);
    }else{
      var excel = file   
      var resource = {
        title : excel.getName(),
        mimeType : MimeType.GOOGLE_SHEETS,
        parents: [{id : "id"}],
      }  
      Drive.Files.insert(resource, excel.getBlob());
      Drive.Files.remove(excel.getId())
    }
  }
  
}