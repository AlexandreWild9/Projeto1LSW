let paragrafo1 = document.getElementById("paragrafo");
let conteudo = paragrafo1.innerHTML;
let autor = "Demer Gabriel";
let meuNome = "Alexandre Wild";
let novoConteudo = conteudo.replace(autor,meuNome);
paragrafo1.innerHTML = novoConteudo;


let demo1 = document.getElementById("demo");
let contDemo = demo1.innerHTML;
let pessoa = "Demer";
let profa = "Aline Alves Ribeiro";
let novoDemo = contDemo.replace(pessoa, profa);
demo1.innerHTML = novoDemo;

let info1 = document.getElementById("info");
let contInfo = info1.innerHTML;
let faxineiro = "Jojo";
let jefin = "Jefferson Bethoven";
let novoInfo = contInfo.replace(faxineiro,jefin);
info1.innerHTML = novoInfo;

let title = document.getElementById("title").innerHTML = "Comédia inédita promete muitas risadas em BH";