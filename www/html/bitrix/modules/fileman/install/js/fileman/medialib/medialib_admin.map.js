{"version":3,"sources":["medialib_admin.js"],"names":["window","cnvConstr","cnvEdtr","BX","UploaderTemplateThumbnails","params","settings","this","id","dialogName","vars","filesCountForUpload","i","ii","hasOwnProperty","uploader","Uploader","getInstance","init","prototype","addClass","_onItemIsAdded","delegate","onItemIsAdded","_onFileIsAppended","onFileIsAppended","addCustomEvent","start","done","terminate","onChange","_onUploadStart","onUploadStart","_onUploadProgress","onUploadProgress","_onUploadDone","onUploadDone","_onUploadError","onUploadError","_onUploadRestore","onUploadRestore","_onFileHasPreview","onFileHasPreview","bind","submit","stop","userOptions","save","removeClass","fileFields","description","item","__progressBarWidth","ph","getPH","width","percent","progress","adjust","style","Math","max","ceil","file","queue","defer_proxy","deleteFile","innerHTML","errorThumb","replace","error","pIndex","itUploaded","length","filesCount","stream","data","itFailed","d","report","uploading","CID","reload","items","f","removeCustomEvent","img","CanvasEditor","remove","ext","hasChildNodes","join","clickFile","__onTurnCanvas","image","canvas","context","Canvas","drawImage","copy","height","rotate","applyFile","cnv","UploaderFileCnvConstr","getCanvas","props","push","unbindAll"],"mappings":"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","file":"medialib_admin.map.js"}