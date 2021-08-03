{"version":3,"sources":["abstract_call.js"],"names":["BX","namespace","Call","AbstractCall","params","self","this","id","instanceId","parentId","direction","ready","userId","Engine","getInstance","getCurrentUserId","initiatorId","users","type","isArray","filter","associatedEntity","isPlainObject","videoEnabled","videoHd","cameraId","microphoneId","muted","logToken","CallEngine","getLogService","logger","Logger","localStreams","main","screen","eventListeners","events","initEventListeners","Object","defineProperty","get","PlainCall","Provider","Plain","VoximplantCall","prototype","eventName","addEventListener","listener","isFunction","push","removeEventListener","indexOf","listenerIndex","splice","runCallback","eventFields","length","call","i","err","console","error","log","getLocalStream","tag","setLocalStream","mediaStream","isVideoEnabled","isAnyoneParticipating","Error","__onPullEvent","command","inviteUsers","cancel","answer","decline","code","reason","hangup","text","Util","getLogMessage","apply","arguments","desktop","message","substr","debugFlag","a","getTimeForLog","concat","Array","slice","MessengerDebug","addLog","destroy","Event","onDestroy"],"mappings":"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","file":"abstract_call.map.js"}