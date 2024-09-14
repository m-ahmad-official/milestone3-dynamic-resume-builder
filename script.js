document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("resumeForm");
  var resumeContainer = document.getElementById("resumeContainer");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var dob = document.getElementById("dob").value;
    var genderMale = document.getElementById("male").checked;
    var genderFemale = document.getElementById("female").checked;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var institution = document.getElementById("institution").value;
    var year = document.getElementById("year").value;
    var company = document.getElementById("company").value;
    var position = document.getElementById("position").value;
    var duration = document.getElementById("duration").value;
    var skills = document.getElementById("skills").value;
    if (
      !name ||
      !dob ||
      (!genderMale && !genderFemale) ||
      !email ||
      !phone ||
      !degree ||
      !institution ||
      !year ||
      !company ||
      !position ||
      !duration ||
      !skills
    ) {
      alert("Please fill out all required fields.");
      return;
    }
    var gender = genderMale ? "Male" : "Female";
    resumeContainer.innerHTML =
      "\n      <h2>Personal Information</h2>\n      <p><strong>Full Name:</strong> "
        .concat(name, "</p>\n      <p><strong>Date of Birth:</strong> ")
        .concat(dob, "</p>\n      <p><strong>Gender:</strong> ")
        .concat(gender, "</p>\n      <p><strong>Email:</strong> ")
        .concat(email, "</p>\n      <p><strong>Phone:</strong> ")
        .concat(
          phone,
          "</p>\n      <br/>\n\n      <h2>Education</h2>\n      <p><strong>Degree:</strong> "
        )
        .concat(degree, "</p>\n      <p><strong>Institution:</strong> ")
        .concat(institution, "</p>\n      <p><strong>Year:</strong> ")
        .concat(
          year,
          "</p>\n\n      <h2>Work Experience</h2>\n      <p><strong>Company:</strong> "
        )
        .concat(company, "</p>\n      <p><strong>Position:</strong> ")
        .concat(position, "</p>\n      <p><strong>Duration:</strong> ")
        .concat(duration, "</p>\n\n      <h2>Skills</h2>\n      <ul>")
        .concat(
          skills
            .split(",")
            .map(function (skill) {
              return "<li>".concat(skill.trim(), "</li>");
            })
            .join(""),
          "</ul>\n    "
        );
    resumeContainer.style.display = "block";
  });
});
