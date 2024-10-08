var resume = {
    "name": "Jeba Priya G.",
    "contact_info": {
      "present_address": {
        "street": "2-42/1, Manavalapuram, Puthalam post",
        "city": "Kanyakumari District",
        "state": "Tamil Nadu",
        "zip": "629602",
        "country": "India"
      },
      "phone": "+91 9486221695",
      "email": "jebapriya482001@gmail.com"
    },
    "career_objective": "To work in a progressive Organization that incorporates varied spectrums of work & diversity, this endows consistency, competency & expertise in professional as well as social spheres, enabling collective excellence and technical growth, personal fulfillment with welcome attitude for new ideas and concepts to enhance the overall growth of the organization.",
    "education": [
      {
        "course": "B.Ed Physical Science",
        "institution": "Vivekananda College of Education, Agasteeswaram",
        "university": "Tamilnadu Teachers Education University",
        "year_of_passing": "2023",
        "percentage": "Present"
      },
      {
        "course": "B.Sc Physics",
        "institution": "Womens’s Christian College, Nagercoil",
        "university": "M.S. University",
        "year_of_passing": "2021",
        "percentage": "82.7%"
      },
      {
        "course": "HSC",
        "institution": "Little Flower Girl’s Higher Secondary School, Ramanputhur",
        "board": "State Board, Tamil Nadu",
        "year_of_passing": "2018",
        "percentage": "63%"
      },
      {
        "course": "SSLC",
        "institution": "LMPC Higher Secondary School, Puthalam",
        "board": "State Board, Tamil Nadu",
        "year_of_passing": "2016",
        "percentage": "79.2%"
      }
    ],
    "computer_skills": [
      "Office Automation",
      "Internet",
      "Web Designing"
    ],
    "strengths": [
      "Positive Attitude",
      "Punctual",
      "Self-confidence",
      "Co-operative",
      "Self-Motivated",
      "Team player delivering results under pressure",
      "Analytical and problem-solving skills"
    ],
    "skills": [
      "Flexible to adapt to any new environment and work on any project",
      "Good Communication skills",
      "Quick learner",
      "Hardworking with proven analytical skills",
      "Ability to work individually",
      "Problem solving",
      "Multi-Tasking",
      "Excellent interpersonal skills",
      "Self-motivated and proven ability to motivate others"
    ],
    "personal_details": {
      "age": 22,
      "date_of_birth": "2001-08-04",
      "gender": "Female",
      "father_name": "Gnanasekar P",
      "nationality": "Indian",
      "religion": "Christian",
      "languages_known": [
        "Tamil",
        "English"
      ]
    },
    "declaration": "I hereby declare that above given information is best of my knowledge and if it found wrong then my candidature will be illegal.",
    "signature": {
      "place": "",
      "date": "",
      "name": "Jeba Priya G."
    }
  };
  
  // Using for loop
  console.log("Education:");
  for (var i = 0; i < resume.education.length; i++) {
    console.log(resume.education[i]);
  }
  
  console.log("\nSkills:");
  for (var i = 0; i < resume.skills.length; i++) {
    console.log(resume.skills[i]);
  }
  
  // Using for...in loop
  console.log("\nContact Info:");
  for (var key in resume.contact_info) {
    if (resume.contact_info.hasOwnProperty(key)) {
      console.log(key + ": " + JSON.stringify(resume.contact_info[key]));
    }
  }
  
  console.log("\nPersonal Details:");
  for (var key in resume.personal_details) {
    if (resume.personal_details.hasOwnProperty(key)) {
      console.log(key + ": " + resume.personal_details[key]);
    }
  }
  
  // Using for...of loop
  console.log("\nEducation:");
  for (const education of resume.education) {
    console.log(education);
  }
  
  console.log("\nSkills:");
  for (const skill of resume.skills) {
    console.log(skill);
  }
  
  // Using forEach loop
  console.log("\nEducation:");
  resume.education.forEach(function(education) {
    console.log(education);
  });
  
  console.log("\nSkills:");
  resume.skills.forEach(function(skill) {
    console.log(skill);
  });
  