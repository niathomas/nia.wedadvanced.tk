$(."crystal").each(function() {
    var newrotation = "rotate(" + rotation + "deg)";
    $(this).css("transform",newrotation);
    rotation += 180/$("crystal").length;
})