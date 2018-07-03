/*
  Função responsável por recuperar parâmetros pela URL.
  Nesta aplicação, recuperamos o Token de Primeiro Acesso com ela.
*/
export default function getParameterByName (name, url) {
	// Eu não sei o que essa regex faz mas ela funciona só isso
	if (!url) url = location.href;
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\?&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    return results == null ? null : results[1];
}
