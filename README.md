# AirBnB Clone - Web Dynamic

## Overview
This project is designed to create a dynamic web application that mimics some functionalities of AirBnB. The main focus is on using JavaScript, particularly jQuery, to interact with a custom API and manipulate the DOM dynamically.

All instructions mentionned here refer to the Holberton School project's tasks. They are already implemented in the project.

![Project Graph](https://s3.eu-west-3.amazonaws.com/hbtn.intranet.project.files/concepts/74/hbnb_step5.png)

## Tasks

### 0. Last clone!
- **Description**: 
  - Fork the codebase and rename the repository to `AirBnB_clone_v4`.
  - Update the project to include yourself as an author.
  - Copy all files from `AirBnB_clone_v3` to the new repository `AirBnB_clone_v4`.
  - Install Flasgger if it’s not already installed:
    ```bash
    sudo pip3 install flasgger
    ```
- **Repository**: `holbertonschool-AirBnB_clone_v4`

### 1. Cash only
- **Description**:
  - Start a Flask web application based on the `web_flask` repository and copy necessary files into the `web_dynamic` directory.
  - Rename `100-hbnb.py` to `0-hbnb.py` and `100-hbnb.html` to `0-hbnb.html`.
  - Update the route in `0-hbnb.py` to `/0-hbnb/`.
  - Add a query string to each asset to prevent caching issues by using a UUID.
- **Commands**:
    ```bash
    HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
    ```
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `0-hbnb.py`, `templates/0-hbnb.html`

### 2. Select some Amenities to be comfortable!
- **Description**:
  - Make the filters section dynamic.
  - Replace the route `/0-hbnb/` with `/1-hbnb/` in `1-hbnb.py`.
  - Create a new template `1-hbnb.html` and update it accordingly.
  - Write a JavaScript script `1-hbnb.js` to handle changes in checkbox inputs and update the list of selected amenities.
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `1-hbnb.py`, `templates/1-hbnb.html`, `static/scripts/1-hbnb.js`

### 3. API status
- **Description**:
  - Update the API entry point by replacing the current CORS configuration.
  - Replace the route `/1-hbnb/` with `/2-hbnb/` in `2-hbnb.py`.
  - Create a new template `2-hbnb.html` and update it accordingly.
  - Write a JavaScript script `2-hbnb.js` to check the API status and update the UI based on the status.
- **Commands**:
    ```bash
    HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
    ```
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `api/v1/app.py`, `web_dynamic/2-hbnb.py`, `web_dynamic/templates/2-hbnb.html`, `web_dynamic/static/scripts/2-hbnb.js`

### 4. Fetch places
- **Description**:
  - Replace the route `/2-hbnb/` with `/3-hbnb/` in `3-hbnb.py`.
  - Create a new template `3-hbnb.html` and update it accordingly.
  - Write a JavaScript script `3-hbnb.js` to fetch places from the API and display them dynamically.
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `web_dynamic/3-hbnb.py`, `web_dynamic/templates/3-hbnb.html`, `web_dynamic/static/scripts/3-hbnb.js`

### 5. Filter places by Amenity
- **Description**:
  - Replace the route `/3-hbnb/` with `/4-hbnb/` in `4-hbnb.py`.
  - Create a new template `4-hbnb.html` and update it accordingly.
  - Write a JavaScript script `4-hbnb.js` to filter places based on selected amenities.
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `web_dynamic/4-hbnb.py`, `web_dynamic/templates/4-hbnb.html`, `web_dynamic/static/scripts/4-hbnb.js`

### 6. States and Cities
- **Description**:
  - Replace the route `/4-hbnb/` with `/100-hbnb/` in `100-hbnb.py`.
  - Create a new template `100-hbnb.html` and update it accordingly.
  - Add checkboxes for States and Cities and write a JavaScript script `100-hbnb.js` to handle filtering by States and Cities.
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `web_dynamic/100-hbnb.py`, `web_dynamic/templates/100-hbnb.html`, `web_dynamic/static/scripts/100-hbnb.js`

### 7. Reviews
- **Description**:
  - Replace the route `/100-hbnb/` with `/101-hbnb/` in `101-hbnb.py`.
  - Create a new template `101-hbnb.html` and update it accordingly.
  - Add a feature to show and hide reviews and write a JavaScript script `101-hbnb.js` to manage this functionality.
- **Repository**: `holbertonschool-AirBnB_clone_v4`
- **Files**: `web_dynamic/101-hbnb.py`, `web_dynamic/templates/101-hbnb.html`, `web_dynamic/static/scripts/101-hbnb.js`
