function loadStuff(){
    if (sessionStorage.getItem("usedBack") === "yes"){
        const data1 = JSON.parse(sessionStorage.getItem("data"))
        console.log("load")
        doStuff(data1)
    }
    else {
        console.log("fetch")
        fetch("https://script.google.com/macros/s/AKfycbwc0dRnZ6M91XencOwYjMHJ7isCZXvDA1geumrWWxlROB2QBfKIH8eOTmS34Cp1nd-uOA/exec")
        .then(res=>res.json())
        .then(
        (result) => {
        const data1 = result.data
        doStuff(data1)
        })
        }
}

loadStuff()

window.addEventListener("beforeunload", function(e) {
    sessionStorage.removeItem("usedBack");
  });

function doStuff(data){
    console.log(data)
    getFilterBtn(data)
    displayBody(data)
    sessionStorage.setItem("data", JSON.stringify(data));
}


function displayBody(data){
    const data2 = data.map((x, index)=>{
        return `
        <div id="${x[3]}" class="portcard">
        <div class="thumbnaildiv" id="${x[3]}" style="background-image: url('${x[5]}');">
        </div>
        <h3 id="${x[3]}">${x[0]}</h3>
        </div>
        `
    })
    $(".box2").html(data2)
    $("body").show()
}


// DISPLAY TAG
function getFilterBtn(data){
    //create array
    const arr = data.map((x)=>{return x[1]})
    const newarr = [];
    arr.forEach((x)=>{
        if(newarr.includes(x)){
            console.log(`nothing`)
        }
        else{
            newarr.push(x)
        }
    })
    const arrhtml = `
    <button class="filterbtn">${newarr[0]}</button>
    <button class="filterbtn">${newarr[1]}</button>
    <button class="filterbtn">${newarr[2]}</button>
    `
    console.log(arrhtml)
    // $(".filter").html(arrhtml) here you idiot
    $(".filter").append(arrhtml)
}

$(".filter").on("click", function(e){
    if (e.target.tagName == "BUTTON"){
        const filterWord = e.target.innerHTML
        getFilterData(filterWord)
        console.log(e.currentTarget.children)
        $(".filterbtn").removeClass("filterActive")
        e.target.className += " filterActive"
    }
    // else {
    //     $(".filterbtn").removeClass("filterActive")
    //     e.target.className += " filterActive"
    // }
})

function getFilterData(filterWord){
    const getData = JSON.parse(sessionStorage.getItem("data"))
    if (filterWord == "All"){
    displayBody(getData)
    }
    else{
    const newData = getData.filter((x)=>x.includes(filterWord))
    console.log(newData)
    displayBody(newData)
    }
}

// write a function that adds a class to that target but removes class from everyone elses
// function changeFilterBtn{
    
// }

// CLICK GO NEXT PAGE

$(".box2").on("click", function(e){
    if (e.currentTarget.tagName == "DIV"){
        const uniqueID = Number(e.target.id) - 1
        sessionStorage.setItem("clickedon", uniqueID)
        window.location.href = "page1.html"
        console.log(uniqueID)
    }
})








