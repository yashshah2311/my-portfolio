const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "YashShah.png",
    description:
      "I am open to any opportunities including Backend, Frontend and Infrastructure. You can contact me anytime to discuss about new opportunities",
  },
  addressSection: {
    title: "Address",
    subtitle: "Waterloo, Ontario, Canada",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/RpybcLwoKGA8x9W6A",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+1 5145832311",
    href: "tel:+15145832311",
  },
};

const seo = {
  title: "Yash's Portfolio",
  description:
    "A passionate individual who always thrive to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yash Shah Portfolio",
    type: "website",
    url: "http://yash-shah.com/",
  },
};

//Home Page
const greeting = {
  title: "Yash Shah",
  logo_name: "yash shah",
  nickname: "",
  subTitle:
    "A passionate individual thriving to reduce the bridge between Human and Information Technology",
  resumeLink:
    "https://drive.google.com/file/d/1WLqrGNmKIyi1H5m6Jk8J2DGtfeRaCIW7/view?usp=share_link",
  portfolio_repository: "https://github.com/yashshah2311/my-portfolio",
  mailTo: "mailto:yash_9999@yahoo.com",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yashshah2311",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shahyash01",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email",
    link: "mailto:yash_9999@yahoo.com",
    brand: false,
    fontAwesomeIcon: "fa-solid fa-envelope", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/yashshah9999",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
];

export { contactPageData, greeting, seo, socialMediaLinks };
