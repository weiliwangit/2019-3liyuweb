
require('pages/common/logo')

require('pages/common/footer')
var _util = require('util')

require('./index.css')

$(function(){
    var type = _util.getParamFromUrl('type') || 'default'
    $('.'+type).show()
})