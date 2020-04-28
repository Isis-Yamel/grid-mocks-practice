import keysi18n from "./keys";
import i18n from "./i18n";

let langDrop = document.getElementById(dropID);
const root = document.documentElement;
let listOfLanguages = Object.keys(keysi18n[0]);

let multiLang = function({
    dropID = "langDrop",
    stringAttribute = 'i18n-text',
    chosenLang = "English",
    mLstrings = keysi18n,
    countryCodes = false,
    countryCodeData = []
} = {}) {
    createLangDrop(dropID);
    changeLang();
}

const createLangDrop = () => {
    langDrop.innerHTML = "";

    listOfLanguages.forEach (lang => {
        let option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;

        langDrop.appendChild(option);

    })
}

const changeLang = langDrop => {
    langDrop.addEventListener('change', (e) => {
        mlrLangInUse = langDrop[langDrop.selectedIndex].value;
        resolveAllMLStrings(stringAttribute);
        updateLangCodes();
    });
};

const updateLangCodes = () => {
    if (countryCodes === true) {
        if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
            console.warn("Cannot access strings for language codes");
            return;
        }
        root.setAttribute("lang", updateCountryCodeOnHTML().code);
    }
}

const resolveAllMLStrings = stringAttribute => {
    let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
    stringsToBeResolved.forEach(stringToBeResolved => {
        let originaltextContent = stringToBeResolved.textContent;
        let resolvedText = resolveMLString(originaltextContent, mLstrings);
        stringToBeResolved.textContent = resolvedText;
    });
};


const resolveMLString = (stringsToBeResolved, keysi18n) => {
    let matchingStringIndex = keysi18n.find((stringObj) => {
        let stringValues = Object.values(stringObj);
        return stringValues.includes(stringsToBeResolved)
    });
    resolveStr(matchingStringIndex, stringToBeResolved);
};

const resolveStr = (matchingStringIndex, stringToBeResolved) => {
    if (matchingStringIndex) {
        return matchingStringIndex[keysi18n];
    } else {
        return stringToBeResolved;
    }
};

multiLang({
    dropID = "langDrop",
    stringAttribute = 'i18n-text',
    chosenLang = "English",
    mLstrings = keysi18n,
    countryCodes = true,
    countryCodeData = i18n,
});