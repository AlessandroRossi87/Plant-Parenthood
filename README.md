# Plant Parenthood

Plant Parenthood is a social media platform for plant lovers. Users are able to share their plants, comment on each other plants and even offer and request plant offsprings.
<br>
The live link can be found here: XXX
<br>

![Mockup](xxx)

## The Strategy Plane

### Site Goals

Plant Parenthood is aimed at all plant enthusiasts. The site aims to connect users with other plant owners, to allow them to showcase their plants, share best practices.
<hr>

### Agile Planning

This project was developed using agile methodologies by delivering small features in incremental sprints. There were 3 sprints in total, spaced out evenly over three weeks.

All stories were assigned to epics, prioritized under the labels, Must have, should have, could have and assigned to sprints. "Must have" stories were completed first, "should haves" and then finally "could haves". It was done this way to ensure that all core requirements were completed first to give the project a complete feel, with the nice to have features being added should there be capacity.

The Kanban board was created using github projects and can be located [here](xxxx) and can be viewed to see more information on the project cards. All stories except the documentation tasks have a full set of acceptance criteria in order to define the functionality that marks that story as complete.

![Kanban](xxx)

<hr>

## Epics

**Authentications**

This Epic covers the authentication features

**Navigation**

This epic covers the front end creation of the application in regards to posts. This is to allow users to interact with the backend API via the user interface in order to create, read, update and delete their own posts.

**Plants**

This epic covers the front end creation of the application in regards to comments on posts. This is to allow users to interact with the backend API in order add comments on posts.

**Comments**

This epic covers the front end creation of the application in regards to user profiles. This is to allow users to interact with the backend API via the user interface to manage their own profiles.

**Profile**

This epic covers the front end creation of the application in regards to artists. This is to allow users to interact with the backend API and register/unregister themselves as artists and display their artist information.

**Followers**

This epic covers the front end creation of the application in regards to artist reviews. This is to allow users to interact with the backend API via the user interface allow users to leave reviews on specific artists.

**Plant Request**

This epic covers the front end creation of the application in regards to artist reviews. This is to allow users to interact with the backend API via the user interface allow users to leave reviews on specific artists.

**Contact**

This epic covers the front end creation of the application in regards to artist reviews. This is to allow users to interact with the backend API via the user interface allow users to leave reviews on specific artists.
<hr>
<br>

## User Stories

By Epic:

**Authentication**

* As a User I can Sign Up so that I can interact with other users
* As a User I can Log In so that I can Post, Comment, Request and React
* As a User I can Log Out so that I can exit the website
* As a Logged Out User I can either Sign Up or Log In

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


**Contact**

<hr>
<br>

## The Structure Plane

## Features:

**Setup**

User Story:

`As a user, I would like a favicon on the website so that I can easily know which tab belongs to body doodles`

Implementation:

A site favicon was implemented with the sites logo. This will allow users to easily identify Body Doodles when they have multiple tabs open.

![favicon](xxx)

User Story:

`As a logged out user I can see sign in and sign up options so that I can sign in / sign up`

Implementation:

Checks were implemented to detect when a user is signed in or signed out and nav items displayed accordingly. This will prevent users from being able to click buttons from the UI in order to reach restricted pages.

Redirects on the URLS was also implemented to ensure users cannot access pages when logged out if they are for logged in users only.


User Story:

`As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device`

Implementation:

A navigation menu was implemented than collapses into a hamburger menu on smaller devices.
This will ensure that no navigation items overlap and users can access and navigate the site from any size device.

**Navigation Menu**

User Stories:

` As a logged out user I can see sign in and sign up options so that I can sign in / sign up`

`As a user, I would like a fully responsive navigation menu so that I can easily access the site from any device`

Implementation:

A fully responsive navigation menu has been implemented across the website.

This will allow the users to navigate to different pages on the website with ease from any device. Nav items are different depending on the users logged in state to prevent them accessing areas of the application intended for signed in users.

Logged in users:

When a user is logged in the following navigation items are shown:

* Add Post
* Home
* Artists
* Feed
* Liked
* Sign Out
* Users Icon and Username

![navbar_loggedin_expanded](xxx)

Logged out users:

* Home
* Sign In
* Sign Up

