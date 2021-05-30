# Region Demographics
Simple web app that shows you a few demographics of a given region on the planet.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Installation
1. Clone this repo
2. Run "npm i" or "yarn" to install packages

## Getting Started

First, run the development server:

```bash
npm run dev 
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design
The design is located here: [Figma](https://www.figma.com/file/rFJ22POY0hT1PsySBiFSyM/RegionDemographics?node-id=0%3A1) and holds information about the structure of this simple web app.

## Flow of the app
1. index.tsx page uses static generation to get the data from the api on every build. It then passes this data to the RegionDemographics component which is the top component of this app.
2. RegionDemographics sets up the global state context and sets the selected region before anything else. It then renders every component.
3. The sorting happens in the CountriesList component. 

## Todo
1. Complete the <LanguagesList /> component.
2. Abstract sorting out from the list components and into the reducer.
3. Add null, undefined and error handling.
3. Check and refactor semantics.
4. Check and refactor accessibility.
5. Make mobile friendly.
6. Setups testing environment.

