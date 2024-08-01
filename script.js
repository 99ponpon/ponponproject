function loadStuff(){
    if (sessionStorage.getItem("usedBack") === "yes"){
        const data1 = JSON.parse(sessionStorage.getItem("data"))
        console.log("load")
        doStuff(data1)
    }
    else {
        console.log("fetch")
        fetch("https://script.google.com/macros/s/AKfycbwWMzOvxz4TwsZBFfOILQLwwe7wqWJtpvbYW7ZOtA3AFhon1YdzQsriNEXolJXS4183Yw/exec")
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
    // getFilterBtn(data)
    displayBody(data)
    sessionStorage.setItem("data", JSON.stringify(data));
    console.log(data)
}


function displayBody(data){
    const data2 = data.map((x)=>{
        if(x[1]==""){
            //nothing
        }
        else{
            return `
            <div id="${x[3]}" class="portcard">
            <div class="thumbnaildiv" id="${x[3]}" style="background-image: url('${x[5]}');">
            </div>
            <div class="portcardtextwrapper">
            <h3 id="${x[3]}">${x[0]}</h3>
            <p>${x[1]}</p>
            </div>
            </div>
            `
        }
    })
    $(".box2").html(data2)
    $("body").show()
}


// DISPLAY TAG OLD
// function getFilterBtn(data){
//     //create array
//     const arr = data.map((x)=>{return x[1]})
//     const newarr = [];
//     arr.forEach((x)=>{
//         if(newarr.includes(x)){
//         }
//         else{
//             newarr.push(x)
//         }
//     })
//     const arrhtml = `
//     <button class="filterbtn">${newarr[0]}</button>
//     <button class="filterbtn">${newarr[1]}</button>
//     <button class="filterbtn">${newarr[2]}</button>
//     `
//     $(".filter").append(arrhtml)
// }

// $(".filter").on("click", function(e){
//     if (e.target.tagName == "BUTTON"){
//         const filterWord = e.target.innerHTML
//         getFilterData(filterWord)
//         $(".filterbtn").removeClass("filterActive")
//         e.target.className += " filterActive"
//     }
// })

// function getFilterData(filterWord){
//     const getData = JSON.parse(sessionStorage.getItem("data"))
//     if (filterWord == "All"){
//     displayBody(getData)
//     }
//     else{
//     const newData = getData.filter((x)=>x.includes(filterWord))
//     console.log(newData)
//     displayBody(newData)
//     }
// }

// Display tag FILTER NEW
//
$(".filternew").on("click", function(e){
    if (e.target.tagName == "BUTTON"){
        const filterWord = e.target.innerHTML
        getFilterDataNew(filterWord)
        console.log(filterWord)
        $(".filterbtn").removeClass("filterActive")
        e.target.className += " filterActive"
    }
})

function getFilterDataNew(filterWord){
    const getData = JSON.parse(sessionStorage.getItem("data"))
    if (filterWord == "All"){
    displayBody(getData)
    }
    else{
    const newData = getData.filter((x)=>x[1].includes(filterWord))
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

// SCROLLING
const container1 = document.getElementById("scroll1");
  container1.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container1.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      container1.scrollLeft -= 100;
      e.preventDefault();
    }
  });

  const container2 = document.getElementById("scroll2");
  container2.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container2.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      container2.scrollLeft -= 100;
      e.preventDefault();
    }
  });







