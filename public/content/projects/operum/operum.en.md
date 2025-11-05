# Operum  

**A flexible data tracking system with analytics and advanced filtering.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live App

[operum.app](https://operum.app)

## Overview  

Operum is an application for flexible data tracking through customizable trackers. It allows users to define their own fields (of different data types) and enter records, while also providing advanced analytics and customizable views for easier data management and analysis.  

---

## Features  

-   **Trackers with customizable fields**:  
    Create multiple trackers and define fields of various types (`timespan`, `datetime`, `date`, `bool`, `number`, `string`) with the option to mark them as required or optional. After defining fields, users can insert records into the tracker. You can also use existing templates to quick start your tracking.

    ![Entries](/content/projects/operum/entries.png)

-   **Data analytics**:  
    View key analytics metrics on fields such as `sum`, `count`, `average`, `min`, `max`, `stddev` with work in progress to expand into multi-field and configurable analytics dashboard view.

    ![Analyitcs](/content/projects/operum/analytics.png)

-   **Views**:  
    Define custom data views with sorting rules (field + `asc/desc`) and filters (field, operator, and value). Use operators such as `equals`, `not equals`, `greater`, `less`, `greater equal`, `less equal`, `contains`, `does not contain`, `starts with`. Saved views can then be applied to simplify both data browsing and analytics.  

    ![Views](/content/projects/operum/views.png)

---

## Technologies / Tools Used  

-   **Backend**: ASP.NET Core, Entity Framework Core, PostgreSQL, xUnit  
-   **Frontend**: React, TypeScript
-	**Deployment**: Hetzner, Docker, Github Actions
-   **Other**: JWT authentication

---

Author: _Matej Jurišić_  
Email: [mjurisic812@gmail.com](mailto:mjurisic812@gmail.com)  

Date: 15/09/2025  
License: MIT  
Repository: [github.com/matej-jurisic/Operum](https://github.com/matej-jurisic/Operum)  
