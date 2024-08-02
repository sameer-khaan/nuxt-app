# Nuxt 3 App with Vuetify, Pinia, and MDI Fonts

## Overview

This is a Nuxt 3 application that utilizes Vuetify for UI components, Pinia for state management, and MDI (Material Design Icons) fonts. The app supports internationalization (i18n) with English and Arabic translations, and includes a currency switcher for SAR and USD. Node.js version 18 is required for this project.

## Features

- **Nuxt 3**: The latest version of the Nuxt framework for server-side rendered Vue.js applications.
- **Vuetify**: A powerful Material Design component library for Vue.js.
- **Pinia**: State management library for Vue.js applications.
- **MDI Fonts**: Material Design Icons for a rich set of UI icons.
- **Language**: Internationalization support for English and Arabic translations.
- **Currency**: Allows switching between USD (United States Dollar) and SAR (Saudi Riyal).

## Prerequisites

- **Node.js**: Version 18.x.x is required. Install it from [nodejs.org](https://nodejs.org/).

## Installation

1. Clone the repository:

        git clone https://github.com/sameer-khaan/nuxt-app.git
        cd nuxt-app

2. Install dependencies:
        
        npm install

## Development

To start the development server:

    npm run dev

The app will be available at http://localhost:3000.


## Production

To build and run the application in production mode, follow these steps:

1. Build the application:

        npm run build

2. Start the production server:
    
        npm run start

The app will be available at http://localhost:3000.

## Configurations

1. **Translations** are managed using JSON files located in the locales directory.

* English: locales/en.json
* Arabic: locales/ar.json

2. **Dummy Data** are managed using JSON files located in the data directory.

* Flights List: data/flight.json
* Hotels List: data/hotel.json
