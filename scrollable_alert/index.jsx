// scrollable alert with callback
var scrollable_alert = function (mess, cb) {
  var mess, u;
  mess = mess || "";

  var p = new Window("dialog");
  p.orientation = 'column';
  p.margins = 5;
  p.spacing = 5;
  p.alignChildren = ['fill', 'fill'];
  
  p.add('edittext', u, mess, {name:'mess', multiline: true, readonly:true});
  p['mess'].preferredSize = [300,160];
  
  p.btngrp = p.add('group');
  p.btngrp.alignChildren = ['right', 'fill'];
  var btn_ok = p.btngrp.add('button', u, 'Ok', {name:'ok'});
  
  var show = p.show();
  if (show === 2) {
    return null
  }
  else {
    if (cb !== undefined && typeof cb == 'function') {
      return cb();
    }
  }
}
