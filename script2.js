function onLoad(){
    const loaddata = sessionStorage.getItem("data")
    const clickedon = sessionStorage.getItem("clickedon")
    const pagedata = JSON.parse(loaddata)[clickedon]
    console.log(pagedata)
    const headerdata = `
    <div class="titlebox">
    <h1>${pagedata[0]}</h1>
    </div>
    <div class="tagbox">
    <p>${pagedata[1]}</p>
    </div>
    <div class="descrpbox">
    <p>${pagedata[2]}</p>
    </div>
    `
    // Have to do to the max number of images
    
    const bodyimages = `
    <div>
    <img src="${pagedata[5]}" class="portimage">
    <img src="${pagedata[6]}" class="portimage">
    <img src="${pagedata[7]}" class="portimage">
    </div>
    `
    const bodylink =`
    <div>
    ${pagedata[4]}
    </div>
    `
    $(".porttitle").html(headerdata)
    $(".portbody1").html(bodyimages)
    $(".portbody2").html(bodylink)

    if (pagedata[4] === ""){
        $(".portbody").addClass("grid1")
    }
    else{
        console.log("there's something 0.0")
    }

    sessionStorage.setItem("usedBack", "yes")
}

// function myFunc(index) {
//     const data = sessionStorage.getItem("data")
//     const getData = JSON.parse(data)[index]
//     console.log(getData[3])
//     const dataDisplay = `<img src="${getData[3]}">`
//     $(".box3").html(dataDisplay)
// }