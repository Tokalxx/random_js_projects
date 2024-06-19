const mySubmit = document.getElementById('submit');
const replace = document.getElementById('replace');
const Slice = document.getElementById('Slice');
const uppercase = document.getElementById('uppercase');
const Text = document.getElementById('sentenceStructure');

let sen_data = document.getElementById('sentenceStructure').innerText;

console
mySubmit.onclick = function() {
    if(replace.checked) {
        sen_data = sen_data.replace(" ","*");
        document.getElementById('sentenceStructure').textContent = sen_data;

    }
    else if(Slice.checked) {
        sen_data = sen_data.slice(sen_data.indexOf("Blade"));
        document.getElementById('sentenceStructure').textContent = sen_data;
    }
    else if(uppercase.checked) {
        document.getElementById('sentenceStructure').textContent = sen_data.toUpperCase();

    }

}