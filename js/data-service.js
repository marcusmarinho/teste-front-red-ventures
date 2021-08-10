import {loadNotFoundTemplate, getCardTemplateMobile, getCardTemplateDesktop} from './template.js';

export {getDataPlants, selectDataPet };

let data;

function getDataPlants(selectedAmountSunLight, selectedWater, selectedPet) {
    if (selectedAmountSunLight !== 'Select...' && selectedWater !== 'Select...' && selectedPet !== 'Select...') {
        let url = `https://front-br-challenges.web.app/api/v2/green-thumb/?sun=${selectedAmountSunLight}&water=${selectedWater}&pets=${selectDataPet(selectedPet)}`
        fetch(url)
            .then(data => {
                return data.json();
             })
            .then((response) => {
                getCardTemplateMobile(response);
                getCardTemplateDesktop(response);

            })
            .catch(error => {
                loadNotFoundTemplate();
            })
    }

}

function selectDataPet(selectedPet) {
    if (selectedPet !== 'Select...' && selectedPet === "Yes") {
        return true;
    } else {
        return false
    }
}