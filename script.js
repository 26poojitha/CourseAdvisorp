const colleges = [
  {
    id:1, name:"AP Institute of Technology", state:"Andhra Pradesh",
    desc:"Well-known state engineering college with good campus placements.",
    placement:78,
    website:"https://www.apsit.edu.in/?utm_source=chatgpt.com",
    courses:[
      { code:"CSE", name:"B.Tech - Computer Science & Engineering", min_cutoff:85, fees:90000 },
      { code:"ECE", name:"B.Tech - Electronics & Communication", min_cutoff:80, fees:80000 },
      { code:"ME",  name:"B.Tech - Mechanical Engineering", min_cutoff:75, fees:70000 },
    ],
    eligibility: "12th Pass"
  },
  {
    id:2, name:"Telangana Engineering College", state:"Telangana",
    desc:"Government aided college with affordable fees.",
    placement:70, website:"#",
    courses:[
      { code:"CSE", name:"B.Tech - Computer Science & Engineering", min_cutoff:80, fees:60000 },
      { code:"Civil", name:"B.Tech - Civil Engineering", min_cutoff:72, fees:50000 },
      { code:"EEE", name:"B.Tech - Electrical & Electronics", min_cutoff:74, fees:55000 },
    ],
    eligibility: "12th Pass"
  },
  {
    id:3, name:"South India Medical College", state:"Karnataka",
    desc:"Top private medical college with high fees but strong placements in healthcare.",
    placement:85, website:"https://www.citycomcollege.org/?utm_source=chatgpt.com",
    courses:[
      { code:"MBBS", name:"MBBS", min_cutoff:92, fees:450000 },
      { code:"BScN", name:"B.Sc Nursing", min_cutoff:78, fees:90000 }
    ],eligibility: "12th Pass"
  },
  {
    id:4, name:"City Commerce Institute", state:"Andhra Pradesh",
    desc:"Popular for commerce and management courses with internships.",
    placement:66, website:"https://www.citycomcollege.org/?utm_source=chatgpt.com",
    courses:[
      { code:"BCom", name:"B.Com (General)", min_cutoff:60, fees:30000 },
      { code:"BBA", name:"BBA", min_cutoff:65, fees:45000 },
    ],
    eligibility: "12th Pass"
  },
  {
    id:7, name:"Andhra Polytechnic College", state:"Andhra Pradesh",
    desc:"Good for diploma and vocational courses.",
    placement:60, website:"https://andhrapolytechnickakinada.ac.in/",
    courses:[
      { code:"DiplomaCE", name:"Diploma - Civil Engg", min_cutoff:55, fees:25000 },
      { code:"DiplomaME", name:"Diploma - Mechanical Engg", min_cutoff:55, fees:25000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:8, name:"Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)", state:"Telangana",
    desc:"Pharmacy institute with good pharma industry ties.",
    placement:74, website:"https://www.griet.ac.in/",
    courses:[
      { code:"BPharm", name:"B.Pharm", min_cutoff:70, fees:90000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:12, name:"Ideal College of Arts and Sciences", state:"Andhra Pradesh",
    desc:"Good for arts and science undergraduate courses.",
    placement:60, website:"https://idealcollege.edu.in/",
    courses:[
      { code:"BSc", name:"B.Sc - Life Sciences", min_cutoff:62, fees:30000 },
      { code:"BA", name:"B.A (Hons)", min_cutoff:58, fees:28000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:13, name:"Institute of Aeronautical Engineering (IARE), Hyderabad", state:"Telangana",
    desc:"Top management college in region with strong placement cells.",
    placement:83, website:"https://www.iare.ac.in/",
    courses:[
      { code:"BBA", name:"BBA", min_cutoff:75, fees:90000 },
      { code:"BBM", name:"BBM", min_cutoff:74, fees:85000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:14, name:"Greenfield Agricultural University", state:"Karnataka",
    desc:"Focus on agriculture sciences and allied sectors.",
    placement:65, website:"https://greenfieldshyd.com/?utm_source=chatgpt.com",
    courses:[
      { code:"BScAg", name:"B.Sc Agriculture", min_cutoff:60, fees:35000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:15, name:"Coastal Engineering College", state:"Andhra Pradesh",
    desc:"Regional engineering college good for coastal area development programs.",
    placement:68, website:"#",
    courses:[
      { code:"CSE", name:"B.Tech - CSE", min_cutoff:78, fees:65000 },
      { code:"Civil", name:"B.Tech - Civil", min_cutoff:70, fees:60000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:16, name:"Metro Design Institute", state:"Telangana",
    desc:"Design and multimedia courses for creative professionals.",
    placement:69, website:"#",
    courses:[
      { code:"Design", name:"B.Des (Design)", min_cutoff:66, fees:85000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:17, name:"Chalapathi Institute of Pharmaceutical Sciences", state:"Andhra Pradesh",
    desc:"Offers Pharma and biotech related programs.",
    placement:72, website:"https://www.chalapathipharmacy.in/",
    courses:[
      { code:"BPharm", name:"B.Pharm", min_cutoff:72, fees:90000 },
      { code:"BScBio", name:"B.Sc Biotechnology", min_cutoff:68, fees:40000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:22, name:"Commerce & Law Academy", state:"Andhra Pradesh",
    desc:"Commerce and law focused programs with industry tieups.",
    placement:70, website:"https://www.andhraloyolacollege.ac.in/?utm_source=chatgpt.com",
    courses:[
      { code:"BComH", name:"B.Com (Hons)", min_cutoff:68, fees:45000 },
      { code:"LLB", name:"BA LLB", min_cutoff:78, fees:120000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:23, name:"Andhra loyala ", state:"Andhra Pradesh",
    desc:"Affordable technical education for coastal districts.",
    placement:58, website:"https://www.andhraloyolacollege.ac.in/?utm_source=chatgpt.com",
    courses:[
      { code:"DiplomaIT", name:"Diploma - IT", min_cutoff:54, fees:24000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 31,
    name: "Andhra University College of Engineering",
    state: "Andhra Pradesh",
    desc: "One of the oldest engineering colleges in AP with strong academics and placements.",
    placement: 75,
    website: "https://www.andhrauniversity.edu.in/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 85, fees: 95000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 90000 },
      { code: "EEE", name: "B.Tech - Electrical & Electronics Engineering", min_cutoff: 75, fees: 85000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 70, fees: 85000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 70, fees: 80000 },
      { code: "IT",  name: "B.Tech - Information Technology", min_cutoff: 80, fees: 90000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 32,
    name: "JNTU Kakinada (JNTUK)",
    state: "Andhra Pradesh",
    desc: "Renowned AP state university with multiple engineering streams and good placement record.",
    placement: 72,
    website: "https://www.jntuk.edu.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 85, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 70, fees: 80000 },
      { code: "PE",  name: "B.Tech - Petroleum Engineering", min_cutoff: 78, fees: 95000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id:33,
    name: "JNTU Anantapur (JNTUA)",
    state: "Andhra Pradesh",
    desc: "State university with strong engineering programs and emerging placement opportunities.",
    placement: 70,
    website: "https://www.jntua.ac.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 84, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 70, fees: 80000 },
      { code: "EEE", name: "B.Tech - Electrical & Electronics Engineering", min_cutoff: 75, fees: 85000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 34,
    name: "VIT-AP University",
    state: "Andhra Pradesh",
    desc: "Private university with high-tech campus and good international collaborations.",
    placement: 82,
    website: "https://vitap.ac.in/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 90, fees: 180000 },
      { code: "AIML", name: "B.Tech - Artificial Intelligence & Machine Learning", min_cutoff: 88, fees: 190000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 85, fees: 170000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 80, fees: 150000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 78, fees: 150000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 35,
    name: "GVP College of Engineering",
    state: "Andhra Pradesh",
    desc: "Established college with solid industry connections and campus placement support.",
    placement: 68,
    website: "https://www.gvpce.ac.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 82, fees: 90000 },
      { code: "IT",  name: "B.Tech - Information Technology", min_cutoff: 80, fees: 85000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 78, fees: 85000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 36,
    name: "ANITS",
    state: "Andhra Pradesh",
    desc: "Popular engineering college with focus on core branches and campus placements.",
    placement: 70,
    website: "https://www.anits.edu.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 83, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "EEE", name: "B.Tech - Electrical & Electronics Engineering", min_cutoff: 75, fees: 80000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 37,
    name: "SRKR Engineering College",
    state: "Andhra Pradesh",
    desc: "College with strong engineering focus, especially in CSE and ECE branches.",
    placement: 65,
    website: "https://www.srkrec.ac.in/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 82, fees: 85000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 78, fees: 80000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 70, fees: 75000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 38,
    name: "Aditya Engineering College",
    state: "Andhra Pradesh",
    desc: "Private college offering AI/ML courses and good tech placements.",
    placement: 72,
    website: "https://www.aec.edu.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 85, fees: 90000 },
      { code: "AIML", name: "B.Tech - Artificial Intelligence & Machine Learning", min_cutoff: 88, fees: 95000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "IT",  name: "B.Tech - Information Technology", min_cutoff: 82, fees: 85000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 39,
    name: "Sree Vidyanikethan Engineering College",
    state: "Andhra Pradesh",
    desc: "Well-known private engineering college with a large campus and industry links.",
    placement: 70,
    website: "https://www.vidyanikethan.edu/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 83, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "EEE", name: "B.Tech - Electrical & Electronics Engineering", min_cutoff: 75, fees: 80000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 75, fees: 80000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 40,
    name: "KLEF University",
    state: "Andhra Pradesh",
    desc: "Emerging university with biotech and MBA programs along with engineering streams.",
    placement: 68,
    website: "https://www.klef.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 82, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "BT",  name: "B.Tech - Biotechnology", min_cutoff: 78, fees: 90000 },
      { code: "MBA", name: "MBA - Master of Business Administration", min_cutoff: 70, fees: 100000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 41,
    name: "IIT Hyderabad",
    state: "Telangana",
    desc: "Premier institute in Telangana with cutting-edge research and excellent placement records.",
    placement: 95,
    website: "https://iith.ac.in/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 98, fees: 200000 },
      { code: "AI",  name: "B.Tech - Artificial Intelligence", min_cutoff: 95, fees: 200000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 92, fees: 180000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 90, fees: 180000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 42,
    name: "NIT Warangal",
    state: "Telangana",
    desc: "One of India’s top NITs, known for strong placements in IT and core branches.",
    placement: 92,
    website: "https://www.nitw.ac.in/",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 90, fees: 150000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 85, fees: 140000 },
      { code: "ME",  name: "B.Tech - Mechanical Engineering", min_cutoff: 80, fees: 130000 },
      { code: "CE",  name: "B.Tech - Civil Engineering", min_cutoff: 78, fees: 130000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 43,
    name: "JNTU Hyderabad",
    state: "Telangana",
    desc: "State engineering university offering IT, CSE, and ECE programs with decent placement support.",
    placement: 75,
    website: "https://www.jntuh.ac.in/?utm_source=chatgpt.com",
    courses: [
      { code: "CSE", name: "B.Tech - Computer Science & Engineering", min_cutoff: 85, fees: 90000 },
      { code: "ECE", name: "B.Tech - Electronics & Communication Engineering", min_cutoff: 80, fees: 85000 },
      { code: "IT",  name: "B.Tech - Information Technology", min_cutoff: 82, fees: 85000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 44,
    name: "Osmania University",
    state: "Telangana",
    desc: "Premier degree college in Telangana offering arts, science, and commerce courses.",
    placement: 60,
    website: "https://www.osmania.ac.in/",
    courses: [
      { code: "BSc", name: "Bachelor of Science", min_cutoff: 75, fees: 20000 },
      { code: "BCom", name: "Bachelor of Commerce", min_cutoff: 70, fees: 18000 },
      { code: "BA", name: "Bachelor of Arts", min_cutoff: 65, fees: 15000 },
      { code: "MA", name: "Master of Arts", min_cutoff: 60, fees: 25000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 45,
    name: "Osmania Medical College",
    state: "Telangana",
    desc: "One of the top medical colleges in Telangana, known for quality MBBS and MD courses.",
    placement: 80,
    website: "https://www.osmania.ac.in/",
    courses: [
      { code: "MBBS", name: "Bachelor of Medicine & Bachelor of Surgery", min_cutoff: 95, fees: 150000 },
      { code: "MD", name: "Doctor of Medicine", min_cutoff: 90, fees: 200000 }
    ],
    eligibility: "12th Pass"
  },
  {
    id: 46,
    name: "Gandhi Medical College",
    state: "Telangana",
    desc: "Well-known medical college offering MBBS with good hospital exposure.",
    placement: 78,
    website: "https://gmcsecunderabad.org/?utm_source=chatgpt.com",
    courses: [
      { code: "MBBS", name: "Bachelor of Medicine & Bachelor of Surgery", min_cutoff: 94, fees: 140000 }
    ],
    eligibility: "12th Pass"
  },
]
// ---------------------------
// Utilities & Recommendation Logic
// ---------------------------

function recommendCoursesByStream(stream, interest) {
  // Simple mapping rules: stream -> possible courses
  const map = {
    "MPC": ["CSE","ECE","ME","IT","AI"],
    "BiPC": ["MBBS","BScN","BScBiotech","BPharm"],
    "CEC": ["BCom","BBA","BComH","BBM","Finance"],
    "Arts": ["BA","BSc","Design","Law"]
  };
  const interestMap = {
    "Programming": ["CSE","IT","AI"],
    "Design": ["Design"],
    "Healthcare": ["MBBS","BScN","BPharm","BScBio"],
    "Commerce": ["BCom","BComH","BBA","BBAF"],
    "Civil": ["Civil","ME"],
    "General": []
  };
  const base = map[stream] || [];
  const byInterest = interestMap[interest] || [];
  // union with priority to interest
  const union = [...new Set([...byInterest, ...base])];
  // Map codes to friendly names (simple)
  const names = {
    "CSE":"B.Tech - Computer Science",
    "ECE":"B.Tech - ECE",
    "ME":"B.Tech - Mechanical",
    "IT":"B.Tech - Information Technology",
    "AI":"B.Tech - AI & ML",
    "MBBS":"MBBS",
    "BScN":"B.Sc Nursing",
    "BScBiotech":"B.Sc Biotechnology",
    "BPharm":"B.Pharm",
    "BCom":"B.Com",
    "BComH":"B.Com (Hons)",
    "BBA":"BBA",
    "BBAF":"BBA - Finance",
    "Civil":"B.Tech - Civil",
    "Design":"B.Des - Design",
    "BA":"B.A"
  };
  return union.map(code => ({ code, name: names[code] || code }));
}

function scoreCollegeForStudent(college, courseCode, studentMarks, budget, placementPref, preferredState) {
  // Score components: cutoff match, budget fit, placement priority, state preference
  const course = college.courses.find(c=>c.code===courseCode || c.code.toLowerCase()===courseCode.toLowerCase());
  if(!course) return null;

  // cutoffScore: 100 if marks >= cutoff, otherwise scaled
  const cutoff = course.min_cutoff || 0;
  let cutoffScore = 0;
  if(studentMarks >= cutoff) cutoffScore = 100;
  else cutoffScore = Math.max(0, Math.round((studentMarks / cutoff) * 100));

  // budgetScore: 100 if fees <= budget or budget empty, else scaled down
  let budgetScore = 50;
  if(!budget || budget <= 0) budgetScore = 60; // no budget constraint
  else {
    budgetScore = course.fees <= budget ? 100 : Math.max(0, Math.round((budget / course.fees) * 100));
  }

  // placementScore is college placement * (preference weight)
  let placementScore = college.placement || 60;
  // if student wants high placements, weight it more
  let placementWeight = (placementPref==="High")?1.2: (placementPref==="Moderate")?1.0:0.8;
  placementScore = Math.round(placementScore * placementWeight);

  // stateScore: bonus if same state or if preferred state Any
  let stateScore = (preferredState==="Any" || preferredState===college.state) ? 100 : 70;

  // combine with weights
  const total = Math.round( (cutoffScore*0.45) + (budgetScore*0.2) + (placementScore*0.25) + (stateScore*0.1) );
  return {
    course,
    scores:{ cutoffScore, budgetScore, placementScore, stateScore },
    total
  };
}

// generate admission likelihood text
function admissionLikelihood(studentMarks, cutoff){
  if(studentMarks >= cutoff) return "High";
  const diff = cutoff - studentMarks;
  if(diff <= 5) return "Medium";
  return "Low";
}

// ---------------------------
// UI Helpers & Rendering
// ---------------------------

function generateRecommendations(event){
  event.preventDefault();
  const examType = document.getElementById("examType").value;
  const marksRaw = parseFloat(document.getElementById("marks").value || "0");
  const studentMarks = Math.max(0, Math.min(100, marksRaw));
  const stream = document.getElementById("stream").value;
  const preferredState = document.getElementById("state").value;
  const budget = parseFloat(document.getElementById("budget").value || "0");
  const interest = document.getElementById("interest").value;
  const placementPref = document.getElementById("placementPref").value;

  // Suggested courses
  const suggested = recommendCoursesByStream(stream, interest);
  const suggestedHtml = suggested.map(s=>`<div class="card"><strong>${s.name}</strong><div class="small">Code: ${s.code}</div></div>`).join("");
  document.getElementById("suggested-courses").innerHTML = suggestedHtml;

  // Evaluate each college & course and build ranked list
  let results = [];
  colleges.forEach(col => {
    suggested.forEach(sc => {
      const res = scoreCollegeForStudent(col, sc.code, studentMarks, budget, placementPref, preferredState);
      if(res) {
        results.push({
          collegeId: col.id,
          collegeName: col.name,
          state: col.state,
          desc: col.desc,
          website: col.website,
          courseCode: res.course.code,
          courseName: res.course.name,
          fees: res.course.fees,
          cutoff: res.course.min_cutoff || 0,
          placement: col.placement,
          totalScore: res.total,
          detailScores: res.scores,
          likelihood: admissionLikelihood(studentMarks, res.course.min_cutoff || 0)
        });
      }
    });
  });

  // sort by totalScore desc, then by placement
  results.sort((a,b)=> b.totalScore - a.totalScore || b.placement - a.placement );

  // show top 12 results
  const top = results.slice(0, 12);

  if(top.length === 0){
    document.getElementById("recommendations").innerHTML = "<p class='note'>No matching colleges found for your preferences. Try increasing budget, selecting Any state, or different interest.</p>";
    document.getElementById("results").style.display = "block";
    window.currentRecommendations = [];
    return;
  }

  let recHtml = "";
  top.forEach((r, idx) => {
    recHtml += `
      <div class="card">
        <h3>${idx+1}. ${r.courseName} — ${r.collegeName} <span class="small">(${r.state})</span></h3>
        <p class="small">${r.desc}</p>
        <p><b>Cutoff:</b> ${r.cutoff} &nbsp; <b>Your Score:</b> ${studentMarks} &nbsp; <b>Likelihood:</b> ${r.likelihood}</p>
        <p><b>Fees/yr:</b> ₹${r.fees.toLocaleString()} &nbsp; <b>Placement:</b> ${r.placement}%</p>
        <p class="small">Scores: cutoff(${r.detailScores.cutoffScore}), budget(${r.detailScores.budgetScore}), placement(${r.detailScores.placementScore})</p>
        <div style="margin-top:8px">
          <button class="btn" onclick="window.open('${r.website}', '_blank')">View College</button>

        </div>
      </div>
    `;
  });

  document.getElementById("recommendations").innerHTML = recHtml;
  document.getElementById("results").style.display = "block";
  // Save current recommendations for CSV export
  window.currentRecommendations = top;
}

// CSV Download
function downloadRecommendations(){
  const list = window.currentRecommendations || [];
  if(list.length===0){ alert("No recommendations to download."); return; }
  let csv = "Rank,Course,College,State,YourScore,Cutoff,Likelihood,Fees,Placement,Website\n";
  list.forEach((r, idx) => {
    csv += `${idx+1},"${r.courseName}","${r.collegeName}","${r.state}",${r.studentMarks || ""},${r.cutoff},"${r.likelihood}",${r.fees},${r.placement},"${r.website}"\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url; link.download = "recommended_colleges.csv";
  document.body.appendChild(link); link.click(); document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ---------------------------
// Colleges page render & popup
// ---------------------------
function renderAllColleges(){
  const q = (document.getElementById("college-search")?.value || "").toLowerCase().trim();
  const stateFilter = document.getElementById("college-state-filter")?.value || "Any";
  let html = "";
  colleges.forEach(col => {
    if(stateFilter !== "Any" && col.state !== stateFilter) return;
    // match query by name or any course name
    const matchesQuery = q === "" || col.name.toLowerCase().includes(q) || col.courses.some(c=>c.name.toLowerCase().includes(q) || c.code.toLowerCase().includes(q));
    if(!matchesQuery) return;
    html += `
      <div class="card">
        <h3>${col.name} <span class="small">(${col.state})</span></h3>
        <p class="small">${col.desc}</p>
        <p><b>Top courses:</b> ${col.courses.map(c=>c.name+" ("+c.min_cutoff+")").slice(0,3).join(", ")}</p>
        <p class="small"><b>Placement:</b> ${col.placement}%</p>
        <div style="margin-top:8px">
          <button class="btn" onclick='openCollegePopup(${col.id})'>View Details</button>
          <button class="btn" onclick="window.open('${col.website}', '_blank')">View College</button>

        </div>
      </div>`;
  });
  if(html==="") html = "<p class='note'>No colleges found for the selected filters.</p>";
  document.getElementById("college-list").innerHTML = html;
}

function openCollegePopup(collegeId){
  const col = colleges.find(c=>c.id===collegeId);
  if(!col) return;
  document.getElementById("cp-name").innerText = col.name;
  document.getElementById("cp-state").innerText = col.state;
  document.getElementById("cp-desc").innerText = col.desc;
  document.getElementById("cp-placement").innerText = col.placement;
  document.getElementById("cp-fees").innerText = col.courses.map(c=>`₹${c.fees.toLocaleString()}`).join(" / ");
  document.getElementById("cp-link").href = col.website;
  let clHtml = "";
  col.courses.forEach(c=>{
    clHtml += `<li>${c.name} — Cutoff: ${c.min_cutoff}, Fees: ₹${c.fees.toLocaleString()}</li>`;
  });
  document.getElementById("cp-courses").innerHTML = clHtml;
  document.getElementById("college-popup").style.display = "flex";
}

function closeCollegePopup(){
  document.getElementById("college-popup").style.display = "none";
}

// onload hooks
window.onload = function(){
  // render colleges page if present
  if(document.getElementById("college-list")) renderAllColleges();
  // recommend page will wait for form submit
};
function loadColleges() {
    const container = document.getElementById("college-list");

    container.innerHTML = "";

    collegesData.colleges.forEach(college => {
        const card = `
            <div class="college-card">
                <h3>${college.name}</h3>
                <p><strong>State:</strong> ${college.state}</p>
                <p><strong>District:</strong> ${college.district}</p>
                <p><strong>Type:</strong> ${college.type}</p>
                <p><strong>Courses:</strong> ${college.courses.join(", ")}</p>
            </div>
        `;
        container.innerHTML += card;
    });
}
