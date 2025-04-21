// View: handles UI rendering
const MissionView = {
  renderTable(missions) {
    const tableBody = document.querySelector("#missionTable tbody");
    if (!tableBody) return;
    
    tableBody.innerHTML = "";

    missions.forEach((mission, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${mission.missionName}</td>
        <td>${mission.agency}</td>
        <td>${mission.destination}</td>
        <td>${mission.launchYear}</td>
        <td>
          <div class="action-buttons">
            <button class="edit-btn" onclick="MissionController.edit(${index})">Edit</button>
            <button class="delete-btn" onclick="MissionController.delete(${index})">Delete</button>
          </div>
        </td>
      `;
      tableBody.appendChild(row);
    });
  },

  resetForm() {
    document.querySelector("#missionName").value = "";
    document.querySelector("#agency").value = "";
    document.querySelector("#destination").value = "";
    document.querySelector("#launchYear").value = "";
    const btn = document.querySelector("#submitBtn");
    btn.textContent = "Add Mission";
    btn.classList.remove("update-mode");
  },

  fillForm(mission) {
    document.querySelector("#missionName").value = mission.missionName;
    document.querySelector("#agency").value = mission.agency;
    document.querySelector("#destination").value = mission.destination;
    document.querySelector("#launchYear").value = mission.launchYear;
    const btn = document.querySelector("#submitBtn");
    btn.textContent = "Update Mission";
    btn.classList.add("update-mode");
  }
}; 