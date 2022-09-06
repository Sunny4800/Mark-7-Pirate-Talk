var textinput = document.querySelector("#txtarea");
var btntranslate = document.querySelector(".btn1")
var outputdiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/pirate.json"

async function getDataFromAPI(text) {
    let res = await fetch(`https://api.funtranslations.com/translate/pirate.json.json?text=${text}`);
    console.log(res);
    let data;

    if(res.status !== 200) {
        let msg = "Error occured"
        return msg;
    } else {
        data = await res.json();
    }

    return data.contents.translated
}

async function clickHandler() {
    let input_text = textinput.value;
    input_text = input_text.trim();
    if(input_text === '') {
        let msg = "Please Enter some text !!";
        output.textContent = msg;
        return;
    }

    let result = await getDataFromAPI(input_text);

    outputdiv.textContent = result;
};

btntranslate.addEventListener("click",clickHandler)