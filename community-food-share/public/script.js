const api =
"http://localhost:5000/api/donations";

const form =
document.getElementById("foodForm");

form.addEventListener("submit",
async(e)=>{
e.preventDefault();

const donation = {
donorName:
document.getElementById("donorName").value,

foodItem:
document.getElementById("foodItem").value,

quantity:
document.getElementById("quantity").value,

location:
document.getElementById("location").value,

contact:
document.getElementById("contact").value
};

await fetch(api+"/add",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(donation)
});

loadDonations();
form.reset();
});

async function loadDonations(){

const response =
await fetch(api);

const data =
await response.json();

const list =
document.getElementById("donationList");

list.innerHTML="";

data.forEach(item=>{

list.innerHTML += `
<div class="card">
<h3>${item.foodItem}</h3>
<p>Donor: ${item.donorName}</p>
<p>Quantity: ${item.quantity}</p>
<p>Location: ${item.location}</p>
<p>Contact: ${item.contact}</p>

<button onclick="deleteDonation('${item._id}')">
Delete
</button>

</div>
`;
});
}

async function deleteDonation(id){

await fetch(api+"/"+id,{
method:"DELETE"
});

loadDonations();
}

loadDonations();