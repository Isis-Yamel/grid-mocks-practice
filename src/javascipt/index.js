import i18n from "../files/i18n";
import keysi18n from "../files/keys";

const mlr = ({
    dropID = "langDrop",
    stringAttribute = "i18n-text",
    chosenLang = "English",
    mLstrings = keysi18n,
    countryCodes = false,
    countryCodeData = [],
    } = {}) => {
    const root = document.documentElement;

    var listOfLanguages = Object.keys(mLstrings[0]);
    var mlrLangInUse;
    mlrLangInUse = chosenLang;

    (function createMLDrop() {
        var langDrop = document.getElementById(dropID);
        // Reset the menu
        langDrop.innerHTML = "";
        // Now build the options
        listOfLanguages.forEach(lang => {
            let HTMLoption = document.createElement("option");
            HTMLoption.value = lang;
            HTMLoption.textContent = lang;
            langDrop.appendChild(HTMLoption);
        });
        langDrop.addEventListener("change", function(e) {
            mlrLangInUse = langDrop[langDrop.selectedIndex].value;
            resolveAllMLStrings();
            // Here we update the 2-digit lang attribute if required
            if (countryCodes === true) {
                if (!Array.isArray(countryCodeData) || !countryCodeData.length) {
                    console.warn("Cannot access strings for language codes");
                    return;
                }
                root.setAttribute("lang", updateCountryCodeOnHTML().code);
            }
        });
    })();

    const updateCountryCodeOnHTML = () => {
        return countryCodeData.find(this2Digit => this2Digit.name === mlrLangInUse);
    }

    const resolveAllMLStrings = () => {
        let stringsToBeResolved = document.querySelectorAll(`[${stringAttribute}]`);
        stringsToBeResolved.forEach(stringToBeResolved => {
            let originaltextContent = stringToBeResolved.textContent;
            let resolvedText = resolveMLString(originaltextContent, mLstrings);
            stringToBeResolved.textContent = resolvedText;
        });
    }
    const resolveMLString = (stringToBeResolved, mLstrings) => {
        var matchingStringIndex = mLstrings.find(function(stringObj) {
            // Create an array of the objects values:
            let stringValues = Object.values(stringObj);
            // Now return if we can find that string anywhere in there
            return stringValues.includes(stringToBeResolved);
        });
        if (matchingStringIndex) {
            return matchingStringIndex[mlrLangInUse];
        } else {
            // If we don't have a match in our language strings, return the original
            return stringToBeResolved;
        }
    }
};


mlr({
    dropID: "langDrop",
    stringAttribute: "i18n-text",
    chosenLang: "English",
    mLstrings: keysi18n,
    countryCodes: true,
    countryCodeData: i18n,
});