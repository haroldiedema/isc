(function(w) {

    var System = {};
    /**
     * @include("hoi.js", {export: "System.Query", module: true})
     * @include("foobar.js")
     **/


    w.this_is_a_logn_name = function () {
        System.Query('test');
    }

}(window));
