document.addEventListener("DOMContentLoaded", function(){

  // Theme toggle
  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", ()=>document.body.classList.toggle("dark"));

  // -------------------- SERVICES --------------------
  window.openService = function(title, desc){
    document.getElementById("serviceTitle").innerText = title;
    document.getElementById("serviceDescription").innerText = desc;
    document.getElementById("serviceModal").style.display="block";
  }
  window.closeModal = function(){ document.getElementById("serviceModal").style.display="none"; }

  const searchInput = document.getElementById("searchService");
  searchInput.addEventListener("keyup", function(){
    const val = searchInput.value.toLowerCase();
    document.querySelectorAll(".service").forEach(card=>{
      card.style.display = card.innerText.toLowerCase().includes(val)?"block":"none";
    });
  });

  // -------------------- ANNOUNCEMENTS --------------------
  let announcements = [
    {title:"Senior Citizens Meeting", time:"March 20, 2026, 10:00 AM", location:"Barangay Hall", description:"Monthly gathering to discuss programs for senior citizens."},
    {title:"Community Cleanup Drive", time:"March 22, 2026, 7:00 AM", location:"Barangay Park", description:"Volunteers clean streets and public areas."},
    {title:"Barangay Health Fair", time:"March 25, 2026, 8:00 AM - 3:00 PM", location:"Covered Court", description:"Free medical checkups and vaccination for all residents."}
  ];

  const announcementContainer = document.getElementById("announcementContainer");
  const announcementSearch = document.getElementById("announcementSearch");
  const announcementModal = document.getElementById("announcementModal");
  const announcementTitle = document.getElementById("announcementTitle");
  const announcementTime = document.getElementById("announcementTime");
  const announcementLocation = document.getElementById("announcementLocation");
  const announcementDescription = document.getElementById("announcementDescription");

  function renderAnnouncements(filter=""){
    announcementContainer.innerHTML="";
    let filtered = announcements.filter(a=>a.title.toLowerCase().includes(filter.toLowerCase()));
    filtered.forEach((a,i)=>{
      const card = document.createElement("div");
      card.classList.add("announcement-card");
      card.innerHTML = `<h3>${a.title}</h3><p>${a.time} | ${a.location}</p>`;
      card.addEventListener("click", ()=>openAnnouncementModal(i));
      announcementContainer.appendChild(card);
    });
  }

  function openAnnouncementModal(i){
    const a = announcements[i];
    announcementTitle.textContent = a.title;
    announcementTime.textContent = a.time;
    announcementLocation.textContent = a.location;
    announcementDescription.textContent = a.description;
    announcementModal.style.display="block";
  }

  window.closeAnnouncementModal = function(){announcementModal.style.display="none";}

  announcementSearch.addEventListener("keyup", ()=>renderAnnouncements(announcementSearch.value));
  renderAnnouncements();

  // -------------------- OFFICIALS --------------------
  let officials = [
    {name:"Hon. Juan Dela Cruz", position:"Captain", age:55, schedule:"Mon-Fri 8AM-5PM"},
    {name:"Maria Santos", position:"Secretary", age:48, schedule:"Mon-Fri 8AM-5PM"},
    {name:"Pedro Reyes", position:"Treasurer", age:50, schedule:"Mon-Fri 8AM-5PM"},
    {name:"Ana Lopez", position:"Kagawad", age:45, schedule:"Tue-Thu 9AM-4PM"},
    {name:"Carlos Mendoza", position:"Kagawad", age:42, schedule:"Mon-Wed 9AM-4PM"},
    {name:"Sofia Ramos", position:"Kagawad", age:47, schedule:"Wed-Fri 9AM-4PM"}
  ];

  const officialsContainer = document.getElementById("officialsContainer");
  const officialModal = document.getElementById("officialModal");
  const officialName = document.getElementById("officialName");
  const officialPosition = document.getElementById("officialPosition");
  const officialAge = document.getElementById("officialAge");
  const officialSchedule = document.getElementById("officialSchedule");

  function renderOfficials(){
    officialsContainer.innerHTML="";
    officials.forEach((o,i)=>{
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML=`<h3>${o.name}</h3><p>${o.position}</p>`;
      card.addEventListener("click", ()=>openOfficialModal(i));
      officialsContainer.appendChild(card);
    });
  }

  function openOfficialModal(i){
    const o = officials[i];
    officialName.textContent = o.name;
    officialPosition.textContent = o.position;
    officialAge.textContent = o.age;
    officialSchedule.textContent = o.schedule;
    officialModal.style.display="block";
  }

  window.closeOfficialModal = function(){officialModal.style.display="none";}

  renderOfficials();

  // -------------------- CONTACT FORM --------------------
  const contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    if(!name||!email||!message){ alert("Please fill all fields");}
    else{ alert("Message Sent!"); }
  });

});