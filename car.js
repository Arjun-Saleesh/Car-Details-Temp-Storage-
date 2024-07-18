function store(){
    car={
        brand:carbrand.value,
        price:carprice.value,
        key:key.value
    }
    if(car.brand=="" || car.price=="" || car.key==""){
        alert("enter the empty field")
    }else{
        if(car.key in localStorage){
            alert("already exists")
        }else{
            localStorage.setItem(car.key, JSON.stringify(car))
            alert("successfully added")
        }
    }
}
function Retrive(){
let key=sear.value;
let car=JSON.parse(localStorage.getItem(key))
if (key ==""){
    alert("please fill")
}else{
    result.innerHTML=` <h6 class="fw-bold">Brand:&nbsp;&nbsp;&nbsp;&nbsp;${car.brand}</h6>
 <h6 class="fw-bold">Price:&nbsp;&nbsp;&nbsp;&nbsp;${car.price}</h6>
  <h6 class="fw-bold">Key:&nbsp;&nbsp;&nbsp;&nbsp;${car.key}</h6>`
}

}
function remove(){

let key= remp.value;
if (localStorage.getItem(key) !== null) {
    localStorage.removeItem(key);
    alert(`The Data of the Key ${key} Removed`);
} else {
    alert(`No data found for the key ${key}`);
}
window.location.reload();



}
function allclear(){
    localStorage.clear()
    alert("All Data is Cleared");
    window.location.reload();

}