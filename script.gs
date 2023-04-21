// Bot token from BotFather
const token = '';

// Telegram API endpoint
const telegramUrl = `https://api.telegram.org/bot${token}`;

// Google Apps Script web app URL
const webAppUrl = "";

// ID of the Google Sheet where data will be logged
const ssId = "";

// Telegram user ID for debugging
const adminID = "";

// Get information about the bot (for debugging)
function getMe() {
  const url = `${telegramUrl}/getMe`;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

// Set up the web hook to listen for incoming messages
function setWebhook() {
  const url = `${telegramUrl}/setWebhook?url=${webAppUrl}`;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

// Send a message to a specific chat ID
function sendText(id, text) {
  const url = `${telegramUrl}/sendMessage?chat_id=${id}&text=${encodeURIComponent(text)}`;
  const response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

// Handle incoming messages (expects JSON payload in the request body)
function doPost(e) {
  try {
    // Parse the incoming message
    const data = JSON.parse(e.postData.contents);
    const text = data.message.text;
    const id = data.message.chat.id;
    
    // Parse the input data
    const inputs = text.split(",").map(input => input.trim());
    const currentDate = new Date();
    const [col2, col3, col4, col5] = inputs;
    
    // Log the data to the Google Sheet
    const sheet = SpreadsheetApp.openById(ssId).getActiveSheet();
    sheet.appendRow([currentDate, col2, col3, col4, col5]);
    
    // Send a confirmation message to the user
    sendText(id, `Added: Date: ${currentDate}, Category: ${col2}, Description: ${col3}, Cost: ${col4}, Type: ${col5}`);
  } catch (error) {
    // Send an error message to the admin user
    sendText(adminID, JSON.stringify(error, null, 4));
  }
}
