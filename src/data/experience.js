import { techSkills } from "./techSkills";
const moment = require("moment");
const {
  angular,
  mariadb,
  flask,
  gcp,
  sass,
  redis,
  django,
  javascript,
  python,
  keras,
  illustrator,
  nodejs,
  kubernetes,
  npm,
  premierePro,
  photoshop,
  sql,
  azure,
  postgresSql,
  elasticSearch,
  express,
  spring,
  aws,
  css3,
  mongodb,
  sails,
  yarn,
  docker,
  jenkins,
  tensorflow,
  scala,
  reactjs,
  html5,
  helm,
  shellScript,
  centos,
  java,
  nginx,
  jira,
  mulesoft,
  // eslint-disable-next-line no-undef
} = techSkills;

const skills = {
  data: [
    {
      fileName: "FullStackImg",
      skills: [
        "⚡ Building Web application using multiple technologies to withstand complex architectures and features",
        "⚡ Developing Frontend using Angular, React",
        "⚡ Building Backend in Node, Express, Sails, Flask, Django, Scala, Java Spring Boot",
        "⚡ Combine and Implement complex design pattern to deliver efficient results",
      ],
      softwareSkills: [
        html5,
        css3,
        sass,
        javascript,
        reactjs,
        mulesoft,
        nodejs,
        npm,
        yarn,
        sails,
        express,
        angular,
        python,
        django,
        flask,
        spring,
        scala,
      ],
      title: "Full Stack Development",
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing AI as a service applications",
        "⚡ Experience of working with Computer Vision and NLP",
      ],
      softwareSkills: [python, tensorflow, keras],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Developing Customization Scripts on Kubernetes and Helm to customize application deployment",
        "⚡ Setting up syncing jobs from DB to Another DB",
      ],
      softwareSkills: [
        gcp,
        aws,
        azure,
        mariadb,
        elasticSearch,
        sql,
        redis,
        postgresSql,
        mongodb,
        docker,
        jenkins,
        kubernetes,
        helm,
      ],
    },
    {
      title: "Media Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing attractives logos and other medias for application User Interface",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Designing banners for marketing campaign",
      ],
      softwareSkills: [photoshop, premierePro, illustrator],
    },
  ],
};

