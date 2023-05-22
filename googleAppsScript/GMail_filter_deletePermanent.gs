function deleteForever() {
  var threads = GmailApp.search('in:trash from:email@example.com');  // Replace 'email@example.com' with the email you want to filter.
  
  for (var i = 0; i < threads.length; i++) {
    Gmail.Users.Threads.remove('me', threads[i].getId());
  }
}

// INSTRUCTIONS 

// 1. Go to https://script.google.com/home

// 2. Add a script with the code above

// 3. Set up a trigger:

//  - On the script page, click on the clock icon (current project's triggers) or choose "Edit" > "Current project's triggers".

//  - Click "Add Trigger" in the bottom-right corner of the page.

//  -  For 'Choose which function to run', select 'deleteForever'.

//  - For 'Select event source', choose 'Time-driven'.

//  - Now select the type of timer you want. You could choose 'Minutes timer' and 'Every 15 minutes' to run it very frequently, or select 'Hour timer' for every hour, as per your need.

//  - Click 'Save'.

//  - Note: You will need to grant permissions for the script to manage your Gmail.
