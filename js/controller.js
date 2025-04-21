// Controller: handles events and coordinates between model and view
const MissionController = {
  init() {
    this.bindEvents();
    MissionView.renderTable(MissionModel.missions);
  },

  bindEvents() {
    document.querySelector("#submitBtn").addEventListener("click", this.handleSubmit.bind(this));
    document.querySelector("#searchInput").addEventListener("input", this.handleSearch.bind(this));
    document.querySelector("#sortSelect").addEventListener("change", this.handleSort.bind(this));
  },

  handleSubmit() {
    const mission = {
      missionName: document.querySelector("#missionName").value.trim(),
      agency: document.querySelector("#agency").value.trim(),
      destination: document.querySelector("#destination").value.trim(),
      launchYear: parseInt(document.querySelector("#launchYear").value.trim())
    };

    if (!mission.missionName || !mission.agency || !mission.destination || isNaN(mission.launchYear)) {
      alert("Please fill in all fields correctly.");
      return;
    }

    if (MissionModel.editingIndex !== -1) {
      MissionModel.update(MissionModel.editingIndex, mission);
    } else {
      MissionModel.add(mission);
    }

    MissionView.resetForm();
    MissionView.renderTable(MissionModel.missions);
  },

  edit(index) {
    MissionModel.editingIndex = index;
    MissionView.fillForm(MissionModel.missions[index]);
  },

  delete(index) {
    if (confirm("Are you sure you want to delete this mission?")) {
      MissionModel.delete(index);
      MissionView.renderTable(MissionModel.missions);
    }
  },

  handleSearch() {
    const query = document.querySelector("#searchInput").value;
    const filtered = MissionModel.search(query);
    MissionView.renderTable(filtered);
  },

  handleSort() {
    const field = document.querySelector("#sortSelect").value;
    MissionModel.sortBy(field);
    MissionView.renderTable(MissionModel.missions);
  }
};

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", () => MissionController.init()); 