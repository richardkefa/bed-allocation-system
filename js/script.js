// Bussiness logic
function logOut() {
    window.location.replace("index.html");
}

var totalNumberOfBedsGreenView = 20;
var totalNumberOfBedsGoodHope = 20;
var totalNumberOfBedsHaloHeal = 20;
localStorage.setItem("currentTotal", totalNumberOfBedsGreenView);

function getValue() {
    var getBedPrice = document.getElementById("bed");
    var bedPrice = parseInt(getBedPrice.options[getBedPrice.selectedIndex].value);
    var getWardPrice = document.getElementById("ward");
    var wardPrice = parseInt(getWardPrice.options[getWardPrice.selectedIndex].value);
    var totalPrice = bedPrice + wardPrice;
    return totalPrice = bedPrice + wardPrice;
}

function Patient(name, number, details) {
    this.patientName = name;
    this.medicalNumber = number;
    this.bookingDetails = [];
}

function Hospital(name, bed, ward, ) {
    this.hospitalName = name;
    this.bedType = bed;
    this.wardType = ward;
}


// User Logic
$(document).ready(function() {
    if (document.getElementById("greenview").selected == true) {
        var totalNumberOfBedsGreenView = localStorage.getItem("currentTotal");
        var availableBeds = totalNumberOfBedsGreenView - 1;
        totalNumberOfBedsGreenView = availableBeds;
        localStorage.setItem("currentTotal", totalNumberOfBedsGreenView);

        document.getElementById("availableBeds").innerHTML = "Available number of beds are " + (totalNumberOfBedsGreenView);
    } else if (document.getElementById("goodhope").selected == true) {
        var availableBeds = totalNumberOfBedsGoodHope - 1;
        totalNumberOfBedsGoodHope = availableBeds;
        document.getElementById("availableBeds").innerHTML = "Available number of beds are " + (availableBeds);
    } else if (document.getElementById("haloheal").selected == true) {
        var availableBeds = totalNumberOfBedsHaloHeal - 1;
        totalNumberOfBedsHaloHeal = availableBeds;
        document.getElementById("availableBeds").innerHTML = "Available number of beds are " + (availableBeds);

    }
    $("form.inputtedDetails").submit(function(event) {
        event.preventDefault();
        var inputtedPatientName = $("input#patientname").val();
        var inputtedMedicalNumber = parseInt($("input#medicalno").val());
        var newPatient = new Patient(inputtedPatientName, inputtedMedicalNumber);
        $(".new-booking").each(function() {
            var inputtedHospital = $(this).find("select#hospital").val();
            var inputtedBedType = $(this).find("select#bed option:selected").text();
            var inputtedWard = $(this).find("select#ward").val();
            var newBooking = new Hospital(inputtedHospital, inputtedBedType, inputtedWard);
            newPatient.bookingDetails.push(newBooking)

            $(".patient-name").last().text(newPatient.patientName);
            $(".hospital-name").last().text(newBooking.hospitalName);
            $(".bed-type").last().text(newBooking.bedType);
            $(".total-price").last().text("Kshs " + getValue());

            $("#confirmbooking").on("click", function() {
                $("#confirmation-message").last().text(("Dear " + inputtedPatientName + ";" + " Medical Number: " + inputtedMedicalNumber + " , your booking details have been received at " + inputtedHospital + ".")).show();
            });

            $("input#patientname").val("");
            $("input#medicalno").val("");
            $("select#hospital").val("");
            $("select#bed ").val("");
            $("select#ward").val("");
        });
    });
    $("#confirmbooking").click(function() {
        $("#checkout").slideUp("slow");
        alert("reservation made successfully")
    })
    $("#book").click(function() {
        $("#checkout").slideDown("slow");
    });
    $("#cancel").click(function() {
        location.reload();
    })
})