![navbar_loggedout](xxx)

The site logo is displayed on the left side of the navigation at all times.

The navigation icons change to a gold colour when the page is active. This is to indicate to users which page they are currently on.

**Home**

User Story:

`As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content`

Implementation:

The home page displays user posts in order of newest posts first. These posts are visible to all users regardless of logged in status. This will allow non registered users to get a feel for the content on the site to know whether they are interested in signing up.

Restricted access has been implemented on the posts for users who are not signed in, they will not be able to create a post, like or comment on posts.


**Posts**

User Story:

`As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"`

Implementation:

Infinite scrolling was implemented to load 10 posts at a time and when user reaches the end of the scroll, it will load 10 more and so on. This will allow for optimal load times to enhance viewing pleasure.

User Story:

`As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content`

Implementaton:

The posts page, feed and liked pages are all ordered by newest content first. This will prevent users from being shown content they have already seen at the top and reduce the need for them to 'search' for new content.

User Story:

`As a user I can view the details of a single post so that I can learn more about it`

Implementation:

A post detail page has been added that is visible to all users, this will allw them to see the full post detail and comments.

![post_detail](xxx)


User Stories:

`As a logged in user I can like a post so that I can show my support for the posts that interest me`

Implementation:

Logged in users have full access to post, comment, like or unlike. This will help ensure that unregistered users do not spam the website while also ensuring genuine users register to the site.

![post_like_comment](xxx)

User Story:

`As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created`

Implementation:

Only the user who created the post will be able to edit or delete that post. This will ensure that users have full control of their own posts and unauthorized users cannot tamper with them.


User Story:

`As a logged in user I can create posts so that I can share my images`

Implementation:

A Post button has been implemented in the nav bar in order for logged in users to create a post when they want to share something.

![post_create](xxx)

User Story:

`As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about`

Implementation:

Users can also click the Feed navigation item and this will display only posts from users the person has followed.

User Story:

`As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most`

Implementation:

Users can click the liked navigation item and display all of the posts they have liked.

User Story:

`As a user, I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in.`

Implementation:

A search bar has been added that will allow users to search for keywords so that they can search for content that interests them.

![post_searchbar](xxx)

**Comments**

Below each post, there will be a comment box available to logged in users. This will allow users to add comments under posts.

![comment_create](xxx)

A comment count will also be shown under the post, to allow users to see how many people have commented on each post.

A comment or updated time will be displayed in either minutes ago or days ago 

The username and Avatar of the user that created the comment will displayed on each comment

![comments_list_under_post](xxx)

**Profiles**

User Story:

`As a user I can view other users profiles so that I can see their posts and learn more about them`

Implementation:

Profile pages have been implemented and can be viewed by clicking on a users Avatar that is displayed on a post.

To view a users own profile, they can click their icon from the navigation menu.

User Stories:

`As a logged in user I can edit my profile so that I can change my profile picture and bio`

Implementation:

If the user is the owner of the profile, they are able to edit the profile via the profile form accessed via the three dot drop down menu on the profile.

![profile_edit](xxx)

User Story:

`As a logged in user I can update my username and password so that I can change my display name and keep my profile secure`

Implemenation:

The drop down menu also allows the user to edit their user name or password by clicking the menu options and filling in the forms.

![profile_change_password](xxx)


User Story:

`As a user I can tell if I am logged in or not so that I can log in if I need to`

Implementation:

When a user is logged in, their profile image is on display in the top right of the nav. This will allow the user to easily know when they are logged in and which account (if they have multiple)

![nav_loggedin_Avatar](xxx)

**Most followed profiles**

User Stories:

`As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them`

`As a user I can see a list of the most followed profiles so that I can see which profiles are popular`

`As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them`

`As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed`


Implementation:

A component showing the most followed users is shown and the user profiles are able to be viewed by clicking on these. On a desktop, the most followed users has 10 users. On a mobile device this is restricted to 4 so that it does not take up too much room as scrolling may become a nuisance. A follow button will also be displayed that will allow the logged in user to follow the target user.

![most_followed_profiles](xxx)

**Artists**

User Story:

`As an artist, I would like to be able to register my details so others can view my work and contact details`

Implementation: 

