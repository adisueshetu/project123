// //var person = [1,2,3,3,4,4,4];
// //console.log(person);
// var people = [
//     {
//         name: "Smith",
//         age : 35
//     },
//         {
//             name : "john" ,
//             age : 30
//         },
//         {
//             name : "Brada",
//             age : 25
//         }
    
// ];
// var output = '';
// for(var i = 0; i<people.length ; i++){
//     console.log(people[0].name);
// }

var xhttp = new XMLHttpRequest();
xhttp.open("GET","http://www.omdbapi.com/?apikey=eb6b6160&",true);
xhttp.send();
xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status==200) {
        let str = this.responseText;
        let users = JSON.parse(this.responseText);
        console.log(users);
        const root = document.getElementById("root");
        root.innerHTML = "";
        users.forEach(data => {
            let div = document.createElement('div');
            div.innerText= data.title + " "  ;
            root.appendChild(div)