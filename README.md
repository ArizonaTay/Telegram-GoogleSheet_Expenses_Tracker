# Setup Guide for Telegram and Google Sheets Integration
This is a simple guide to set up a Google Apps Script to integrate with Telegram and Google Sheets. You will need a Telegram bot, Google account, and access to Google Sheets.

## Prerequisites
- A Telegram account
- A Google account

## Step 1: Create a Telegram bot
To create a Telegram bot, you will need to use the Telegram BotFather. Here are the steps:

1. Open Telegram and search for BotFather.
2. Send /newbot to BotFather.
3. Follow the instructions to name and create your bot.
4. Once your bot is created, BotFather will provide you with a bot token. Copy the bot token and save it for later.

## Step 2: Create a Google Apps Script
Google Apps Script allows you to automate tasks and integrate with other Google services. Here are the steps:

1. Open Google Drive and create a new Google Sheet.
2. Open the Google Sheet and select "Extensions" from the menu.
3. Select "App Scripts".
4. In the script editor, copy and paste the code provided above.
5. Replace the empty string with your bot token:  `const token = 'YOUR_BOT_TOKEN';`
6. Replace the empty string with the URL of your Google Apps Script web app: `const webAppUrl = 'YOUR_WEB_APP_URL';`
7. Replace the empty string with the ID of the Google Sheet where data will be logged: `const ssId = 'YOUR_GOOGLE_SHEET_ID';`
8. Replace the empty string with your Telegram chat ID for debugging: `const adminID = 'YOUR_TELEGRAM_USER_ID';`
   1. To find your Telegram user ID, enter https://api.telegram.org/bot[YOUR_BOT_TOKEN]/getMe into a web browser.
   2. Look for the number behind "id" in the returned JSON - this is your Telegram chat ID.
9. Save the script with a name of your choice.

## Step 3: Set up the web app
The Google Apps Script needs to be deployed as a web app to be accessible from Telegram. Here are the steps:

1. In the script editor, Click the Deploy button.
2. Select  New Deployment
3. Choose "Web app" as the deployment type.
4. Under "Who has access", choose "Anyone, even anonymous".
5. Click "Deploy".
6. In the pop-up window, copy the URL of your web app and save it for later.

## Step 4: Set up the webhook
The webhook will allow your Telegram bot to receive incoming messages. Here are the steps:

1. In the script editor, select the "getMe" function and click "Run" to ensure your bot is authorized to access Telegram's API.
2. In the script editor, select the "setWebhook" function and click "Run" to set up the webhook.

## Step 5: Test the integration
To test the integration, send a message to your bot in Telegram with the following format:

Category, Description, Cost, Type.

For example:

Food, KFC, $12, UOB Creditcard.

If successful, the message should be logged to the Google Sheet, and you will receive a confirmation message in Telegram. If there are any errors, you will receive an error message in Telegram.

## Integration Sample Output

![Gif](/assets/result.gif)

## Step 6: Connect Google Sheet to Google Data Studio
To visualize and analyze your expenses in your Google Sheet, you can connect it to Google Data Studio.

1. Open Google Data Studio in your web browser.
2. Click on the "Create" button to create a new report.
3. On the left-hand side, click on the "Data Sources" tab.
4. Click on the "Create New Data Source" button.
5. In the "Connector" section, search for "Google Sheets" and select the expenses Google Sheet
6. Click on the "Connect" button.
7. Click on the "Add to Report" button.
8. You can now use the data from your Google Sheet to create visualizations and reports in Google Data Studio.

## Google Data Studio Sample Output

[Dashboard](https://lookerstudio.google.com/reporting/a782f5d7-3716-4320-b350-d598d5483875)

![Dashboard Result](/assets/dashboard_result.png)



