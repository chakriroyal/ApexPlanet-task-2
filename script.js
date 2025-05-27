 document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("formMessage");
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !emailRegex.test(email)) {
        message.textContent = "Please provide a valid name and email.";
        message.style.color = "red";
      } else {
        message.textContent = "Form submitted successfully!";
        message.style.color = "green";
        document.getElementById("contactForm").reset();
      }
    });

    // To-Do list logic
    function addTask() {
      const taskInput = document.getElementById("taskInput");
      const taskList = document.getElementById("taskList");
      if (taskInput.value.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = taskInput.value;
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => li.remove();
        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = "";
      }
    }

    // Image Gallery logic
    function addImage() {
      const url = document.getElementById("imgUrl").value;
      const container = document.getElementById("imageContainer");
      if (url.trim() !== "") {
        const img = document.createElement("img");
        img.src = url;
        img.alt = "Gallery Image";
        const wrapper = document.createElement("div");
        wrapper.appendChild(img);
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => wrapper.remove();
        wrapper.appendChild(removeBtn);
        container.appendChild(wrapper);
        document.getElementById("imgUrl").value = "";
      }
    }