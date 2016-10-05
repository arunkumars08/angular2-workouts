var Calendar = (function () {
    var arr_days = new Array(42);
    var fn = {
        _init: function () {
            fn._generateCalendar(11, 2016);
        },
        _generateCalendar: function (month, year) {
            var start = new Date(year, month + 1, 0);
            var firstDay = start.getDay();
            var total = start.getDate();
            console.log(firstDay, total);
            for(var i = firstDay, day = 1; day <= total; ++ i, ++ day) {
                this.arr_days[i] = day;
            }
        },
        _drawCalendar: function () {
            
        }
    };
    var api = {
        init: function () {
            return fn._init.apply(this, arguments);
        }
    };
    return api;
})();