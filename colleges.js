const colleges = [
  // ===== ANDHRA PRADESH ENGINEERING =====
  {
    name: "Andhra University College of Engineering",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    type: "Engineering",
    courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "IT"]
  },
  {
    name: "JNTU Kakinada (JNTUK)",
    state: "Andhra Pradesh",
    district: "Kakinada",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical", "Civil", "Petroleum"]
  },
  {
    name: "JNTU Anantapur (JNTUA)",
    state: "Andhra Pradesh",
    district: "Anantapur",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical", "Civil", "EEE"]
  },
  {
    name: "VIT-AP University",
    state: "Andhra Pradesh",
    district: "Amaravati",
    type: "Engineering",
    courses: ["CSE", "AIML", "ECE", "Mechanical", "Civil"]
  },
  {
    name: "GVP College of Engineering",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    type: "Engineering",
    courses: ["CSE", "IT", "ECE", "Mechanical"]
  },
  {
    name: "ANITS",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    type: "Engineering",
    courses: ["CSE", "ECE", "EEE", "Mechanical"]
  },
  {
    name: "SRKR Engineering College",
    state: "Andhra Pradesh",
    district: "Bhimavaram",
    type: "Engineering",
    courses: ["CSE", "ECE", "Civil", "Mechanical"]
  },
  {
    name: "Aditya Engineering College",
    state: "Andhra Pradesh",
    district: "East Godavari",
    type: "Engineering",
    courses: ["CSE", "AIML", "ECE", "IT"]
  },
  {
    name: "Sree Vidyanikethan Engineering College",
    state: "Andhra Pradesh",
    district: "Tirupati",
    type: "Engineering",
    courses: ["CSE", "ECE", "EEE", "Mechanical"]
  },
  {
    name: "KLEF University",
    state: "Andhra Pradesh",
    district: "Guntur",
    type: "Engineering",
    courses: ["CSE", "ECE", "Biotech", "MBA"]
  },
  {
    name: "RVR & JC College of Engineering",
    state: "Andhra Pradesh",
    district: "Guntur",
    type: "Engineering",
    courses: ["CSE", "ECE", "IT", "Mechanical"]
  },
  {
    name: "Lakireddy Bali Reddy College of Engineering",
    state: "Andhra Pradesh",
    district: "Krishna",
    type: "Engineering",
    courses: ["CSE", "ECE", "Civil", "Mechanical"]
  },
  {
    name: "Vignan’s Foundation for Science, Tech & Research",
    state: "Andhra Pradesh",
    district: "Guntur",
    type: "Engineering",
    courses: ["CSE", "ECE", "AIML", "IT"]
  },
  {
    name: "QIS College of Engineering",
    state: "Andhra Pradesh",
    district: "Ongole",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical"]
  },
  {
    name: "PACE Institute of Technology & Sciences",
    state: "Andhra Pradesh",
    district: "Ongole",
    type: "Engineering",
    courses: ["CSE", "IT", "ECE"]
  },
  {
    name: "Vishnu Institute of Technology",
    state: "Andhra Pradesh",
    district: "Bhimavaram",
    type: "Engineering",
    courses: ["CSE", "ECE", "AIML"]
  },
  {
    name: "Gudlavalleru Engineering College",
    state: "Andhra Pradesh",
    district: "Krishna",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical"]
  },

  // ===== ANDHRA PRADESH DEGREE =====
  {
    name: "Andhra Loyola College",
    state: "Andhra Pradesh",
    district: "Vijayawada",
    type: "Degree",
    courses: ["BSc", "BCom", "BA", "MSc"]
  },
  {
    name: "PB Siddhartha College",
    state: "Andhra Pradesh",
    district: "Vijayawada",
    type: "Degree",
    courses: ["BSc", "BCom", "MBA"]
  },
  {
    name: "Dr. Lankapalli Bullayya College",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    type: "Degree",
    courses: ["BSc", "BBA", "MSc"]
  },

  // ===== ANDHRA PRADESH MEDICAL =====
  {
    name: "Andhra Medical College",
    state: "Andhra Pradesh",
    district: "Visakhapatnam",
    type: "Medical",
    courses: ["MBBS", "MD", "MS"]
  },
  {
    name: "Sri Venkateswara Medical College",
    state: "Andhra Pradesh",
    district: "Tirupati",
    type: "Medical",
    courses: ["MBBS", "MD"]
  },
  {
    name: "Guntur Medical College",
    state: "Andhra Pradesh",
    district: "Guntur",
    type: "Medical",
    courses: ["MBBS"]
  },

  // ===== TELANGANA ENGINEERING =====
  {
    name: "IIT Hyderabad",
    state: "Telangana",
    district: "Sangareddy",
    type: "Engineering",
    courses: ["CSE", "AI", "ECE", "Mechanical"]
  },
  {
    name: "NIT Warangal",
    state: "Telangana",
    district: "Warangal",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical", "Civil"]
  },
  {
    name: "JNTU Hyderabad",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "ECE", "IT"]
  },
  {
    name: "CBIT",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical"]
  },
  {
    name: "Vasavi College of Engineering",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "ECE", "IT"]
  },
  {
    name: "VNR Vignana Jyothi Institute of Engineering",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "ECE", "IT", "Mechanical"]
  },
  {
    name: "GRIET",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "IT", "ECE"]
  },
  {
    name: "MGIT",
    state: "Telangana",
    district: "Hyderabad",
    type: "Engineering",
    courses: ["CSE", "ECE", "IT"]
  },
  {
    name: "IARE",
    state: "Telangana",
    district: "Dundigal",
    type: "Engineering",
    courses: ["CSE", "ECE", "Mechanical"]
  },

  // ===== TELANGANA DEGREE =====
  {
    name: "Osmania University",
    state: "Telangana",
    district: "Hyderabad",
    type: "Degree",
    courses: ["BSc", "BCom", "BA", "MA"]
  },
  {
    name: "Nizam College",
    state: "Telangana",
    district: "Hyderabad",
    type: "Degree",
    courses: ["BCom", "BBA", "BA"]
  },
  {
    name: "St. Francis College for Women",
    state: "Telangana",
    district: "Hyderabad",
    type: "Degree",
    courses: ["BSc", "BBA", "BA"]
  },

  // ===== TELANGANA MEDICAL =====
  {
    name: "Osmania Medical College",
    state: "Telangana",
    district: "Hyderabad",
    type: "Medical",
    courses: ["MBBS", "MD"]
  },
  {
    name: "Gandhi Medical College",
    state: "Telangana",
    district: "Hyderabad",
    type: "Medical",
    courses: ["MBBS"]
  },
  {
    name: "Kakatiya Medical College",
    state: "Telangana",
    district: "Warangal",
    type: "Medical",
    courses: ["MBBS", "PG"]
  }
];

export default colleges;
