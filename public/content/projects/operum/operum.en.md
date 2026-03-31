# Operum  

**A personal and collaborative data tracking app.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live App

[operum.app](https://operum.app)

## Overview  

Operum is a personal and collaborative data tracking app. Instead of wrestling with spreadsheets, you define exactly the data you want to track, how to view it, and how to visualize it — all in one place.

---

## Features  

-   **Custom Trackers**:  
    A tracker is a collection of data you care about — a reading list, a workout log, a bug database, anything. Define the structure by adding up to 25 fields with the types that make sense for your data, each with its own label, description, ordering, and visibility.

    ![Entries](/content/projects/operum/entries.png)

-   **Entries**:  
    Once a tracker is set up, add entries filling in the fields you've defined. Create, edit, and delete individual entries or bulk-delete a selection. Import data directly from a CSV file or export your data to CSV at any time.

-   **Views**:  
    A view is a saved lens on your tracker's data. Filter by field values, set sort orders, and choose which columns are visible. Each tracker can have a default view that opens automatically.

    ![Views](/content/projects/operum/views.png)

-   **Analytics**:  
    Add up to 10 charts to a tracker to turn raw entries into visual summaries, displayed in a draggable masonry grid. Five chart types available:

    - **Single Value** — one calculated metric front and center: count, sum, min, max, average, standard deviation, or boolean percentages
    - **Line Chart** — entries plotted along X/Y axes; supports raw lines, aggregated sums grouped by X, or cumulative running totals
    - **Scatter Chart** — numeric X/Y point cloud for spotting correlations between two number fields
    - **Donut Chart** — groups entries by a category field and sums a numeric field per group
    - **Calendar** — maps entries to a date field and labels each point with another field's value

    Each chart maps your tracker's fields to the roles it needs. The UI only shows fields whose type is compatible with each role. Analytics can optionally be scoped to a specific view.

    ![Analyitcs](/content/projects/operum/analytics.png)

-   **Collaboration**:  
    Share trackers with other users. Add teammates or friends to a tracker so they can view and contribute entries.

-   **Templates**:  
    Admins can publish public template trackers. Browse available templates and build on top of them instead of starting from scratch.

-   **Accounts & Access**:  
    Sign up with email and password or log in with Google. Includes email confirmation on registration, account lockout after repeated failed login attempts, and two roles: **User** (create and manage trackers, collaborate) and **Admin** (everything, plus user management and platform configuration).

---

## Technologies / Tools Used  

-   **Backend**: .NET 9, ASP.NET Core, Entity Framework Core, PostgreSQL  
-   **Frontend**: React 19, TypeScript, Vite, Mantine, MobX  
-   **Infrastructure**: Docker, Nginx, Prometheus, Grafana

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Date: 15/09/2025  
License: MIT  
Repository: [github.com/matej-jurisic/Operum](https://github.com/matej-jurisic/Operum)  
