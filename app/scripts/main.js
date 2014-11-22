console.log('Hello world!');

$( function() {
    $("input").on("input", function() {
        var el = $(this);
        var target = "#" + el.attr('data-for');
        var value = el.val();
        $(target+" div").text(value);
    });

    $("#save").on("click", function(e) {
        e.preventDefault();
        console.log('clicked!');
        var el = $("#venn-diagram")[0];
        console.log(el);
        html2canvas(el,{
            allowTaint: true,
            onrendered: function(canvas) {
                console.log('rendered!', canvas);
                canvas.toBlob(function(blob) {
                    console.log('rendered! 2', blob);
                    saveAs(blob, "pretty image.png");
                });
            }
        });
    });
});
