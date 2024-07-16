
export function formJsonGet() {

    FormData.prototype.toJSON = () => ___fd2JSON(this);
    
    $.fn.toJSON = function () {
        if (!this.is('form'))
            return undefined;
    
        return ___fd2JSON(new FormData(this.get(0)));
    }
    
    function ___fd2JSON(data) {
        let object = {};
        data.forEach((value, key) => {
            if (!Reflect.has(object, key)) {
                if (['true', 'false'].includes(value)) value = value == 'true' ? true : false;
                if ('undefined' == value) value = undefined;
                object[key] = value;
                return;
            }
            if (!Array.isArray(object[key])) {
                object[key] = [object[key]];
            }
            object[key].push(value);
        });
        return object;
    }
}
