const API_URL = "http://107.20.21.124:5000/cars";

async function loadCars() {

const response = await fetch(API_URL);
const cars = await response.json();

const table = document.getElementById("vehicleList");

table.innerHTML = "";

cars.forEach(car => {

table.innerHTML += `
<tr>
<td>${car.number}</td>
<td>${car.time}</td>
<td>
<button class="remove"
onclick="removeCar(${car.id})">
Remove
</button>
</td>
</tr>
`;

});

document.getElementById("totalCars").innerText = cars.length;
document.getElementById("availableSlots").innerText = 50 - cars.length;

}

async function parkCar() {

const number = document.getElementById("carNumber").value;

if(!number){
alert("Enter Vehicle Number");
return;
}

await fetch(API_URL,{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
number
})
});

document.getElementById("carNumber").value="";

loadCars();
}

async function removeCar(id){

await fetch(`${API_URL}/${id}`,{
method:"DELETE"
});

loadCars();
}

loadCars();