let experience = {
  title: "Experience",
  subtitle: "Work Experience and Volunteership",
  description:
    "I have worked with many clients while working as Freelancer. This client project includes project development in Ecommerce domain, Billin domain and many other systems. I started working in startup company as Software Developer. Other than this, I love managing and organising events and also love managing projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Associate Software Developer ",
          company: "SCIKEY",
          company_url: "https://www.scikey.ai/",
          logo_path: "scikey.png",
          start_date: "Sept 2018",
          end_date: "Dec 2019",
          duration: "Sept 2018 - Dec 2019",
          location: "Surat, Gujarat",
          skills: [
            angular,
            express,
            mongodb,
            nodejs,
            spring,
            postgresSql,
            sql,
            elasticSearch,
            redis,
          ],
          projects: [],
          descriptions: [
            "Technology: Nodejs, Python, MsSQL, MongoDB, Angular2+, Java Spring, Git, Redis, Elastic Search",
            "⚡ Worked on 4 projects consisting of different technologies like NodeJS, Spring, Angular, Python and others",
            "⚡ Developed infrastructure for automating chron jobs by combining three Design Patterns i.e. Chain of Responsibility, Commander and Decorative",
            "⚡ Designed front-end and back-end architecture.",
            "⚡ Created infrastructure in Nodejs consisting of promises and callbacks",
            "⚡ Developed pipelines for data migration from MSSQL to Elastic-Search and REDIS",
            "⚡ Worked as Full Stack Developer in which my main responsibilities included designing and developing various frontend components in Angular and developing REST api in Nodejs as Microservices architecture.",
            "⚡ Developed various frontend components from scratch including designing and further integrating APIs to give smooth user experience as per User Needs.",
            "⚡ Developed REST APIs with flexibility attribute in Nodejs Microservice architecture",
            "⚡ Integrated third party APIs like Google for BOT verification",
            "⚡ Designed Angular Library and Deployed on NPM as private repo for using across whole company",
            "⚡ Testing Code and communicated with stakeholders regarding bugs tickets and resolve bugs with improving existing workflows.",
            "⚡ Segregated whole application into two sub application and deployed sub application as whole on different base path.",
            "⚡ Worked in Agile Scrum Development Methodology and completed my task in Sprint revision and rewarded as ‘Star of the Sprint’.",
          ],
          color: "#0879bf",
        },
        {
          title: "Cloud Full Stack Developer ",
          company: "HSBC Bank Canada",
          company_url: "https://hsbc.ca/",
          logo_path: "hsbc.png",
          start_date: "May 2021",
          end_date: undefined,
          duration: "",
          location: "Vancouver, Canada",
          skills: [ reactjs, spring, java, mulesoft, aws, kubernetes, jenkins, jira, shellScript, centos,],
          projects: [],
          descriptions: [
            "Technology: React, Spring Boot, Java, MuleSoft, Docker, Jenkins, AWS, Kubernetes, Anypoint Manager, JIRA, SSL",
            "⚡ Implemented new features to support automation of data and deployment process",
            "⚡ Developed new logger extension as wrapper extension for Keycloak",
            "⚡ Worked as Full Stack Developer in which my main responsibilities designing and developing various frontend components in React JS and developing REST APIs in Springboot as Microservices architecture and further deploying into Development and Production environment.",
            "⚡ Developed Full Stack web applications for HSBC Canada’s premier investment tool, “WealthCompass” and other customer products using a Typescript/React/Redux/CSS Front-End and Node.js/Express Back-End, providing banking features for thousands of users",
            "⚡ Migrated multiple legacy MuleSoft SOAP API’s to Java/Springboot RESTful APIs that integrated various security proxies, SAML token and downstream API calls, boosting the stability, ehnancability and reuse of banking API’s while decreasing total overhead of API’s by 13%",
            "⚡ Deployed full stack applications using various CI/CD and DevOps tools such as Jenkins pipelines, Docker containers and Kubernetes in order to deploy full stack applications to AWS instances",
            "⚡ Tech Lead of a team of 6 developers, responsible for the design and implementation of a US Customer Onboarding application that was completed in 8 months, resulting in hundreds of new brokerage accounts opened and millions of revenue brought into the bank",
            "⚡ Worked in an inter-disciplinary Agile team over multiple time-zones to support systems critical to Retail Banking",
            "⚡ Hired, trained, managed a cohort of 8 interns as a part of the Wealth Management internship program that included managerial tasks such as: interviewing, onboarding, approving requests, mentoring, code reviews via GitHub, etc.",
            "⚡ Clarified project requirements with various product owners in order to expedite development of many projects",
            "⚡ Clearly and concisely documented several applications using confluence to streamline knowledge transfer of projects",
          ],
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Freelancer",
          company_url: "",
          logo_path: "freelancer.png",
          start_date: "Jan 2020",
          end_date: "Apr 2021",
          duration: "Jan 2020 - Apr 2021",
          location: "Montreal, Canada",
          projects: [],
          skills: [aws, nodejs, mongodb, docker, nginx],
          descriptions: [
            "Technology: AWS, PHP, Node, MongoDB, Digital Ocean, Docker, Nginx",
            "⚡ Worked as Freelancer and working on local projects from India",
          ],
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "SciClone Organizer",
          company: "AGEL: Student Association",
          company_url: "https://www.lasallecollege.com/student-ressources/student-life/agel-student-association/",
          logo_path: "Agel.png",
          start_date: "Jan 2020",
          end_date: "Oct 2021",
          duration: "Jan 2020 - Oct 2021",
          location: "Montreal, Canada",
          descriptions: [
            "⚡ Organized TechFest and took the responsilbity of IT head",
          ],
          color: "#4285F4",
          skills: [],
          projects: [],
        },
      ],
    },
  ],
};

const dateComparison = function (a, b) {
  const date1 = new moment(a.start_date, "MMM YYYY").format("YYYYMMDD");
  const date2 = new moment(b.start_date, "MMM YYYY").format("YYYYMMDD");
  return date2 - date1;
};
experience.sections.map((section) => {
  section.experiences.sort(dateComparison);
  section.experiences.forEach((exp) => {
    exp.duration = `${exp.start_date} - ${
      exp.end_date ? exp.end_date : "Present"
    }`;
  });
  return section;
});
export { skills, experience };
