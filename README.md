![Image Description](https://fv5-3.files.fm/thumb_show.php?i=aneh8va2j3&view&v=1&PHPSESSID=e19abe5e86a2e0c5247157f94f6d1d8dbbaa3f4a)

[Google Chrome Web Store](https://chromewebstore.google.com/detail/weeklylog/imlaadjooelbmgmlbfdhnfbkhooeokkn?authuser=0&hl=fr)

# WeeklyLog

WeeklyLog is a simple application to log time in intervals on a weekly view as a Chrome extension. It is built using Vite, React, TypeScript, and easy-peasy for state management.

## Features

- Log time in intervals on a weekly calendar view
- Add, delete, and clear events
- Persist events using local storage
- Responsive and user-friendly interface

![Image Description](https://fv5-3.files.fm/thumb_show.php?i=3zz35tbmt4&view&v=1&PHPSESSID=e19abe5e86a2e0c5247157f94f6d1d8dbbaa3f4a)
![Image Description](https://fv5-3.files.fm/thumb_show.php?i=tqydvvgutm&view&v=1&PHPSESSID=e19abe5e86a2e0c5247157f94f6d1d8dbbaa3f4a)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/digzit/WeeklyLog.git
   cd WeeklyLog
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

## Development

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Build

To build the project for production, run:

```sh
npm run build
```

The built files will be output to the `build` directory.

## Usage

1. Open the Chrome extension by clicking on the extension icon.
2. Use the calendar to log your time in intervals.
3. Add events by selecting a time slot.
4. Delete events by clicking on an event and confirming the deletion.
5. Clear all events using the clear button.

## Data Persistence

This application uses the browser's local storage to persist data. All logged events are stored locally on your device, ensuring that your data remains available even after closing the browser.

## Adding to Chrome as a Developer

To add this extension to Chrome as a developer, follow these steps:

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on the "Load unpacked" button.
4. Select the `build` directory of your project.
5. The extension should now be added to Chrome and visible in the extensions list.
