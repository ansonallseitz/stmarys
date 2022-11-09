function listFolderContents() {
  var foldername = 'Final Logos'; // provide the name of Folder from which you want to get the list of files
  var ListOfFiles = 'ListOfFiles_' + foldername;
  
  var folders = DriveApp.getFoldersByName(foldername)
  var folder = folders.next();
  var contents = folder.getFiles();
  
  var ss = SpreadsheetApp.create(ListOfFiles);
  var sheet = ss.getActiveSheet();
  sheet.appendRow( ['name', 'link','sizeInMB'] );
  
  var var_file;
  var var_name;
  var var_link;
  var var_size;

  while(contents.hasNext()) {
    var_file = contents.next();
    var_name = var_file.getName();
    var_link = var_file.getUrl();
    var_size=var_file.getSize()/1024.0/1024.0;
    sheet.appendRow( [var_name, var_link,var_size] );     
  }  
};