let currentStep = -1;

function toggleIngredients() {
  const ingredients = document.getElementById("ingredients");

  if (ingredients.style.display === "block") {
    ingredients.style.display = "none";
  } else {
    ingredients.style.display = "block";
  }
}

function toggleSteps() {
  const steps = document.getElementById("steps");

  if (steps.style.display === "block") {
    steps.style.display = "none";
  } else {
    steps.style.display = "block";
  }
}

function startCooking() {
  const steps = document.querySelectorAll("#stepList li");

  // Remove previous highlights
  steps.forEach((step) => step.classList.remove("active"));

  currentStep = 0;

  if (steps.length > 0) {
    document.getElementById("steps").style.display = "block";
    steps[currentStep].classList.add("active");
    updateProgress();
  }
}

function nextStep() {
  const steps = document.querySelectorAll("#stepList li");

  if (currentStep === -1) {
    alert("Click 'Start Cooking' first!");
    return;
  }

  steps[currentStep].classList.remove("active");

  currentStep++;

  if (currentStep < steps.length) {
    steps[currentStep].classList.add("active");
    updateProgress();
  } else {
    document.getElementById("progressBar").style.width = "100%";
    alert("🎉 Recipe Completed! Enjoy your Chocolate Cake!");
  }
}

function updateProgress() {
  const totalSteps = document.querySelectorAll("#stepList li").length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  document.getElementById("progressBar").style.width = progress + "%";
}

