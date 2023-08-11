const dob = document.getElementById("dob");
const CalcBtn = document.getElementById("calcAge");
const result = document.getElementById("result");

function calculateAge(){
    const dobValue = dob.value;

    if(dobValue === ""){
        alert("Enter Your Birth Date")
    }else{
        const age = getAge(dobValue);
        result.innerText = `Your Age is ${age} years.`;
    }
}


function getAge(dobValue){
    const currDate = new Date();
    const birthDate = new Date(dobValue)
    const res = currDate.getFullYear() - birthDate.getFullYear();
    return res;
}




CalcBtn.addEventListener("click", calculateAge);