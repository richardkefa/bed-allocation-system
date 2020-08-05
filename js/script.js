function getValue() {
var getBedPrice=document.getElementById("bed");
var bedPrice=parseInt(getBedPrice.options[getBedPrice.selectedIndex].value);
var getWardPrice=document.getElementById("ward");
var wardPrice=parseInt(getWardPrice.options[getWardPrice.selectedIndex].value);
var totalPrice= bedPrice + wardPrice;
alert(totalPrice)
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
  $("form.inputtedDetails").submit(function(event) {
    event.preventDefault();
    var inputtedPatientName = $("input#patientname").val();
    var inputtedMedicalNumber = parseInt($("input#medicalno").val());
    var newPatient = new Patient(inputtedPatientName,inputtedMedicalNumber);
    alert(inputtedPatientName);

    $(".new-booking").each(function() {
    var inputtedHospital = $(this).find("select#hospital").val();
    var inputtedBedType = $(this).find("select#bed").val();
    var inputtedWard = $(this).find("select#ward").val();
    var newBooking = new Hospital  (name,bed,ward);
    newPatient.bookingDetails.push(newBooking)
    console.log(newPatient.patientName);


})
})
})
