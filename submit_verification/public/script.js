// // script.js
// document.addEventListener('DOMContentLoaded', async () => {
//     document.getElementById('submitBtn').addEventListener('click', submitVerification); 
//     // Function to submit user verification details
//     async function submitVerification() {
//         const name = document.getElementById('name').value;
//         const hashValue = document.getElementById('hashValue').value;

//         try {
//             const response = await fetch('https://submit-verification.onrender.com//submit-verification', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ name, hashValue }),
//             });

//             const result = await response.json();

//             if (result.success) {
//                 console.log('Verification submitted successfully');
//                 // Optionally, you can redirect the user or show a success message
//             } else {
//                 console.error('Error submitting verification:', result.error);
//                 // Handle the error, show a message to the user, etc.
//             }
//         } catch (error) {
//             console.error('Error submitting verification:', error.message);
//             // Handle the error, show a message to the user, etc.
//         }
//     }
// });



// Function to submit passenger verification details
// Function to submit passenger verification details
// Function to submit passenger verification details
async function submitPassengerVerification() {
    const name = document.getElementById('passengerName').value;
    const hashValue = document.getElementById('passengerHashValue').value;
    const walletAddress = document.getElementById('passengerWalletAddress').value;
  
    try {
        const response = await fetch('https://submit-verification.onrender.com/submit-passenger-verification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, hashValue, walletAddress }),
        });
  
        const result = await response.json();
  
        if (result.success) {
            console.log('Passenger verification submitted successfully');
            alert('Passenger verification submitted successfully. Please wait for admin verification.');
            if (result.id) {
                alert(`Your ID is: ${result.id}`);
            } else {
                alert('Your verification is submitted and is pending admin verification.');
            }
        } else {
            console.error('Error submitting passenger verification:', result.error);
            alert(result.error); // Display the error message in an alert
        }
    } catch (error) {
        console.error('Error submitting passenger verification:', error.message);
        alert('Error submitting passenger verification. Please try again.');
    }
  }
  
// Function to submit driver verification details
// Function to submit driver verification details
async function submitDriverVerification() {
    const name = document.getElementById('driverName').value;
    const hashValue = document.getElementById('driverHashValue').value;
    const walletAddress = document.getElementById('driverWalletAddress').value;
  
    try {
        const response = await fetch('http://localhost:3003/submit-driver-verification', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, hashValue, walletAddress }),
        });
  
        const result = await response.json();
  
        if (result.success) {
            console.log('Driver verification submitted successfully');
            alert('Driver verification submitted successfully. Please wait for admin verification.');
            if (result.id) {
                alert(`Your ID is: ${result.id}`);
            } else {
                alert('Your verification is submitted and is pending admin verification.');
            }
        } else {
            console.error('Error submitting driver verification:', result.error);
            alert(result.error); // Display the error message in an alert
        }
    } catch (error) {
        console.error('Error submitting driver verification:', error.message);
        alert('Error submitting driver verification. Please try again.');
    }
  }
  function checkstatus() {
    // Assuming the verification server is running on localhost:3000
    window.location.href = 'http://localhost:3005'; // Change this URL as needed
}
