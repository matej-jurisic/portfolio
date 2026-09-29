# Photo Competition

**A self-hosted platform for running photo contests and judging.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-photo__competition-blue?logo=github)](https://github.com/matej-jurisic/photo_competition)  

---

## Overview  

Photo Competition lets you organise contests, collect photo submissions from photographers, and let judges rate and award them, all from a single self-hosted app. Users sign up with an account and can create and manage their own contests, or ask to join public ones as a photographer or judge. Participants invited to a contest can also upload and judge through private links.

---

## Features  

-   **Contests & Topics**:  
    A contest has a name, one or more topics, an upload deadline and a rating deadline. Photographers submit one photo per topic, and judges browse photos grouped by topic. Contests can be private, and rewards are displayed on the results page.

-   **Accounts & Join Requests**:  
    Users register and log in (JWT authentication, BCrypt-hashed passwords, rate-limited auth endpoints) and get a personal dashboard with the contests they own and the ones they take part in. Public contests accept join requests for the photographer or judge role, which the contest owner reviews, while private contests are invite-only.

-   **Photographers**:  
    Each photographer gets a unique private link or, as a registered user, a personal session for uploading (JPG, PNG or WebP up to 20 MB) and can replace or delete their photos while uploads are open.

-   **Judging**:  
    Judges rate every photo from 1 to 10 with an optional comment, in a randomised order to avoid bias, and hand out limited custom badges such as *Color Mastery*, *Original Idea*, *Perfect Moment*, *Made Me Smile* and *Hidden Gem*. A lightbox with zoom helps inspect the photos.

-   **Results**:  
    Scores are aggregated per photographer and topic to determine the overall winner, with ties listed. Badged photos are shown separately, and results become public only when the contest is marked complete.

-   **Admin panel**:  
    A protected admin panel manages contests, topics, participants and photos, copies participant links, uploads photos on behalf of participants, and can close uploads early.

---

## Technologies / Tools Used  

-   **Backend**: .NET 9, ASP.NET Core, Entity Framework Core, PostgreSQL, JWT  
-   **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, TanStack Query  
-   **Infrastructure**: Docker, Nginx

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Date: 25/04/2026  
Repository: [github.com/matej-jurisic/photo_competition](https://github.com/matej-jurisic/photo_competition)  
