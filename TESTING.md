# **Project Milestone 3: Testing**
### *Project Name: RetroTalk*
### *Team members: Jessica Knoblock, Michael Taylor, Tim Papich*

## **Automated Test Cases:**
#### How to run unit tests: 

*You must have node.js, npm and Angular CLI installed.*
* Clone the repository.
* Navigate to the root directory of the repository.
* Navigate to the “client” folder.
* In the terminal, run the command “ng test”.

---

## **User Acceptance Tests:**
### **Route: /Login**

> **Use Case:** User Facebook data should be accessible throughout the application.
>
> **Pre-conditions:**
> * The user must have a Facebook profile
> * The user must have node.js, npm and Angular CLI installed.
>
> **Test steps:**
> 1. Navigate to the login page
> 2. Login with Facebook
>
> **Expected result:** The user’s name should appear on the preview route and their Facebook data should be accessible throughout the application.
> 
> **Actual result:** The user’s data was saved from their Facebook profile and their name is visible on the /preview Angular route
>
> **Status:** Pass

---

## **Front End Automated Test Cases:**
### **Class: AuthenticationStateService**

### *Function: setFacebookProfileDataState()*

> **Use Case:** User logs in with Facebook and data is stored and accessible throughout the app.
>
> **Description:** setFacebookProfileDataState() function should set the Facebook profile data state.
>
> **Pre-conditions:** User must have a Facebook account.
>
> **Expected Result:** User data should be stored in the state variable in the authentication state service.
>
> **Actual Result:** User data is successfully stored in the authentication state service.
>
> **Status:** Pass
>
> **Post Conditions:** User Facebook data is accessible wherever required by the app.

### *Function: setAuthenticationToken()*

> **Use Case:** User logs in with Facebook and the session token is stored and accessible throughout the app.
>
> **Description:** setAuthenticationToken() function should set the authentication token.
>
> **Pre-conditions:** User must have a Facebook account.
>
> **Expected Result:** An authentication token should be stored in the authentication state service.
>
> **Actual Result:** An authentication token was successfully stored in the authentications state service.
>
> **Status:** Pass

### *Function: getFacebookProfileData()*

> **Use Case:** User data provided by Facebook should be accessible without having to log in again.
>
> **Description:** getFacebookProfileData() function should get the Facebook profile data state.
>
> **Pre-conditions:** User must have already registered with a Facebook account.
>
> **Expected Result:** User data should match the data stored from Facebook.
>
> **Actual Result:** User data successfully matches registered data.
>
> **Status:** Pass
>
> **Post Conditions:** User Facebook data is accessible whenever required by the app.


### *Function: getAuthenticationToken()*

> **Use Case:** User logs in using Facebook, and has access to all functions of the application because they have a token to hit all endpoints.
>
> **Description:** getAuthenticationToken() function should get the authentication token for making API requests.
>
> **Pre-conditions:** The user must have a Facebook account.
>
> **Expected Result:** Authentication token should be retrieved from the service.
>
> **Actual Result:** Authentication token was retrieved from the service.
>
> **Status:** Pass
>
> **Post Conditions:** User has permission to hit every endpoint in the application and has access to every feature.


