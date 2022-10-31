let models = [
    {
        name: "Bmw 116d",
        image:"img/bmw1series.png",
        link: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/1-series/5-door/2021/navigation/bmw-1-series-modelfinder.png"
    },

    {
        name: "Bmw 216d",
        image:"img/bmw2series.png",
        link: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/2-series/gran-coupe/2021/navigation/BMW-2-Series-gran-coupe_ModelCard.png"
    },

    {
        name: "Bmw 320i",
        image:"img/bmw3series.jpg",
        link: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-sp-desktop.jpg"
    },

    {
        name: "Bmw 416i",
        image:"img/bmw4series.jpg",
        link: "https://www.bmw.com.tr/content/dam/bmw/common/all-models/4-series/gran-coupe/2021/highlights/bmw-4-series-gran-coupe-onepager-sd-individual-01.jpg"
    },

    {
        name: "Bmw 516d",
        image:"img/bmw5series.jpg",
        link: "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/all-models/5-series/2020/highlight1.jpg"
    },
    {
        name: "Bmw 640d",
        image:"img/bmw6series.jpg",
        link: "https://www.bmw-me.com/content/dam/bmw/common/all-models/6-series/coupe/2014/equipment/bmw-6-series-coupe-design-pure-experience-slide-01.jpg"
    },
]

let index = 0;

let slaytCount = models.length;

document.querySelector(".fa-arrow-left").addEventListener("click",function(){
    index--;
    showSlide(index)
    console.log(index);
});

document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    index++;
    showSlide(index)
    console.log(index);
});


function showSlide(i){
    index = i;

    if(i<0){
        index = slaytCount -1;
    }
    if(i >= slaytCount){
        index = 0;
    }
document.querySelector(".card-title").textContent = models[index].name;
document.querySelector(".card-img-top").setAttribute("src",models[index].image);


document.querySelector(".card-link").setAttribute("href",models[index].link);
}