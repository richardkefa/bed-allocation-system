var totalNumberOfBedsGreenView = 20;
var totalNumberOfBedsGoodHope = 20;
var totalNumberOfBedsHaloHeal = 20;
localStorage.setItem("currentTotal", totalNumberOfBedsGreenView);
function getValue() {
var getBedPrice=document.getElementById("bed");
var bedPrice=parseInt(getBedPrice.options[getBedPrice.selectedIndex].value);
var getWardPrice=document.getElementById("ward");
var wardPrice=parseInt(getWardPrice.options[getWardPrice.selectedIndex].value);
var totalPrice= bedPrice + wardPrice;
alert(totalPrice);
return totalPrice=bedPrice + wardPrice;
}
function Patient (name,number,details) {
  this.patientName=name;
  this.medicalNumber=number;
  this.bookingDetails=[];

}
function Hospital (name,bed,ward,) {
  this.hospitalName = name;
  this.bedType=bed;
  this.wardType=ward;

}



$(document).ready(function() {
  if (document.getElementById("greenview").selected==true) {
    var totalNumberOfBedsGreenView = localStorage.getItem("currentTotal");
    var availableBeds = totalNumberOfBedsGreenView -1 ;
    totalNumberOfBedsGreenView = availableBeds  ;
    document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (totalNumberOfBedsGreenView);
  } else if (document.getElementById("goodhope").selected==true) {
    var availableBeds = totalNumberOfBedsGoodHope- 1;
    totalNumberOfBedsGoodHope = availableBeds  ;
    document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (availableBeds);
  } else if (document.getElementById("haloheal").selected==true) {
    var availableBeds = totalNumberOfBedsHaloHeal- 1;
    totalNumberOfBedsHaloHeal = availableBeds  ;
    document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (availableBeds);

  }
  $("form.inputtedDetails").submit(function(event) {
    event.preventDefault();
    var inputtedPatientName = $("input#patientname").val();
    var inputtedMedicalNumber = parseInt($("input#medicalno").val());
    var newPatient = new Patient(inputtedPatientName,inputtedMedicalNumber);
    alert(inputtedPatientName);

    $(".new-booking").each(function() {
    var inputtedHospital = $(this).find("select#hospital").val();
    var inputtedBedType = $(this).find("select#bed option:selected").text();
    var inputtedWard = $(this).find("select#ward").val();
    var newBooking = new Hospital  (inputtedHospital,inputtedBedType,inputtedWard);
    newPatient.bookingDetails.push(newBooking)
    alert(newPatient.patientName);

  /*  if(inputtedHospital == "GREEN VIEW HOSPITAL") {
      var availableBeds = totalNumberOfBedsGreenView - 1;
      totalNumberofBeds = availableBeds  ;
      document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (availableBeds);
  } else if (inputtedHospital == "GOOD HOPE HOSPITAL") {
      var availableBeds = totalNumberOfBedsGoodHope - 1;
      document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (availableBeds);
  } else if (inputtedHospital == "HALO HEAL HOSPITAL") {
    var availableBeds = totalNumberOfBedsHaloHeal - 1;
    document.getElementById("availableBeds").innerHTML="Available number of beds are "+ (availableBeds);
  } else {
    document.getElementById("availableBeds").innerHTML="Available number of beds are 0"+ ;

  }
*/
    $(".patient-name").last().append(newPatient.patientName);
    $(".hospital-name").last().append(newBooking.hospitalName);
    $(".bed-type").last().append(newBooking.bedType);
    $(".total-price").last().append(getValue());



    /*$("input#patientname").val("");
    $("input#medicalno").val("");
    $("select#hospital").val("");
    $("select#bed ").val("");
    $("select#ward").val("");
*/



});
});


})
