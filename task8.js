function calculateTotal() {
    // Fetch the values from the input fields
    var wage = document.getElementById("monthly-wage").value;
    var days = document.getElementById("worked-days").value;

    // Check if the inputs are not empty
    if (wage && days) {
        // Calculate total payment
        var total = wage * days;

        // Display the result in the paragraph with id "total-payment"
        document.getElementById("total-payment").innerText = "Total payment is: " + total;
    } else {
        // If inputs are empty, show a warning
        document.getElementById("total-payment").innerText = "Please enter both values.";
    }
}
