$(document).ready(function() {
    // initiate MDC drawer
    const drawer = new mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

    // initiate MDC top app bar
    const mdc_top_app_bar = new mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('.mdc-top-app-bar'));
    // mdc_top_app_bar.setScrollTarget(document.getElementById('main-content'));
    mdc_top_app_bar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
    });

    // initiate MDC items
    mdc.autoInit();

    // get current URL with no forward slash at the end and no domain
    var drawer_item_link_query_selector = ".mdc-list-item[href='" + window.location.pathname;
    if (drawer_item_link_query_selector.substring(drawer_item_link_query_selector.length - 1) == "/") {
        drawer_item_link_query_selector = drawer_item_link_query_selector.substring(0,drawer_item_link_query_selector.length - 1);
    }

    // give 'selected' styling to correct item on navbar
    $(drawer_item_link_query_selector + "']").addClass("mdc-list-item--activated");
    $(drawer_item_link_query_selector + "']").attr("aria-selected", "true");
    $(drawer_item_link_query_selector + "/']").addClass("mdc-list-item--activated");
    $(drawer_item_link_query_selector + "/']").attr("aria-selected", "true");
    $(drawer_item_link_query_selector + "/index.html']").addClass("mdc-list-item--activated");
    $(drawer_item_link_query_selector + "/index.html']").attr("aria-selected", "true");
    
    // include cookie notice
    if(Cookies.get("demo.mgrove.uk-cookies-accepted") != "true") {
        $("#cookies").show();
        $("#cookies").animate({bottom: "0px"}, 1000);
        $(".source-code-link").animate({bottom: "100px"}, 1000);
        $("#close-cookies").click(function(){
            event.preventDefault();
            $("#cookies").animate({bottom: "-100px"}, 1000);
            setTimeout(function(){$("#cookies").hide()},1000);
            $(".source-code-link").animate({bottom: "15px"}, 1000);
            Cookies.set("demo.mgrove.uk-cookies-accepted", "true", {expires: 30});
        });
    }
});
