# Plant Parenthood

Plant Parenthood is a social media platform for plant lovers. Users are able to share their plants, comment on each other plants.
<br>
The live link can be found ![here](https://plant-parenthood-pp5-ac00fe42de7c.herokuapp.com)
<br>

![Mockup](xxx)

## The Strategy Plane

### Site Goals

Plant Parenthood is aimed at all plant enthusiasts. The site aims to connect users with other plant owners, to allow them to showcase their plants, share best practices and receive feedback about how good of a plant parent the user is!
<hr>

### Agile Planning

I have developed this project by using agile methodologies by separating the small features in different epics. All user stories were assigned to different epics, subsequently divided between "Must have", "Should have" in order of priority and "Won't have" was added for those features planned at first but at the end discarted because of time constringements.
I created the Kanban board in GitHub projects and can be found [here](https://github.com/users/AlessandroRossi87/projects/6/views/1).

<hr>

## Epics

**Authentications**

This Epic covers the authentication features like sign in and sign out.

**Navigation**

This epic covers the navigation and scrolling features of the application. This allows users to navigate around and access all features of the website.

**Plants**

This epic covers the front end creation of "plants", the application's name for posts. This is to allow users to share their plants with pictures and receive feedback through reactions and comments.

**Comments**

This epic covers the front end creation of comments underneath plants. This is to allow users to create comments and interact with other users.

**Profile**

This epic covers the front end creation of the application with creating profiles. This is to allow users to interact with the backend API to create a profile, share plants and react and comment to other users' plants.

**Followers**

This epic covers the front end creation of the application with followers. This is to allow users to interact with the backend API via the user interface and allow users to become each other's followers so that their plants can be visualized in the "feed"

**Plant Request**

This epic covers the front end creation of the application in regards to plant request. This allows the user to interact with the backend API via the user interface to offer "plant children", or offspring, for each of their plant or request plant children from others. This epic was discarted because of time constringement and can be now considered a future implementation.

**Contact**

This epic covers the front end creation of the application contact form. This is to allow users to interact with the backend API via the user interface allow users to contact the website's administrator.
<hr>
<br>

## User Stories

By Epic:

**Authentication**

* As a User I can Sign Up so that I can interact with other users
* As a User I can Log In so that I can Post, Comment, Request and React
* As a User I can Log Out so that I can exit the website

**Navigation**

* As a User I can see the Navbar so I can reach all pages of the website
* As a User I can scroll down to see all the Posts

**Plants**

* As a User I can post a Plant so that I can share my plants
* As a User I can edit a Plant so that I can update the information
* As a User I can delete a Plant so that it disappears from the feed
* As a User I can view all other Plants
* As a User I can click on a Plant so that I can see more details
* As a User I can React to a Plant so that I can show what I think about it
* As a User I can see what Plants I reacted to so I can see my feedback
* As a User I can search Plants so that I can see the plants I am interested in
* As a User I can follow another User so that I can stay updated on what they post


**Comment**

* As a User I can comment underneath a Plant so that I can share my thoughts
* As a User I can edit a comment so that I can revise what I wrote
* As a User I can delete a comment so that it disappears from under the Plant
* As a User I can read other comments so that I can see other user’s thoughts


**Profiles**

* As a User I can create a profile so that I can interact with other users
* As a User I can see other people’s user so that I can see what they posted
* As a User I can see how many Plants, Comments, Followers and Reacts that profile has so that I can see the profiles with most interaction


**Followers**

* As a User I can follow another user so that I can stay up to date with them
* As a User I can unfollow a user so that I can stop staying up to date.
* As a User I can see which profiles have the most follower so that I can see which are the most interesting


**Plant Request**

* As a User I can request a plant child from another user
* As a User I can cancel my plant request so that I undo my request
* As a User I can approve a plant request so that the requester can receive my plant child
* As a User I can deny a plant request so that the requester can't receive my plant child


**Contact**

* As a User I can send a message to the admin so that I can communicate an issue

<hr>
<br>

## The Structure Plane

## Features:

**Authentications**

User Story:

`As a User I can Sign Up so that I can interact with other users`

Implementation:

A signup page was implemented with Django Rest Framework (DRF) authentication. Underneath the signup for there is a signin form in case the user already has an account.


User Story:

`As a User I can Log In so that I can Post, Comment, Request and React`

Implementation:

Only logged in users can add a plant, comment, follow and react to other plants. It was made sure that navbar shows different options accordingly to logged in or logged out users.


User Story:

`As a User I can Log Out so that I can exit the website`

Implementation:

A "sign out" button is visible on the navbar only to logged in users. 


User Story:

`As a User I can Log Out so that I can exit the website`

Implementation:

A navigation menu was implemented than collapses into a hamburger menu on smaller devices.
This will ensure that no navigation items overlap and users can access and navigate the site from any size device.

**Navigation**

User Stories:

`As a User I can see the Navbar so I can reach all pages of the website`

Implementation:

Navigation menu is implemented on top of the page, it collapses into a hamburger menu on small screens. It ensures navigation on each type of screen.

Logged in users can see different features on the navbar than the logged out users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add plant
* Home
* Feed 
* Reacted
* Contact Us
* Sign Out
* User Icon and Username

Logged out users:

* Home
* Sign In
* Sign Up

The site logo is displayed on the left side of the navigation at all times.

The navigation icons change to a light green colour when the page is active in order to indicate which page the user is currently on.


User Story:

`As a User I can scroll down to see all the Plants`

Implementation:

An infinite scroll has been implemented on the home page to display all plants starting with the most recent. Both logged in and logged out users can display the plants on the homepage.

By making the contect accessable also to non registered users gives them the possibility to see the content of the web application and make them interested in signing up.


**Plants**

User Story:

`As a User I can post a Plant so that I can share my plants`

Implementation:

An "Add plant" button is implemented in the navbar and is visible to signed in users. The button is visible at all time even on small screens, where it is placed outside the hamburger menu. This way it allows the users to add plants even more easily and enhance the use of the web application.

User Story:

`As a User I can edit a Plant so that I can update the information`

Implementaton:

Users who are owner of a plant have the possibility to edit their plant by clicking on the three dots on the top right corner of their plant. This way they can update plant information, for example its taxonomy, enhancing the collaborative nature of this web application.

User Story:

`As a User I can delete a Plant so that it disappears from the feed`

Implementation:

Similaryl to the edit function, the plant owner can click on the three dots on the top right corner of their plant and delete it from the web application. It can happen that plants die, so the user can keep their plant collection updated.


User Stories:

`As a User I can view all other Plants`

Implementation:

Both logged in and logged out users have access to plants and their details. They can read comments ans see how many times plants have been reacted too. This is in order to engage new users and make them want to sign up.


User Story:

`As a User I can click on a Plant so that I can see more details`

Implementation:

All users can click on the image of a plant and see its details, like the plant text. They can see what the plant owner has written.


User Story:

`As a User I can React to a Plant so that I can show what I think about it`

Implementation:

Logged in users have the possibility to react in three different ways to other people's plants. Hydrate, for positive feedback, Moist, for intermediate feedback, and Dry for bad feedback. Logged out users cannot react and are shown a message when hovering over the icons. A user cannot react to their own plants and they are also informed about this while overing. The number of each reaction is display underneath each plant


User Story:

`As a User I can see what Plants I reacted to so I can see my feedback`

Implementation:

Logged in users can click on "Reacted" so they can access all plants they have ever reacted to.

User Story:

`As a User I can search Plants so that I can see the plants I am interested in`

Implementation:

All users can search for any term within plants in the search bar at the top of the home page. This way they can look for specific plants, through the toxology, and all terms within the plant posts.

User Story:

`As a User I can follow another User so that I can stay updated on what they post`

Implementation:

Logged in users can follow other users so that their plants appear under "Feed" and they can stay up to date with all plants from their favorite users.


**Comments**

Comments are visible under each plant for both logged out and logged in users. Logged in users have the possibility to add comments under each plant.

An icon display the number of comments under each plant, to allow users to see which plants have most comments. Each comment will show the clickable username of its author and their Avatar.

**Profiles**

User Story:

`As a User I can create a profile so that I can interact with other users`

Implementation:

The user can create a profile and upload a picture shown as their Avatar. They can also write a text in their profile to tell more about themselves.

User Story:

`As a User I can see other people’s user so that I can see what they posted`

Implementation:

Profile Page has been implemented where a user can click on an Avatar and visit their profile. To view a their own profile, they click on their on Avatar from the navigation menu.

User Story:

`As a User I can see how many Plants, Comments, Followers and Reacts that profile has so that I can see the profiles with most interaction`

Implemenation:

On the Profile page it is displayed the number of how many Plants, Followers the user has and the number of users they follow.

**Epic Followers**

User Story:

`As a User I can follow another user so that I can stay up to date with them`

Implementation:

A user can visit a user's profile and click on the "Follow" button at the top right corner of the profile.

User Story:

`As a User I can unfollow a user so that I can stop staying up to date.`

Implementation: 

Once a user has followed another user, they can unfollow them by clicking on the button with the same name on the top left corner of the profile.

User Story:

`As a User I can see which profiles have the most follower so that I can see which are the most interesting`

Implementation:

On the right hand side of the homepage a user can see a list of most followed profiles. Next to the name of each user a button "Follow" appears if the user don't follow them already, or "Unfollow.

**Plant Request**

Originally planned, the Epic "Plant Request" was discarted due to time constringements and difficulties in implementing the front end display of the requests.

User Stories:

`As a User I can request a plant child from another user`

`As a User I can cancel my plant request so that I undo my request`

`As a User I can approve a plant request so that the requester can receive my plant child`

`As a User I can deny a plant request so that the requester can't receive my plant child`

Originally planned mplementation:

Each time a user posted a new Plant they were given the possibility make seedlings, called here "plant children", available to give away to other users. Each Plant was supposed to have up to 10 plant children. An Icon underneath each plant would have been used by other logged in users to request a plant child and trigger the request. The plant owner would have seen the request on their own profile where they had the possibility to approve or deny the request. On the requester's profile, they would have had the possibility to cancel the request and see the status of their request. A messaging system through Signal would have been implemented in order for the users to organize the plant child handover.

**Contact**

User Story:

`As a User I can send a message to the admin so that I can communicate an issue.`

Implementation:

A logged in user can send a message to the admin by clicking on "Contact Us" from the nagivation button and a message is posted on the admin site.

<br>

### Future Features

Beside the Plant Request system originally planned and included in the user stories, a future feature would be a messaging system in order for the users to communicate with each other. Also, there would be a section where users can requests help in case their plant was sick and ask other users for tips on how to cure it.

<hr>
<br>

## The Skeleton Plane

### Wireframes

<details>

<summary>All Wireframe Images</summary>

Homepage

![Home](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/homepage.png)

Plant Component

![Plant](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/plantdetail.png)

Profile Component

![Profile Page](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/profilepage.png)

Plant Create / Edit Component

![Plant Create](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/plantcreate.png)

Contact Us

![Contact](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/contact.png)

</details>

## The Surface Plane

### Design

#### Logo

The logo has been created using the website Logo.com. The title is capitalized and the symbol is a stylized flower. The flower is used as the favicon.

![Logo](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/logo.png)

![Favicon](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/faviconpp.png)


#### Color-Scheme

The colors chosen for this project are different shades of green and yellow-green. The buttons have been colored in blue and the reactions have been colored according to the traffic light logic: Hydrate in green, Moist in yellow and Dry in red.

![Colors](https://github.com/AlessandroRossi87/plant-parenthood/blob/main/readmefiles/colors.png)

<hr>
<br>

#### Typography

The font used for the website is "DM Sans", in case that is not available the system will render a generic sans serif.
<hr>
<br>


## Technologies

React: The main framework used for building the user interface. Version 17.0.2.
Node: A tool for managing package installations and dependencies. Used in the Node.js ecosystem.
Bootstrap: Front-end framework used for styling and UI components. Version 4.6.0.
React Bootstrap: A React-specific implementation of Bootstrap components. Version 1.6.3.
React Router DOM: A library for handling routing in React applications. Version 5.3.0.
Axios: A library for making HTTP requests. Version 0.21.4.
JWT Decode: A library for decoding JWT (JSON Web Tokens). Version 3.1.2.
React Infinite Scroll Component: A component for implementing infinite scrolling in React applications. Version 6.1.0.
React Scripts: Scripts and configurations used for building and running React applications. Version 4.0.3.

<hr>
<br>

## Testing

Testing can be found in the [TESTING.md file](xxx)
<hr>
<br>

## Deployment
## Heroku Deployment

The site was deployed to Heroku after combining the two workspaces.

* Go to Heroku and establish an account.
* Press the "New" button located in the upper right corner.
* Opt for "Create New App."
* Input the desired app name.
* Pick a region and initiate app creation.
* Access the "Resources" tab and locate Heroku Postgres.
* Choose "Hobby Dev" and proceed.
* Move to the "Deploy" tab.
* Navigate to "Connect to GitHub," and when prompted, sign in/authorize.
* Within the search box, locate the repository for deployment and click on "Connect."
* Scroll down to "Manual Deploy" and opt for the main branch.
* Execute the deploy command.

<hr>
<br>
The live link can be found here: [Live Site - Plant Parenthood](https://plant-parenthood-pp5-ac00fe42de7c.herokuapp.com/)
<br>

## Version Control

The site was created using the GitPod online editor and pushed to github to the remote repository ‘plant-parenthood’ on GitHub.

In order to push the changes to the repository I used the following commands:

```git add <file>``` - This command adds the file to be saved.

```git commit -m “commit message”``` - This command enters a commit message.

```git push``` - This command pushes all the changes to GitHub.

<hr>
<br>

### Run Locally


Navigate to the GitHub repository you wish to clone for local use:

- Click on the dropdown button labeled "Code."
- Select "HTTPS."
- Copy the repository link to your clipboard.
- Open your preferred integrated development environment (IDE) of choice (ensure that Git is installed for the upcoming - steps).
- Type git clone copied-git-url into the terminal of your IDE.
- The project is now cloned on your local machine and ready for use.

Install Dependencies:

`npm install`

Launch the Application:

`npm start`

<hr>
<br>

### Forking


Forks are typically employed either to suggest modifications to another person's project or as a foundation for your own concept.

- Visit the GitHub Repository you wish to fork.

- Click the fork button situated in the top right corner under the header.

- This action will generate a duplicate of the entire project within your GitHub Repository.
<hr>
<br>

## Credits

### Content

The project is based mainly on the "Moments" walkthrough by Code Institute.
The contact model is taken from ![Twilio.com](https://www.twilio.com/blog/build-contact-form-python-django-twilio-sendgrid)
All pictures uploaded are private property. 

### Acknowledgements

I would like to thank my mentor, Gareth McGirr, for his invaluable support during this project.
