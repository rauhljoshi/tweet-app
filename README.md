# tweet-app
A basic mockup of Twitter which loads 2 users' info(with tweets) from json files. It is built using React + Redux.
The info is loaded from static files, and since there is no saving mechanism incorporated yet, the newly added tweets are lost when the user is switched.

Usage - 

When the page is loaded initially, The default landing page is set, which prompts the user to click on 'User 1' or 'User 2' (Links found at the top-left corner of the page) to navigate to the respective user's account. On clicking any of the links, the user's info (loaded from a static file) gets loaded, and the user is also allowed to add tweets.


How to Open the App (Locally) - 

1) Download the zipped folder on to your local drive from here
2) Unzip the folder.
3) Since the code has already been bundled, you can directly open index.html from src/client/app
4) You can also freshly build the source code by running the command - 'npm run dev', and opening index.html
                
