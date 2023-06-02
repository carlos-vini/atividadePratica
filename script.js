const data = [
    {
      "day": "mon",
      "amount": 17.45,
      "color": "var(--soft-red)"
    },
    {
      "day": "tue",
      "amount": 34.91,
      "color": "var(--soft-red)"
    },
    {
      "day": "wed",
      "amount": 52.36,
      "color": "var(--soft-red)"
    },
    {
      "day": "thu",
      "amount": 31.07,
      "color": "var(--soft-red)"
    },
    {
      "day": "fri",
      "amount": 31.07,
      "color": "var(--soft-red)"
    },
    {
      "day": "sat",
      "amount": 43.28,
      "color": "var(--soft-red)"
    },
    {
      "day": "sun",
      "amount": 25.48,
      "color": "var(--soft-red)"
    }
];

const graphic = document.querySelector('.graphics');
const bar = document.querySelector('.bar');


window.addEventListener('DOMContentLoaded', ()=>{
    let displayGraphic = data.map( (item)=>{
        if(item.amount >= 50){
            item.color = "var(--cyan)"
        };

        return `
            <div class="bar">
                <div id="${item.day}" style="padding: ${item.amount}px 20px; background-color: ${item.color}"></div>
                <p>${item.day}</p>
            </div>
        `
    })
    displayGraphic = displayGraphic.join("")
    // console.log(displayGraphic);

    graphic.innerHTML = displayGraphic;
});