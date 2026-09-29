# Loom

**A brain space for goals, deadlines and motivation.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-loom-blue?logo=github)](https://github.com/matej-jurisic/loom)  

---

## Overview  

Loom is a planner built around three primitives: **Goals**, **Activities** and **Occurrences**. Its defining rule is that it never asks you to log your life. There is no scheduling engine and no stat that divides by the length of a day, so sleep, work and commuting never need to be entered and nothing computes a wrong answer when data is missing. The calendar is a visualisation and a fast way to add things, not a planner.

---

## Features  

-   **Activities & Occurrences**:  
    An activity is a reusable definition with an optional goal, category and a subtask checklist template. An occurrence is one instance of it in time: floating, planned, with a deadline, or spanning a window. Overdue state is computed server-side, and one-off events are supported alongside reusable activities.

-   **Goals**:  
    Goals have a status (Focus, Active, Bench, Closed) with a user-defined hard limit on simultaneous focus goals. *Milestone* goals track weighted checkpoints with a progress ring, while *ongoing* goals show a 280-day heatmap of completed activity.

-   **Daily Plan & Calendar**:  
    A daily agenda for what matters today, plus a day, 3-day and week calendar for visualising and quickly adding occurrences.

-   **Categories & Insights**:  
    Colour-coded categories group activities, and insights show time spent per activity and category, summed only over what you chose to log.

-   **Correct day semantics**:  
    Days are bucketed server-side in the user's timezone with a configurable day boundary, so a 02:30 entry can belong to the previous day.

-   **Secure auth**:  
    Short-lived JWT access tokens with rotating refresh tokens stored as hashes and delivered in httpOnly cookies.

-   **Web and Android**:  
    The same React app is served by the API in Docker and wrapped with Capacitor as a native Android app.

---

## Technologies / Tools Used  

-   **Backend**: .NET 10, ASP.NET Core minimal APIs, Entity Framework Core, SQLite  
-   **Frontend**: React 19, TypeScript, Vite, Tailwind CSS, TanStack Query  
-   **Mobile**: Capacitor (Android)  
-   **Testing**: xUnit unit and integration tests  
-   **Infrastructure**: Docker

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Date: 04/08/2026  
Repository: [github.com/matej-jurisic/loom](https://github.com/matej-jurisic/loom)  
