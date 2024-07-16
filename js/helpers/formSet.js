
export function formSet() {
    $.fn.setData = function (data) {
        if (!this.is('form'))
            return false;
    
        let frm = this;
        frm.trigger('reset');
    
        $.each(data, function (key, value) {
            let node = frm.find([name="${key}"]);
            if (node.length > 1) {
                if (node.attr('type') == 'radio') {
                    node.prop('checked', false).filter([value="${value}"]).prop('checked', true);
                } else if (node.attr('type') == 'checkbox' && Array.isArray(value)) {
                    node.prop('checked', false);
                    value.forEach(function(value) {
                        node.filter([value="${value}"]).prop('checked', true);
                    })
                }
            } else if (node.attr('type') == 'checkbox')
                node.prop('checked', typeof value == 'boolean' ? value : value == 'on');
            else
                node.val(value);
        });
    
        return true;
    }
}