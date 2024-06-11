document.addEventListener("DOMContentLoaded", function () {
  const addReviewButtons = document.querySelectorAll(".add-review-button")

  addReviewButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const reviewSection = this.parentElement
      const nameInput = reviewSection.querySelector(".name-input")
      const reviewInput = reviewSection.querySelector(".review-input")
      const name = nameInput.value
      const reviewText = reviewInput.value

      if (name.trim() !== "" && reviewText.trim() !== "") {
        const newReview = document.createElement("div")
        newReview.classList.add("review")
        newReview.innerHTML = `<strong>${name}:</strong> ${reviewText}`
        reviewSection.querySelector(".reviews").appendChild(newReview)
        nameInput.value = ""
        reviewInput.value = ""
      }
    })
  })
})

// Obtiene todos los elementos con la clase "submitButton"
const submitButtons = document.querySelectorAll(".button_slide")

// Itera sobre cada botón y agrega un evento de clic
submitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Muestra un mensaje de alerta cuando se hace clic en el botón
    alert("informacion enviada con exito")
  })
})
