function onLoad(){
    const loaddata = sessionStorage.getItem("data")
    const clickedon = sessionStorage.getItem("clickedon")
    const pagedata = JSON.parse(loaddata)[clickedon]
    console.log(pagedata)
    const headerdata = `
    <div class="titlewrapper">
    <div class="herowrapper">
    <div class="portimagehero" style="background-image: url('${pagedata[6]}');">
    </div>
    </div>

    <div class="titlebox">

    <div class="titlebox1">

    <div class="h1box">
    <h1>${pagedata[0]}</h1>
    <div class="tagbox">
    <p>${pagedata[1]}</p>
    </div>
    </div>

    <div class="descrpbox">
    <p>${pagedata[2]}</p>
    </div>

    </div>

    </div>

    </div>
    `
    // Have to do to the max number of images


    //STOPPED HERE 11 JUL 5:05
    //I'm trying to auto load all the pages
//    for(var i = 0; i<pagedata.length; i++){
//     var x = pagedata[5+i]
//     if
//    }
    
//     var bodyimagedata = []

//     for (let i = 0; i < 20; i++) {
//         bodyimagedata.push(`<img src="${pagedata[5+i]}" class="portimage">`)
//       }
    // console.log(bodyimagedata)

    

    
    // const bodyimages = `
    // <img src="${pagedata[7]}" class="portimage">
    // <img src="${pagedata[8]}" class="portimage">
    // <img src="${pagedata[9]}" class="portimage">
    // <img src="${pagedata[10]}" class="portimage">
    // <img src="${pagedata[11]}" class="portimage">
    // <img src="${pagedata[12]}" class="portimage">
    // <img src="${pagedata[13]}" class="portimage">
    // <img src="${pagedata[14]}" class="portimage">
    // <img src="${pagedata[15]}" class="portimage">
    // `


// document.querySelectorAll(".portimage").forEach(img => {
//     console.log(img + "hello WAHT");});

// document.querySelectorAll(".portimage").forEach(x => {
//     console.log("hello"+x.offsetWidth);})
// //

const newString = pagedata.slice(7);

let Newhtml = "";

for (let i = 0; i < newString.length; i++) {
     Newhtml += `<img src="${newString[i]}" id="check${i}">`;
}

    const bodylink =`
    <div class="player">
    ${pagedata[4]}
    </div>
    `
    $(".porttitle").html(headerdata)
    // $(".portbody1").html(bodyimages)
    $(".portbody2").html(bodylink)
    
    document.querySelector(".portbody1").innerHTML = Newhtml;


for (let i = 0; i < newString.length; i++) {
    const img = document.getElementById(`check${i}`);

    img.onload = function () {
        const imageWidth = img.naturalWidth;
        const imageHeight = img.naturalHeight;

        console.log(imageWidth, imageHeight)

        if (imageHeight > imageWidth) {
            img.classList.add("portimagetall");
            console.log("I'm so tall")
        } else {
            img.classList.add("portimageshort");
        }
    };
}

// Change the whole layout
// for (let i = 0; i < newString.length; i++) {
//     const img = document.getElementById(`check${i}`);

//     img.onload = function () {
//         const imageWidth = img.naturalWidth;
//         const imageHeight = img.naturalHeight;

//         console.log(imageWidth, imageHeight)

//         if (imageHeight > imageWidth) {
//               const theBody = document.querySelector(".portbody1")
//               theBody.classList.remove("portbody1")
//               theBody.classList.add("portbody1B")
//         } else {
//             console.log("me is short")
//         }
//     };
// }


    sessionStorage.setItem("usedBack", "yes")
}