Users are able to register as an artist when they want to show users their information, such as speciality, location and hourly rate and contact details. Users may choose to follow other users who are registered Artists in order to keep up to date with their work.

Users can register as an artist via their profile page by clicking the 3 dots to open a drop down menu. Select register as artist which will direct them to a form where they can fill in their details.

Users can also unregister as an artist by selecting remove as artist button on the profile. This button is only displayed to owners of a profile.

![artist_register](xxx)

User Story:

`As a user, I would like to be able to view artist details so I can find a local artist when I want me ink`

Implementation:

Artist information is able to be viewed on the artists user profile. This will allow users to view artists in their area if they want me tattoos.

An Artist page has also been implemented to allow users to view all artist details in a list.

![artist_info_profile](xxx)

![artist_info_list](xxx)

**Artist Reviews**

User Story:

``As a user, I would like to be able to rate an artist so that owthers can see my rating and review`

Implementation:

A leave a review button is present if the user is not the owner of the profile so they can leave a review on that artist. 

Users are able to leave textual reviews on artists along with a rating out of 5 by filling in the review form that can be accessed by clicking Leave Review on the artists user profile.

![artist_review](xxx)

A star rating component was used to allow users to easily click the number of stars they wish to give as a rating. 

Stars will light up to reflect the users rating. 

The average rating of the artist is displayed on the artist profile as an average which is calculated by getting the sum of all ratings and dividing by the number of ratings.

![average_rating](xxx)

**Contact**

User Story:

`As a user, I would like to be able to contact the site owner in case I have any issues or queries.`

Implementation:

A contact form was added to the navigation that will allow users to submit a contact request if they have any issues or queries.

![contact](xxx)

<br>

### Future Features

Messaging system

<hr>
<br>

## The Skeleton Plane

### Wireframes

<details>

<summary>All Wireframe Images</summary>

Full size wireframes available [here](xxx)

Home / Posts

![Home / Posts](xxx)

Contact

![Contact](xxx)

Feed

![Feed](xxx)

Reacted

![Liked](xxx)

Profiles

![Profiles](xxx)

Plant Request

![Plant Request](xxx)

Artist Profile

![Artist Profile](xxx)

Sign In

![Sign In](xxx)

Sign Up

![Sign Up](xxx)

</details>

## The Surface Plane

### Design

#### Colour-Scheme

The background colour for individual componenets is black (#000000).

Icon, headings and border colours are gold (#cca53c).

Main text is white (#ffffff).

The main page background colour is an off shade of white (#f8f8f8).
<hr>
<br>

#### Typography

The main font used on the website is "DM Sans".
<hr>
<br>


## Technologies

* React
    * Main framework used to create the user interface
* Node
    * Package manager used to install dependencies
* Heroku
    * Used for application hosting
* Git
    * Version control software
* Github
    * Repository used to store base code and docs

<hr>
<br>

## Testing

Testing can be found in the [TESTING.md file](xxx)
<hr>
<br>

## Deployment
## Heroku Deployment

The site was deployed to Heroku. The steps to deploy are as follows:

* Navigate to heroku and create an account
* Click the new button in the top right corner
* Select create new app
* Enter app name
* Select region and click create app
* Click the resources tab and search for Heroku Postgres
* Select hobby dev and continue

* Click the deploy tab
* Scroll down to Connect to GitHub and sign in / authorize when prompted
* In the search box, find the repositoy you want to deploy and click connect
* Scroll down to Manual deploy and choose the main branch
* Click deploy
<hr>
<br>
The live link can be found here: [Live Site - Sizzle and Steak](https://body-doodles.onrender.com/)
<br>

## Version Control

The site was created using the Visual Studio Code editor and pushed to github to the remote repository ‘body-doodles’.

The following git commands were used throughout development to push code to the remote repo:

```git add <file>``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m “commit message”``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.
<hr>
<br>

### Run Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now have been cloned on your local machine for use.

Install Dependencies:

```npm install```

Run Application:

```npm start```
<hr>
<br>

### Forking

Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

- Navigate to the GitHub Repository you want to fork.

- On the top right of the page under the header, click the fork button.

- This will create a duplicate of the full project in your GitHub Repository.
<hr>
<br>

## Credits


### Content

Logo used was taken from 


### Acknowledgements
