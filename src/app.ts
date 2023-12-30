import * as fs from "fs";
const md = require("markdown-it")({
  html: true, // Enable HTML tags in source
  breaks: true, // Convert '\n' in paragraphs into <br>
  linkify: true // Autoconvert URL-like text to links
});
import { fetchRssData } from "./fetchRssData";
import { fetchGitHubData } from "./fetchGitHubData";

const blogFeedUrl = "https://medium.com/feed/@HackerSa3edy";

const ossProjectRepos = [
  "hackerSa3edy",
  "simple_shell",
  "printf"
];

const githubUsername = "hackerSa3edy";
const websiteUrl = "https://hacker-sa3edy.notion.site/Abdelrahman-Mohamed-fb5a61c08f5548eca17949b890b8f379?pvs=4";
const blogUrl = "https://medium.com/@HackerSa3edy";
const twitterUrl = "https://twitter.com/HackerSa3edy";
const linkedinUrl = "https://www.linkedin.com/in/abdelrahmanm0";

async function generateMarkdown() {
  const websiteBadge = `[![Website Badge](https://img.shields.io/badge/-Website-3B7EBF?style=for-the-badge&logo=amp&logoColor=white)](${websiteUrl})`;

  const mediumBadge = `[![Blog Badge](https://img.shields.io/badge/-Blog-3B7EBF?style=for-the-badge&logo=Medium&logoColor=white)](${blogUrl})`;

  const linkedinBadge = `[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-3B7EBF?style=for-the-badge&logo=Linkedin&logoColor=white)](${linkedinUrl})`;

  const twitterBadge = `[![Twitter Badge](https://img.shields.io/badge/-@iambolajiayo-3B7EBF?style=for-the-badge&logo=x&logoColor=white)](${twitterUrl})`;

  const profileCountBadge = `![Profile Views Count Badge](https://komarev.com/ghpvc/?username=${githubUsername}&style=for-the-badge)`;

  const githubStatsCardDark = `[![GitHub-Stats-Card-Dark](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=FFF&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-dark-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-dark-mode-only)`;

  const githubStatsCardLight = `[![GitHub-Stats-Card-Light](https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&hide_border=true&include_all_commits=true&card_width=600&custom_title=GitHub%20Open%20Source%20Stats&title_color=3B7EBF&text_color=474A4E&icon_color=3B7EBF&hide=contribs&show=reviews,prs_merged,prs_merged_percentage&theme=transparent#gh-light-mode-only)](https://github.com/${githubUsername}/${githubUsername}#gh-light-mode-only)`;

  const markdownText = `<div align="center">\n

  ${websiteBadge} ${mediumBadge} ${linkedinBadge} ${twitterBadge} ${profileCountBadge}\n

  ---\n

  Hi there 👋🏻! I'm a junior cybersecurity enthusiast with a strong passion for identifying and addressing vulnerabilities in computer systems and networks. My foundation in computer science and ethical hacking has fueled my eagerness to learn and specialize in penetration testing, particularly in web application security. I've honed my skills by tackling CTF challenges and gaining hands-on experience at PortSwigger Academy.\nCommitted to continuous learning, I aspire to contribute to the ever-evolving world of information security.\n

  ---\n

  ${githubStatsCardDark}\n
  ${githubStatsCardLight}\n

  </div>\n



  ---\n

  ## 🛠 Skills
  - ### Core Skills
    ![Penetration Testing](https://img.shields.io/badge/Penetration_Testing-1F425D?style=for-the-badge&logoColor=white)
    ![Web Penetration Testing](https://img.shields.io/badge/Web_Penetration_Testing-1F425D?style=for-the-badge&logoColor=white)
    ![Network Penetration Testing](https://img.shields.io/badge/Network_Penetration_Testing-1F425D?style=for-the-badge&logoColor=white)
    ![Vulnerability Assessment](https://img.shields.io/badge/Vulnerability_Assessment-1F425D?style=for-the-badge)


  - ### Programming Languages
    ![C](https://img.shields.io/badge/C-A8B9CC?style=for-the-badge&logo=c&logoColor=black)
    ![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)
    ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
    ![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)



  - ### Web Development Technologies/Frameworks
    ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
    ![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
    ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)
    ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
    ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
    ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)



  - ### Tools & Software
    ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
    ![Bash](https://img.shields.io/badge/Bash-4EAA25?style=for-the-badge&logo=gnu-bash&logoColor=white)
    ![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
    ![Metasploit](https://img.shields.io/badge/Metasploit-239120?style=for-the-badge&logo=metasploit&logoColor=white)
    ![Burp Suite](https://img.shields.io/badge/Burp_Suite-FF6347?style=for-the-badge&logo=burpsuite&logoColor=white)
    ![OWASP ZAP Proxy](https://img.shields.io/badge/OWASP_ZAP_Proxy-404D59?style=for-the-badge&logo=owasp&logoColor=white)
    ![Acunetix](https://img.shields.io/badge/Acunetix-000000?style=for-the-badge&logo=acunetix&logoColor=white)

  ---\n

  ## Highlights

  <details>\n
  <summary>OSS Projects</summary>\n
  <br />
  Here are some of my other projects you might want to check out that are not pinned:\n
  <br />\n<br />
  ${await fetchGitHubData(ossProjectRepos)}\n
  </details>\n

  <details>\n
  <summary>Recent Blogposts</summary>\n
  <br />
  ${await fetchRssData(blogFeedUrl)}\n
  </details>\n

  ---\n

  <div align="center">\n
    <a href="https://hacker-sa3edy.notion.site/Abdelrahman-Mohamed-fb5a61c08f5548eca17949b890b8f379?pvs=4" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white" /></a>\n

    <a href="https://drive.google.com/file/d/1J8_IDoVvOSbI5kp97lKF6pt2QZbfDepH/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/Resume-1F425D?style=for-the-badge" /></a>\n
  </div>`;

  const result = md.render(markdownText);

  fs.writeFile("README.md", result, (error) => {
    if (error) throw new Error(`Something went wrong: ${error}.`);
    console.log(`✅ README.md file was succesfully generated.`);
  });
}

generateMarkdown();
