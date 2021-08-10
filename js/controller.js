import {getDataPlants, selectDataPet} from './data-service';

const selectedAmountSunLight = document.querySelector("[data-amount-sunlight]");
const selectedWater = document.querySelector("[data-water]");
const selectedPet = document.querySelector("[data-pet]");
const btnBottom = document.querySelector("[data-btn-bottom]");

const arrowSunLight = document.querySelector("[data-arrow-sunlight]");
const arrowWater = document.querySelector("[data-arrow-water]");
const arrowPet = document.querySelector("[data-arrow-pet]");

const optionsContainerAmountSunLight = document.querySelector("[data-op-container-sunlight]");
const optionsContainerWater = document.querySelector("[data-op-container-water]");
const optionsContainerPet = document.querySelector("[data-op-container-pet]");

const optionsListSunLight = document.querySelectorAll("[data-op-sunlight]");
const optionsListWater = document.querySelectorAll("[data-op-water]");
const optionsListPet = document.querySelectorAll("[data-op-pet]");

selectedAmountSunLight.addEventListener("click", () => {
    optionsContainerAmountSunLight.classList.toggle("active");
    arrowSunLight.classList.toggle("active");
});

selectedWater.addEventListener("click", () => {
    optionsContainerWater.classList.toggle("active");
    arrowWater.classList.toggle("active");
});

selectedPet.addEventListener("click", () => {
    optionsContainerPet.classList.toggle("active");
    arrowPet.classList.toggle("active");
});

optionsListSunLight.forEach(op => {
    op.addEventListener("click", () => {
        selectedAmountSunLight.innerHTML = op.innerHTML;
        optionsContainerAmountSunLight.classList.remove("active");
        arrowSunLight.classList.remove("active");
        getDataPlants(selectedAmountSunLight.innerHTML, selectedWater.innerHTML, selectedPet.innerHTML);
    })
});

optionsListWater.forEach(op => {
    op.addEventListener("click", () => {
        selectedWater.innerHTML = op.innerHTML;
        optionsContainerWater.classList.remove("active");
        arrowWater.classList.remove("active");
        getDataPlants(selectedAmountSunLight.innerHTML, selectedWater.innerHTML, selectedPet.innerHTML);
    })
});

optionsListPet.forEach(op => {
    op.addEventListener("click", () => {
        selectedPet.innerHTML = op.innerHTML;
        selectDataPet(selectedPet.innerHTML);
        optionsContainerPet.classList.remove("active");
        arrowPet.classList.remove("active");
        getDataPlants(selectedAmountSunLight.innerHTML, selectedWater.innerHTML, selectedPet.innerHTML);
    })
});

btnBottom.addEventListener("click", () => {
    scrollToTop();
})

function scrollToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}





