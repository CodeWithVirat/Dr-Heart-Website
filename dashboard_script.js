// Function to run a test
function runTest() {
    alert("Running test..."); // Replace with actual test logic
}

// Function to open the test modal
function openTestModal() {
    document.getElementById("testModal").style.display = "block";
}

// Function to close the test modal
function closeTestModal() {
    document.getElementById("testModal").style.display = "none";
}

// Event listener for the "Run a Test Now" button
document.querySelector('.test-button button').addEventListener('click', openTestModal);

// Event listener for closing the modal
document.querySelector('.close').addEventListener('click', closeTestModal);

// Validate and submit the form data with animation
document.querySelector('#testModal form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    if (form.checkValidity()) {
        closeTestModal();
        setTimeout(() => {
            alert('Test submitted successfully!');
        }, 300); // Transition duration
    } else {
        form.reportValidity();
    }
});
