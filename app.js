const { CODEBUILD } = require('ci-info');
const { count } = require('console');
const countries = require('./countries.json');

/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){

    for (let country of countries){
        if(country.iso3 == isoCode){
            return country
        }
    }
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    let country = getCountryByIso3(isoCode)
    let translations = country.translations
    // return translations

    for (let lang in translations) {
        
            if(lang == language) {
                return translations[lang]
            }  
        
    }
    

}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    let countriesBySubregion = []
    for (let country of countries){
        if(country.subregion == subregion){
            countriesBySubregion.push(country)
        }
    }
    return countriesBySubregion
}

function main() {
    console.log(
        '///// Ejercicio 1 /////\n',
        getCountryByIso3('ARG'),
        '\n');
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountriesBySubregion('South America'),
        '\n'); 
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    

}

main();