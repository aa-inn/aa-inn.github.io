

const exceptions = [
    'publicacionesoficiales.hacienda.gob.es',
    'achtag.sepe.es',
    'revista.cortesgenerales.es',
    'innovasur.com'
];




function FindProxyForURL(url, host) {

    // Send proxy
    for (var i = 0; i < exceptions.length; i++) {
        if (dnsDomainIs(host, exceptions[i]) || dnsDomainIs(host, `.${exceptions[i]}`)) {
            return "PROXY 163.116.128.80:8080; PROXY 163.116.128.81:8080";
        }
    }

    return "DIRECT";

}