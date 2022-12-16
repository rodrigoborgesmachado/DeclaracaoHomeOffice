function topo(){
	parent.scroll(0,0);
}

$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#ClinicaJonasGabriela']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
    });
})

function BuscarDocumento(Nome, CPF, curso){
    openLoader();

        var xhr = new XMLHttpRequest();
        
        var uri = curso == 'informatica' ? 'INFORMATICA' : 'MEIO_AMBIENTE';
        var dados = JSON.stringify({Nome, CPF, uri});

        xhr.open("POST", "http://declaracaohomeoffice.sunsalesystem.com.br/PHP/GetResultados.php");
        xhr.addEventListener("load", function() {
            if (xhr.status == 200) {
                var file = JSON.parse(xhr.responseText).Arquivo64;
                downloadURI(file, Nome + '.html');
            } else {
                alert('erro');
            }
            removeLoader();
        });

        xhr.send(dados);
}

function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}