# Custom Oracle DCU Grabber
 Script to download content from Oracle Commerce Cloud using the Oracle DCU.  
 
 If for some reason the folders inside ```widget```, ```element``` or other folders you downloaded with the DCU cli are empty, you can try using this script to grab all source data that is listed at the DCU folder architecture you downloaded, example: element, widget, global, theme, etc.  

Essentially it lists the folders inside a given directory and runs ``` dcu --grab ``` for each folder.

Example: ```dcu --grab "widget/Account Details" -n <node> -k <key>```


## Oracle Design Code Utility (DCU)
The dcu is the core code and metadata synchronization utility, which allows you to grab all of the user modifiable source code and metadata from a Commerce Cloud server, edit it as necessary in your chosen tool, and then upload it back to the server. The utilities also makes it possible to transfer content between Commerce Cloud server instances.

## Dependences
Make sure you have the DCU installed globally on your PC.

## Running the script

First you need to try grabbing the content using only the dcu cli (--grab), if you get an error and the content wasn't downloaded right, keep the data you downloaded and use the following steps.

## Clone this repository  

Inside the repository root folder, run:

``` yarn intall ``` or ``` npm install ```

---  

Create a .env file at the root folder and put the following constants:
```
ADMIN_URL = https://cx-commerce-admin-url.com
APP_KEY = "Oracle Commerce Cloud Login API Key"
FOLDER_PATH = '../element'
FOLDER_NAME = 'element'
```

Note the different usage of (") and (') for each constant above.

These constants will be used to ```--grab``` the data using the **Custom Oracle DCU Grabber**

---

Once you have done the previous steps, just run ` node index.js `

---

That's it, if everything went right, the data from Oracle Commerce Cloud should be downloading at the root folder.

---

Feel free to clone this rep and send a Pool request.
