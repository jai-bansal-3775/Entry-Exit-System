# IITG-Entry-Exit-System
A user-friendly website providing real-time monitoring of student’s entry and exit across various gates in IITG campus.

## Table of Contents
- [IITG-Entry-Exit-System](#iitg-entry-exit-system)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Usage](#usage)
  - [Technologies](#technologies)
      - [Frontend-backend](#frontend-backend)
      - [Miscelleneous](#miscelleneous)
  - [Summary](#summary)

## Features
Here is the overview of the features of the project. First we we have Entry creation page where student can create entry by Scanning barcode (ID card) or by roll number.

<img src="./Screenshots/create-entry-page.png" alt="Alt Text - description of the image" width="80%" />

---

To create the entry by scanning ID card click on the button "Scan ID-Card"
It will ask for camera permission, after giving the permission, scan your ID card. It will directly fetch the details from the ID card.

<img src="/Screenshots/barcode-scanner.png" alt="Alt Text - description of the image" width="70%"/>

---

After scanning the ID card. It will notify that "Barcode Scanned, Please create entry", Now click on respective button to create entry.

<img src="./Screenshots/create-entry-barcode.png" alt="Alt Text - description of the image" width="70%"/>

---

After entry creation a toast will appear on the top of the screen.

<img src="./Screenshots/entry-created.png" alt="Alt Text - description of the image" width="70%"/>

---

One can make an entry using roll number also.

<img src="./Screenshots/roll-number.png" alt="Alt Text - description of the image" width="70%"/>

---

Here is the Home page of the application where all the entries will appears.

<img src="./Screenshots/home-page.png" alt="Alt Text - description of the image" width="80%">


---

Home page have several options for filter the entries such as "Exit Entries" to get the list of all the student who are currently out of the campus, "Filter by Date" to get the entries for a particular date.

<img src="./Screenshots/date-filter.png" alt="Alt Text - description of the image" width="80%" />

## Usage

This application resolves the problem of manual data entries of students who are going outside or coming inside the campus. It also prevent false entries ensuring database integrity and minimizing discrepancies.

## Technologies

#### Frontend-backend

| Frontend              |   Backend     |  Database  |
|-----------------------|---------------|------------|
|  HTML                 |   ExpressJS   |  MongoDB   |
|  CSS                  |   NodeJS      |
|  JavaScript           |   
|  React.js             |
|  Tailwind CSS         |

#### Miscelleneous

* Implimented MongoDB Aggregation pipelines for seamless data retrieval
* React-redux and Redux-toolkit for state management.
* Good practices are followed while writting the code of the project.

## Summary

The IITG-Entry-Exit-System is a user-friendly website designed to monitor real-time entry and exit of students across various gates within the IITG campus. Features include entry creation via barcode scanning or roll number input, with an intuitive interface for filtering entries and managing data. The system streamlines the process, minimizes manual data entry errors, and ensures database integrity. Built using a tech stack comprising React.js for frontend, Express.js and Node.js for backend, and MongoDB for the database, the project adheres to good coding practices for reliability and maintainability.

---
