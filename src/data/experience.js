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
  golang,
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
          title: "Software Developer ",
          company: "Sandvine",
          company_url: "https://sandvine.com/",
          logo_path: "sandvine.png",
          start_date: "May 2021",
          end_date: undefined,
          duration: "",
          location: "Waterloo, Canada",
          skills: [spring, reactjs, docker, java, jira, nodejs, python, golang],
          projects: [],
          descriptions: [
            "Technology: Spring, React, Docker, Java, JIRA, Nodejs, Python, Go, Scala, Confd, Alertmanager, VerticaDB",
            "⚡ Designed new microservice including SDD and SRS which traps SNMP packets and forward packets accordingly",
            "⚡ Implemented Licensing feature which is used for licensing in-products of the company which restricts the usage and features of product respectively",
            "⚡ Implemented Alarms design and feature which basically fetches alarms from machine using SNMP traps and forwards to Customer email with the help of Prometheus Alertmanager",
            "⚡ Developed UI Components in React for User Experience",
          ],
          color: "#0879bf",
        },
        {
          title: "Security Software Developer ",
          company: "Nokia",
          company_url: "https://nokia.com/",
          logo_path: "nokia.png",
          start_date: "Sep 2020",
          end_date: "Apr 2021",
          duration: "Sept 2020 - Apr 2021",
          location: "Ottawa, Canada",
          skills: [
            helm,
            kubernetes,
            docker,
            mariadb,
            shellScript,
            centos,
            java,
            nginx,
            jira,
          ],
          projects: [],
          descriptions: [
            "Technology: Helm, Kubernetes, Docker, Keycloak, Centos Linux, Java, Shell Scripting, Mariadb, Nginx, SSL, Wildfly, JIRA",
            "⚡ Implemented new features to support automation of data and deployment process",
            "⚡ Developed new logger extension as wrapper extension for Keycloak",
            "⚡ Developed scripts for Helm deployment and Widlfly server to support customization feature",
            "⚡ Communicated with Customer to help them solve their issues and bugs they have reported.",
          ],
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "ScrumStart",
          company_url:
            "https://www.linkedin.com/company/scrumstart/?originalSubdomain=in",
          logo_path: "scrumstart.png",
          start_date: "June 2017",
          end_date: "Aug 2019",
          duration: "June 2017 - Aug 2019",
          location: "Pune, Maharashtra",
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
          descriptions: [
            "Technology: Nodejs, Python, MsSQL, MongoDB, Angular2+, Java Spring, Git, Redis, Elastic Search",
            "⚡ Worked on 4 projects consisting of different technologies like NodeJS, Spring, Angular, Python and others",
            "⚡ Developed infrastructure for automating chron jobs by combining three Design Patterns i.e. Chain of Responsibility, Commander and Decorative",
            "⚡ Designed front-end and back-end architecture.",
            "⚡ Created infrastructure in Nodejs consisting of promises and callbacks",
            "⚡ Developed pipelines for data migration from MSSQL to Elastic-Search and REDIS",
          ],
          projects: [
            {
              title: "Serenaway",
              link: "https://app.serenaway.com",
              overview:
                "Serena way is an application build specially for getting customer experience on the basis of the Survey they received",
              stacks: "AngularJS, NodeJS(Express), MongoDB",
              tech: [angular, nodejs, express, mongodb],
              responsibilities: [
                "⚡ Developed 'Take Snapshot' feature using Javascript and it was mobile-friendly",
                "⚡ Developed Validation scripts and Frontend scripts for Multilanguage feature for SurveyJs Editor",
              ],
            },
            {
              title: "Hirest",
              link: "https://app.hirest.net",
              overview:
                "Hirest is an application which helps the user to hire a candidate through Campus Drive, Consultancy, and General Application. Its main motive is to hire the best.",
              stacks: "Angular4, NodeJS, MongoDB",
              tech: [angular, nodejs, express, mongodb],
              responsibilities: [
                "⚡ Worked as Full Stack Developer",
                "⚡ Developed Nunjucks APIs for generating Offer-Letter and Report in Hirest",
                "⚡ Used LDAP for User authentication",
              ],
            },
            {
              title: "Phoneix Work-Force Application",
              link: "https://ss-twg.co.nz",
              overview:
                "Phoneix is an application of The Warehouse Group from New Zealand which is about managing sales data, a workforce of the branch, and its stores situated all around the world",
              stacks: "Angular6, Spring Boot, POSTGRESQL",
              tech: [angular, spring, postgresSql],
              responsibilities: [
                "⚡ Worked as Full Stack Developer",
                "⚡ Implemented Okta Authentication in application",
                "⚡ Used Okta for User authentication with Multi-Factor Authentication",
              ],
            },
            {
              title: "SRK One",
              link: "https://next.srk.one",
              overview:
                "SRK One is an eCommerce web application that sells diamonds and gemstones online with respect to different events based on Searching of stones and Views Request of stones",
              stacks:
                "Angular7, NodeJS, MongoDB. REDIS, SQL Server, ElasticStack",
              tech: [
                angular,
                nodejs,
                express,
                mongodb,
                redis,
                sql,
                elasticSearch,
              ],
              responsibilities: [
                "⚡ Worked as Backend Developer",
                "⚡ Developed Global Search API using Elastic Search",
                "⚡ Implemented Combined Design Patterns of Command, Chain of Responsibility and Decorator pattern",
                "⚡ Developed Push-Notification Framework using SQL, Crons, REDIS, Node, and FCM",
                "⚡ Developed Python Scripts and developed pooling of connection in SQL Server",
              ],
            },
          ],
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Freelancer",
          company_url: "",
          logo_path: "freelancer.png",
          start_date: "Sep 2019",
          end_date: "Apr 2020",
          duration: "Sep 2019 - Apr 2020",
          location: "Windsor, Canada",
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
          company: "UTU",
          company_url: "https://utu.ac.on/",
          logo_path: "utu.png",
          start_date: "Feb 2015",
          end_date: "Feb 2017",
          duration: "Feb 2015 - Feb 2017",
          location: "Bardoli, India",
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
