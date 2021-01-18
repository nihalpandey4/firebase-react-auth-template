<!-- PROJECT SHIELDS -->
[![Stargazers][stars-shield]][stars-url]
[![Forks][forks-shield]][forks-url]
[![Issues][issues-shield]][issues-url]

<hr>
<p>
  <p align="center">
    <h1>React-Firebase Authentication Template using Context for state management</h1>
    Link to try out  - https://auth-fir.herokuapp.com/
    <a href="https://github.com/nihalpandey4/Live_Video_Broadcasting_Service/issues">Report Bug</a>
    </p>
</p>

<hr>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Trying out](#trying-out)
* [Usage](#usage)

<hr>


<!-- ABOUT THE PROJECT -->
## About The Project

This project is a template for authentication using Firebase in React Applications. Supported functionalities are -
<ol>
    <li> Sign Up using E-mail and password</li>
    <li> Log in using E-mail and password</li>
    <li> Password reset using E-mail </li>  
    <li> Change credentials </li>
</ol>

<hr>

## Built with

* [Node.js](https://nodejs.org/en/)
* [React.js](https://reactjs.org/)
* [Context - React](https://reactjs.org/docs/context.html)

<hr>

## Getting Started

### Prerequisites

1. **Node.js v12 or later**

Run <code> node -v </code> in terminal to check version of node installed. 
If node.js is not installed or version is lower than 12, follow [this](https://nodejs.org/en/download/) link to download the LTS version.

2. **Git**

You can download the latest version of <code>git</code> [here](https://git-scm.com/downloads).

### Installation

1. Clone the repo

```sh
git clone git@github.com:nihalpandey4/firebase-react-auth-template.git
```
2. Install the dependencies

```sh
cd firebase-react-auth-template/
npm install
```

<hr>

## Trying out

1. Start a new terminal to run the React App.

```sh
cd firebase-react-auth-template
npm start
```

After executing above commands your React App is running at localhost:3000.

4. Now go to localhost:3000 using any browser to access this application. 

5. Now try interacting with the form in the browser to test above mentioned features

<hr>

## Usage

1. Go to https://console.firebase.google.com/u/0/

2. Create new Project

3. Add web application to your project and store properties of firebaseConfig object in .env.local as

    REACT_APP_API_KEY=apiKey <br>
    REACT_APP_AUTH_DOMAIN = authDomain <br>
    REACT_APP_PROJECT_ID = projectId <br>
    REACT_APP_STORAGE_BUCKET = storageBucket <br>
    REACT_APP_MESSAGING_SENDER_ID = messagingSenderId <br>
    REACT_APP_APP_ID = appId <br>

<hr>

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/nihalpandey4/firebase-react-auth-template/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Nihal Pandey : nihalpandey4@gmail.com

<hr>

For information regarding project created with create-react-app refer to [create-react-app.md](https://github.com/nihalpandey4/firebase-react-auth-template/blob/main/create-react-app.md)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[issues-shield]:	https://img.shields.io/github/issues/nihalpandey4/firebase-react-auth-template
[issues-url]: https://github.com/nihalpandey4/firebase-react-auth-template/issues
[forks-shield]: https://img.shields.io/github/forks/nihalpandey4/firebase-react-auth-template
[forks-url]: https://github.com/nihalpandey4/firebase-react-auth-template/network/members
[stars-shield]: https://img.shields.io/github/stars/nihalpandey4/firebase-react-auth-template
[stars-url]: https://github.com/nihalpandey4/firebase-react-auth-template/stargazers

