// Model: handles data and logic
const MissionModel = {
  missions: [
    // USA
    { missionName: "Apollo 11", agency: "NASA", destination: "Moon", launchYear: 1969 },
    { missionName: "Voyager 1", agency: "NASA", destination: "Interstellar Space", launchYear: 1977 },
    { missionName: "Mars Rover", agency: "NASA", destination: "Mars", launchYear: 2020 },
  
    // Soviet Union (Russia)
    { missionName: "Sputnik 1", agency: "USSR", destination: "Orbit (Earth)", launchYear: 1957 },
    { missionName: "Luna 2", agency: "USSR", destination: "Moon", launchYear: 1959 },
    { missionName: "Venera 7", agency: "USSR", destination: "Venus", launchYear: 1970 },
  
    // India
    { missionName: "Chandrayaan-1", agency: "ISRO", destination: "Moon", launchYear: 2008 },
    { missionName: "Chandrayaan-2", agency: "ISRO", destination: "Moon", launchYear: 2019 },
    { missionName: "Mangalyaan", agency: "ISRO", destination: "Mars", launchYear: 2013 },
  
    // China
    { missionName: "Chang'e 1", agency: "CNSA", destination: "Moon", launchYear: 2007 },
    { missionName: "Chang'e 4", agency: "CNSA", destination: "Moon", launchYear: 2018 },
    { missionName: "Tianwen-1", agency: "CNSA", destination: "Mars", launchYear: 2020 },
  
    // European Space Agency
    { missionName: "Rosetta", agency: "ESA", destination: "Comet 67P", launchYear: 2004 },
    { missionName: "Gaia", agency: "ESA", destination: "Galaxy Mapping", launchYear: 2013 },
  
    // Japan
    { missionName: "H-IIA", agency: "JAXA", destination: "Low Earth Orbit", launchYear: 2001 },
    { missionName: "Hayabusa 2", agency: "JAXA", destination: "Asteroid Ryugu", launchYear: 2014 },
  
    // Other International Collaborations
    { missionName: "International Space Station", agency: "NASA/ESA/Roscosmos/JAXA/CSA", destination: "Low Earth Orbit", launchYear: 1998 },
  ],
  editingIndex: -1,

  add(mission) {
    this.missions.push(mission);
  },

  update(index, updatedMission) {
    this.missions[index] = updatedMission;
    this.editingIndex = -1;
  },

  delete(index) {
    this.missions.splice(index, 1);
  },

  search(query) {
    query = query.toLowerCase();
    return this.missions.filter(m => 
      m.missionName.toLowerCase().includes(query) || 
      m.launchYear.toString().includes(query)
    );
  },

  sortBy(field) {
    this.missions.sort((a, b) => {
      if (typeof a[field] === 'string') {
        return a[field].localeCompare(b[field]);
      } else {
        return a[field] - b[field];
      }
    });
  }
}; 