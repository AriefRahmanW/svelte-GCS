const firebase = require("firebase")

const firebaseConfig = {

    apiKey: "AIzaSyAmqOCJnJhReru3FTtMoSlLP9x3YgwGwp8",

    authDomain: "gcs-krti-td.firebaseapp.com",

    databaseURL: "https://gcs-krti-td.firebaseio.com",

    projectId: "gcs-krti-td",

    storageBucket: "gcs-krti-td.appspot.com",

    messagingSenderId: "1050512916915",

    appId: "1:1050512916915:web:279f9ee7e830b9ac344bc6",

    measurementId: "G-H75ECJQ6QY"

}

firebase.initializeApp(firebaseConfig)

export const AUTH = firebase.auth()
