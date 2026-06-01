const form = document.getElementById("userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;

  localStorage.setItem("name", name);
  localStorage.setItem("age", age);

  displayUserInfo();
});

function calculateMonths(age) {
  return age * 12;
}

function displayUserInfo() {
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");

  if (!name || !age) return;

  document.getElementById("greeting").innerHTML =
    `<h2>Hello, ${name}! </h2>`;

  document.getElementById("months").innerHTML =
    `You are <strong>${calculateMonths(age)}</strong> months old.`;

  if (age >= 18) {
    document.getElementById("adultContent").innerHTML =
      `<p class="text-green-600">You can access adult content.</p>`;
  } else {
    document.getElementById("adultContent").innerHTML =
      `<p class="text-red-600"> You are too young for adult content.</p>`;
  }

  let quotes = "";

  for (let i = 1; i <= 5; i++) {
    quotes += `
      <div class="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-lg">
        Keep pushing forward. Success comes to those who never quit!
      </div>
    `;
  }

  document.getElementById("quotes").innerHTML = quotes;
}

displayUserInfo();