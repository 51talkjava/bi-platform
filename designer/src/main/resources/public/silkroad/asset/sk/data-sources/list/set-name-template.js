define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.text,f=b.name,g="";return g+='<div class="set-report-name t-c j-set-datasource-group-name">\r\n    <div class="text">\r\n        ',g+=d(e),g+='\r\n    </div>\r\n    <div class="form-common-text form-common-text-230">\r\n        <input type="text" class="j-data-sources-group-name" placeholder="" value="',g+=d(f),g+='"/>\r\n        <span class="form-common-text-validation hide j-validation"></span>\r\n    </div>\r\n</div>'}return{render:b}});