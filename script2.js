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

    

    
    const bodyimages = `
    <img src="${pagedata[7]}" class="portimage">
    <img src="${pagedata[8]}" class="portimage">
    <img src="${pagedata[9]}" class="portimage">
    <img src="${pagedata[10]}" class="portimage">
    <img src="${pagedata[11]}" class="portimage">
    <img src="${pagedata[12]}" class="portimage">
    <img src="${pagedata[13]}" class="portimage">
    <img src="${pagedata[14]}" class="portimage">
    <img src="${pagedata[15]}" class="portimage">
    `

    const bodylink =`
    <div class="player">
    ${pagedata[4]}
    </div>
    `
    $(".porttitle").html(headerdata)
    $(".portbody1").html(bodyimages)
    $(".portbody2").html(bodylink)

    // if (pagedata[4] === ""){
    //     $(".portbody").addClass("grid1")
    // }
    // else{
    //     console.log("there's something 0.0")
    // }

    sessionStorage.setItem("usedBack", "yes")
}

// function myFunc(index) {
//     const data = sessionStorage.getItem("data")
//     const getData = JSON.parse(data)[index]
//     console.log(getData[3])
//     const dataDisplay = `<img src="${getData[3]}">`
//     $(".box3").html(dataDisplay)
// }