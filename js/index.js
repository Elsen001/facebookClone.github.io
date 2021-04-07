var day =document.querySelector("#day")
var year =document.querySelector("#year")

for(let i=1;i<=31;i++){
    var gun=i

    var html;

        html+=
        `
        <option value="">${i}</option>
        `
    day.innerHTML=html
}
var Year = new Date().getFullYear();

for(let i=1905;i<=Year;i++){
    var years;
    years+=
    `
    <option value="">${i}</option>
    `
    year.innerHTML=years;
    console.log(i)
}


