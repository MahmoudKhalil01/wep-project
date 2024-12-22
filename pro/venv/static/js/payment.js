document.getElementById("payButton").addEventListener("click", function () {
        // Get form values
        const email = document.getElementById("email").value;
        const cardNumber = document.getElementById("card_number").value;
        const expiryDate = document.getElementById("expiry_date").value;
        const cvc = document.getElementById("cvc").value;
    
        // Validate inputs
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }
    
        if (!validateCardNumber(cardNumber)) {
            alert("Please enter a valid card number.");
            return;
        }
    
        if (!validateExpiryDate(expiryDate)) {
            alert("Please enter a valid expiry date (MM/YY).");
            return;
        }
    
        if (!validateCVC(cvc)) {
            alert("Please enter a valid CVC (3 digits).");
            return;
        }
        if(validateEmail(email)&&validateCardNumber(cardNumber)&&validateExpiryDate(expiryDate)&&validateCVC(cvc)){
        alert("Payment submitted for email");
        return;
    }

    
        // Submit the form
        document.getElementById("paymentForm").submit();
    });
    
    // Validation functions
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validateCardNumber(cardNumber) {
        const re = /^\d{16}$/; // Simple regex for 16 digits
        return re.test(cardNumber.replace(/\s/g, ""));
    }
    
    function validateExpiryDate(expiryDate) {
        const re = /^(0[1-9]|1[0-2])\/\d{2}$/; // MM/YY format
        return re.test(expiryDate);
    }
    
    function validateCVC(cvc) {
        const re = /^\d{3}$/; // 3 digits
        return re.test(cvc);
    }
