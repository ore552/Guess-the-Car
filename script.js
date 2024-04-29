//target the btn
let btn = document.querySelector(".btn");

//add a class to the remark, target it 
let remark = document.querySelector(".remark");
let guessedCar = document.getElementById("guessed-car").value;
//add the class hide so it can hide the correct
remark.classList.add("hide");


//add an event listener for the button
btn.addEventListener("click", (e) =>{
   
    e.preventDefault();
    let guessedCar = document.getElementById("guessed-car").value;
    let remark = document.querySelector(".remark");
    let remarkStm = document.querySelector(".remark-stm");
    let carName = document.querySelector(".car-name");
    let carImg = document.querySelector(".car-img"); 


    let cars = [   
    "Mercedes Benz",
     "Toyota",
      "Skoda",
       "Vaxhuall",
        "Peugeot", 
        "Tesla",
         "Lamborghini",
          "Ferrari",
           "Nissan",
            "Volkswagen",
             "Land Rover",
              "Volvo",
               "Mini",
                "Honda",
                 "Hyundai",
                  "Cheverlot",
                   "Jaguar",
                    "Kia",
                     "Alfa Romero",
                      "Bentley",
                       "Citroen"];

    if (guessedCar == "") {
        setTimeout(() => {
            remark.classList.remove("hide");
            remarkStm.innerHTML = "Please guess a car."
            remark.style.backgroundColor = "red";

            setInterval(() => {
                remark.classList.add("hide");
            }, 2000);
        }, 200);
    } else {
        
        remark.classList.remove("hide");
        let indexNumber = Math.round(Math.random() * (cars.length - 1));
        carName.innerHTML = cars[indexNumber];
        guessedCar = guessedCar.toUpperCase();
        if ((carName.innerHTML.toUpperCase()) == guessedCar) {
            remarkStm.innerHTML = "Congratulations! You got it right! Clap for yourself, it was really tricky!";
            remark.style.backgroundColor = "green";
            remark.style.color = "white";
        } else {
            remarkStm.innerHTML = "Sorry, try again...";
            remark.style.backgroundColor = "red";
            remark.style.color = "white";
            clear();
        }
        carImg.src = "images/"+cars[indexNumber]+".png";
    };
});

function clear() {
    document.getElementById("guessed-car").value = "";
    console.log("cleared");
    // guessedCar = " "
}