document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("resumeForm") as HTMLFormElement;
  const resumeContainer = document.getElementById(
    "resumeContainer"
  ) as HTMLElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const dob = (document.getElementById("dob") as HTMLInputElement).value;
    const genderMale = (document.getElementById("male") as HTMLInputElement)
      .checked;
    const genderFemale = (document.getElementById("female") as HTMLInputElement)
      .checked;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement)
      .value;
    const institution = (
      document.getElementById("institution") as HTMLInputElement
    ).value;
    const year = (document.getElementById("year") as HTMLInputElement).value;

    const company = (document.getElementById("company") as HTMLInputElement)
      .value;
    const position = (document.getElementById("position") as HTMLInputElement)
      .value;
    const duration = (document.getElementById("duration") as HTMLInputElement)
      .value;

    const skills = (document.getElementById("skills") as HTMLInputElement)
      .value;

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

    const gender = genderMale ? "Male" : "Female";

    resumeContainer.innerHTML = `
      <h2>Personal Information</h2>
      <p><strong>Full Name:</strong> ${name}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <h2>Education</h2>
      <p><strong>Degree:</strong> ${degree}</p>
      <p><strong>Institution:</strong> ${institution}</p>
      <p><strong>Year:</strong> ${year}</p>

      <h2>Work Experience</h2>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Duration:</strong> ${duration}</p>

      <h2>Skills</h2>
      <ul>${skills
        .split(",")
        .map((skill) => `<li>${skill.trim()}</li>`)
        .join("")}</ul>
    `;

    resumeContainer.style.display = "block";
  });
});
