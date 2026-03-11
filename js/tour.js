fetch("http://localhost/tourboost/get_tour.php?store_id=7401928")
.then(res=>res.json())
.then(steps=>{

const driver = window.driver.js.driver;

const driverObj = driver({
showProgress:true,
steps:steps
});

driverObj.drive();

});