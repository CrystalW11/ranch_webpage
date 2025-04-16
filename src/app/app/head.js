// src/app/Head.js
export default function Head() {
    return (
      <>
        <title>Ranch Webpage</title>
        <meta name="description" content="Welcome to Kristen's Bed and Breakfast!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/images/rtr-ranch_logo-final_reverse.png" sizes="180x180" />
  
        {/* Favicon with different sizes */}
        <link rel="icon" type="/favicon.ico" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="/favicon.ico" sizes="16x16" href="/favicon-16x16.png" />
  
        {/* Web Manifest (for PWA) */}
        <link rel="manifest" href="/site.webmanifest" />
      </>
    );
  }
  