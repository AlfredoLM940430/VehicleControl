
export function ajaxConfig() {
    $.ajaxSetup({
        type: 'POST',
        url: 'https://lionware.dev/services/sgv/webservice/index.php',
    });
}
