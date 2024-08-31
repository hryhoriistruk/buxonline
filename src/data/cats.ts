interface Category {
  ru: {
    page: string[];
    data: Role[];
  };
}

interface Role {
  id: number;
  role: string;
  synonyms: string[];
}

const cats: Category[] = [
  {
    ru: {
      page: ['Выберите категорию', 'Вакансии'],
      data: [
        {
          id: 1,
          role: "Software Engineer",
          synonyms: ["Software Developer", "Programmer"]
        },
        {
          id: 2,
          role: "Web Developer",
          synonyms: ["Web Programmer", "Web Designer"]
        },
        {
          id: 3,
          role: "Frontend Developer",
          synonyms: ["UI Developer", "JavaScript Developer"]
        },
        {
          id: 4,
          role: "Backend Developer",
          synonyms: ["Server-side Developer", "API Developer"]
        },
        {
          id: 5,
          role: "Full Stack Developer",
          synonyms: ["Full Stack Engineer"]
        },
        {
          id: 6,
          role: "DevOps Engineer",
          synonyms: ["Site Reliability Engineer", "Systems Engineer"]
        },
        {
          id: 7,
          role: "Data Scientist",
          synonyms: ["Data Analyst", "Data Specialist"]
        },
        {
          id: 8,
          role: "Database Administrator",
          synonyms: ["DBA", "Database Manager"]
        },
        {
          id: 9,
          role: "System Administrator",
          synonyms: ["SysAdmin", "Systems Manager"]
        },
        {
          id: 10,
          role: "Network Engineer",
          synonyms: ["Network Administrator", "Network Specialist"]
        },
        {
          id: 11,
          role: "Security Engineer",
          synonyms: ["Cybersecurity Engineer", "Information Security Engineer"]
        },
        {
          id: 12,
          role: "Cloud Engineer",
          synonyms: ["Cloud Architect", "Cloud Specialist"]
        },
        {
          id: 13,
          role: "UX Designer",
          synonyms: ["User Experience Designer"]
        },
        {
          id: 14,
          role: "UI Designer",
          synonyms: ["User Interface Designer"]
        },
        {
          id: 15,
          role: "Mobile Developer",
          synonyms: ["iOS Developer", "Android Developer"]
        },
        {
          id: 16,
          role: "QA Engineer",
          synonyms: ["Quality Assurance Engineer", "Test Engineer"]
        },
        {
          id: 17,
          role: "Technical Writer",
          synonyms: ["Documentation Specialist", "Technical Communicator"]
        },
        {
          id: 18,
          role: "Product Manager",
          synonyms: ["Product Owner", "Product Specialist"]
        },
        {
          id: 19,
          role: "Project Manager",
          synonyms: ["Project Leader", "Project Coordinator"]
        },
        {
          id: 20,
          role: "Scrum Master",
          synonyms: ["Agile Coach", "Agile Scrum Master"]
        },
        {
          id: 21,
          role: "Business Analyst",
          synonyms: ["Business Systems Analyst", "Business Process Analyst"]
        },
        {
          id: 22,
          role: "Data Engineer",
          synonyms: ["Big Data Engineer", "Data Architect"]
        },
        {
          id: 23,
          role: "Machine Learning Engineer",
          synonyms: ["ML Engineer", "AI Engineer"]
        },
        {
          id: 24,
          role: "AI Specialist",
          synonyms: ["Artificial Intelligence Specialist"]
        },
        {
          id: 25,
          role: "Blockchain Developer",
          synonyms: ["Blockchain Engineer", "Cryptocurrency Developer"]
        },
        {
          id: 26,
          role: "SEO Specialist",
          synonyms: ["Search Engine Optimization Specialist"]
        },
        {
          id: 27,
          role: "Digital Marketer",
          synonyms: ["Online Marketer", "Internet Marketer"]
        },
        {
          id: 28,
          role: "Content Strategist",
          synonyms: ["Content Manager", "Content Specialist"]
        },
        {
          id: 29,
          role: "Social Media Manager",
          synonyms: ["Social Media Specialist", "Social Media Strategist"]
        },
        {
          id: 30,
          role: "E-commerce Specialist",
          synonyms: ["E-commerce Manager", "Online Store Manager"]
        },
        {
          id: 31,
          role: "CRM Specialist",
          synonyms: ["Customer Relationship Manager", "CRM Manager"]
        },
        {
          id: 32,
          role: "Email Marketing Specialist",
          synonyms: ["Email Marketer"]
        },
        {
          id: 33,
          role: "Data Analyst",
          synonyms: ["Data Scientist", "Data Specialist"]
        {
          id: 34,
          role: "IT Consultant",
          synonyms: ["Technology Consultant", "IT Specialist"]
        },
        {
          id: 35,
          role: "IT Support Specialist",
          synonyms: ["Technical Support Specialist", "IT Helpdesk"]
        },
        {
          id: 36,
          role: "IT Manager",
          synonyms: ["Information Technology Manager", "IT Director"]
        },
        {
          id: 37,
          role: "IT Coordinator",
          synonyms: ["Information Technology Coordinator"]
        },
        {
          id: 38,
          role: "IT Analyst",
          synonyms: ["Information Technology Analyst"]
        },
        {
          id: 39,
          role: "IT Technician",
          synonyms: ["Information Technology Technician"]
        },
        {
          id: 40,
          role: "IT Trainer",
          synonyms: ["Information Technology Trainer"]
        },
        {
          id: 41,
          role: "IT Auditor",
          synonyms: ["Information Technology Auditor"]
        },
        {
          id: 42,
          role: "IT Strategist",
          synonyms: ["Information Technology Strategist"]
        },
        {
          id: 43,
          role: "IT Architect",
          synonyms: ["Information Technology Architect"]
        },
        {
          id: 44,
          role: "IT Operations Manager",
          synonyms: ["Information Technology Operations Manager"]
        },
        {
          id: 45,
          role: "IT Project Manager",
          synonyms: ["Information Technology Project Manager"]
        },
        {
          id: 46,
          role: "IT Security Specialist",
          synonyms: ["Information Technology Security Specialist"]
        },
        {
          id: 47,
          role: "IT Service Manager",
          synonyms: ["Information Technology Service Manager"]
        },
        {
          id: 48,
          role: "IT Infrastructure Manager",
          synonyms: ["Information Technology Infrastructure Manager"]
        },
        {
          id: 49,
          role: "IT Compliance Analyst",
          synonyms: ["Information Technology Compliance Analyst"]
        },
        {
          id: 50,
          role: "IT Quality Assurance Analyst",
          synonyms: ["Information Technology Quality Assurance Analyst"]
        },
        {
          id: 51,
          role: "IT Risk Manager",
          synonyms: ["Information Technology Risk Manager"]
        }
      ]
    }
  }
];

export default cats;