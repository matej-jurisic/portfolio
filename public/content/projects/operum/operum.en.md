# Operum  

**A personal and collaborative data tracking app.**  

[![GitHub Repo](https://img.shields.io/badge/GitHub-Operum-blue?logo=github)](https://github.com/matej-jurisic/Operum)  

---

## Live App

[operum.app](https://operum.app)

## Overview  

Operum is a personal and collaborative data tracking app. Instead of wrestling with spreadsheets, you define exactly the data you want to track, how to view it, and how to visualize it, all in one place.

---

## Features  

-   **Custom Trackers**:  
    A tracker is a collection of data you care about: a reading list, a workout log, a bug database, anything. Define the structure by adding up to 25 fields (string, number, bool, date, datetime, timespan, or a reference to another tracker), each with its own label, description and options. Trackers can be created step by step, cloned from a template, or copied along with their fields, constants and views.

-   **Smart Fields**:  
    Fields can be **calculated** from a formula such as `{End} - {Start}`, get **default values** (fixed, relative like "start of month", or driven by constants), and be **conditionally visible** in the entry form. **Constants** are named reusable values with up to 6 prioritised conditional variants. **Reference fields** link entries across trackers, and a set of fields can be extracted into a new tracker to normalise repeated data.

-   **Entries**:  
    Create, edit, duplicate and delete entries, or bulk-delete and bulk-recalculate a selection. A quick-add dialog captures an entry in a few keystrokes. Import data from CSV or export it at any time, optionally filtered to a view.

-   **Views**:  
    A view is a saved lens on your tracker's data, built from reusable filter and sort queries. Dynamic date filters (`now`, `today`, `end of year` with offsets) keep views live over time.

-   **Dashboards**:  
    Build dashboards from a draggable grid of widgets: charts, entry tables, quick-add buttons, filters, notes, and containers or tabs that group other widgets. Desktop and mobile layouts are stored separately, and filter widgets narrow every widget that follows them.

-   **Analytics & Explore**:  
    Charts are computed at query time from one or more trackers: single value, goal progress, line, bar, scatter, donut and calendar. Explore is a scratchpad for one-off calculations whose whole setup lives in the URL, and any result can be dropped onto a dashboard.

-   **Integrations**:  
    Import data from intervals.icu (scheduled pull) and Firefly III (webhook push) and map it onto tracker fields. Imports upsert on a stable id, so re-syncing never duplicates rows, and credentials are encrypted at rest.

-   **Notifications**:  
    Per-tracker alert rules, scheduled or triggered when a condition starts matching, delivered as browser push notifications and in an in-app inbox, with customisable message templates.

-   **Collaboration**:  
    Share trackers by username with separate permissions for editing data and editing the schema.

-   **Accounts & Administration**:  
    Email/password sign-up with confirmation, or Google login, plus account lockout after failed attempts. Admins manage users and trackers and publish public templates. A `Ctrl`+`K` command palette jumps anywhere in the app.

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
