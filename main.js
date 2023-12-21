// panel classlarının hepsini getirdi
const panels = document.querySelectorAll(".panel");
// console.log(panels)

// panellerin hepsinin içinde gezdik
panels.forEach(panel => {
    // bir olay izleyicisi verip tıklanma anını izledik
    panel.addEventListener("click", () => {
       // panellerin içine active classını ekledik
       // önceki active'i ortadan kaldırmak için removeActive
        removeActive();
        panel.classList.add("active");
    })
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}