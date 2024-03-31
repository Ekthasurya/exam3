var form = document.querySelector("form");
form.addEventListener("submit",function(){
    formData()
})
var arr = JSON.parse(localStorage.getItem("book-list")) || [];
displayData(arr)
function formData(){
    event.preventDefault();
    var bookName = document.getElementById("bookName").value;
    var authorName = document.getElementById("authorName").value;
    var bookdes = document.getElementById("bookdes").value;
    var date = document.getElementById("date").value;
    var category = document.getElementById("category").value;
    var bookpr = document.getElementById("bookpr").value;

    var obj={
        bookName:bookName,
        authorName:authorName,
        bookdes:bookdes,
        date:date,
        category:category,
        bookpr:bookpr
    }
    arr.push(obj)
    localStorage.setItem("book-list",JSON.stringify(arr))

    displayData(arr)
   

}

function displayData(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function(ele){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent=ele.bookName;
        var td2 = document.createElement("td");
        td2.textContent=ele.authorName;
        var td3 = document.createElement("td");
        td3.textContent=ele.bookdes;
        var td4 = document.createElement("td");
        td4.textContent=ele.date;
        var td5 = document.createElement("td");
        td5.textContent=ele.category;
        var td6 = document.createElement("td");
        td6.textContent=ele.bookpr;
        var td7 = document.createElement("td");
        td7.textContent="Buy"
        td7.style.color="green"
        td7.addEventListener("click",function(){
            storeData(i)
        })
        var td8 = document.createElement("td");
        td8.textContent="Buy"
        td8.style.color="green"
        td8.addEventListener("click",function(){
            storeData(i)
        })
    
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}

function storeData(i){
    arr.splice(i,1)
    displaydata(arr)
}