function Util() { };

//#region Requisição Assíncrona
Util.goAjax = function (metodo, src, load, param, ok) {
    var options = {
        type: "POST",
        url: src,
        data: param,
        cache: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (msg) { ok(msg, param); },
        error: function (ts) {
            if (ts.responseText !== undefined) {
                if (ts.responseText !== "")
                    $(".erro").html("Erro!!" + ts.responseText);
                load.attr("src", "/Content/Img/error.png");
            }
            else {
                $(".erro").html("Erro na requisição - tente novamente!!");
                load.attr("src", "/Content/Img/error.png");
            }
        },
        timeout: 30000
    };

    $.ajax(options);
};

Util.preparaURLController = function (metodo, controller) {
    var protocolo = location.protocol;
    var server = location.hostname;
    var port = document.location.port;
    var url;
    url = protocolo + "//" + server + ":" + port + vBase + "" + controller + "/" + metodo;

    console.log("Caminho Completo:" + url);

    return url;
};