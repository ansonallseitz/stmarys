function listFolderContents() {
    var foldername = 'Final Logos'; // provide the name of Folder from which you want to get the list of files
    var ListOfFiles = 'ListOfFiles_' + foldername;
  
    var ss = SpreadsheetApp.create(ListOfFiles);
    var sheet = ss.getActiveSheet();
    sheet.appendRow( ['name', 'link','sizeInMB'] );
  
    function addFolder(folder) {
      var contents = folder.getFiles();
  
      while(contents.hasNext()) {
        var var_file = contents.next();
        var var_name = var_file.getName();
        var var_link = var_file.getUrl();
        var var_size=var_file.getSize()/1024.0/1024.0;
        sheet.appendRow( [var_name, var_link,var_size] );
      }
  
      var subfolders = folder.getFolders();
  
      while (subfolders.hasNext()) {
        var subfolder = subfolders.next();
        addFolder(subfolder);
      }
    }
  
    var folders = DriveApp.getFoldersByName(foldername)
    var folder = folders.next();
  
    addFolder(folder);
  };