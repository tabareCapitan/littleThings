function sendEmail() {
  var recipient = 'yourworkemail@slu.se'; // Replace this with your work email
  var subject = 'Gmail POP3 Refresh';
  var body = 'This email is sent to refresh Gmail POP3 fetch frequency.';

  GmailApp.sendEmail(recipient, subject, body, {
    from: 'yourgmail@gmail.com' // Replace this with your Gmail address
  });
}

function deleteRefreshEmails() {
  var threads = GmailApp.search('subject:"Gmail POP3 Refresh"');

  for (var i = 0; i < threads.length; i++) {
    threads[i].moveToTrash();
  }
}

function timeDrivenFunction() {
  var minutes = Math.floor(Math.random() * 15) + 10; // Randomly choose a number between 10 and 25

  // Create triggers for both functions
  ScriptApp.newTrigger('sendEmail')
    .timeBased()
    .after(minutes * 60 * 1000) // Convert minutes to milliseconds
    .create();

  ScriptApp.newTrigger('deleteRefreshEmails')
    .timeBased()
    .after((minutes + 1) * 60 * 1000) // Run this one minute after sending the email
    .create();
}

// INSTRUCTIONS

// 1. Go to https://script.google.com/home

// 2. Create a new project with the code above

// 3. Set up a trigger:

//  - Click on the clock icon (current project's triggers) or choose "Edit" > "Current project's triggers".
//  - Click "Add Trigger" in the bottom-right corner of the page.
//  - For 'Choose which function to run', select 'timeDrivenFunction'.
//  - For 'Select event source', choose 'Time-driven'.
//  - For 'Select type of time based trigger', select 'Minutes timer' and then 'Every 15 minutes' (this function will still only run the other functions once due to the after method, but it needs to run frequently to set up the next trigger).
//  - Click 'Save'.
//  - You will need to grant access to GMail
