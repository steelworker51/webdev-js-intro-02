"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution");
const willMeetElement = document.getElementById("will-meet-resolution");
const submissionBtn = document.getElementById("submission-btn");

// Declare your variables here.
const currentYear = "2024";
const resolution = "become better at programming, maybe change fields";
const willMeet = "yes";

// Function to update the current year
function updateCurrentYear() {
    yearElement.innerText = currentYear;
}

// Function to update the resolution
function updateResolution() {
    resolutionElement.innerText = resolution;
}

// Function to update whether the resolution will be met
function updateWillMeetResolution() {
    willMeetElement.innerText = willMeet;
}

// Function to render all updates
function render() {
    updateCurrentYear();
    updateResolution();
    updateWillMeetResolution();
}

// Event listener for the submission button
submissionBtn.addEventListener("click", function () {
    render();
});

