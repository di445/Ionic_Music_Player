### RUN
To run the app, run the following commands:
 * ionic build android
 * ionic emulate android
Or type the below to get the app to open in browser:
 * ionic serve
Test as a native app on a device, plug it in and run:
 * ionic run android


## RUN SPECIFIC PLATFORM
To run the app in a specific platform:
 * Open in XCode or Android Eclipse
 * navigate to /platforms
 * choose PLATFORM to run from
NOTE: If using this route, make sure to run the following command after making changes:
 * cordova prepare {android/ios}


##BUILDING/PUBLISHING
Run:
 * cordova build --release android
 * cd platforms/android/
 * keytool -genkey -v -keystore {AppName}.keystore -alias {AppName} -keyalg RSA -keysize 2048 -validity 10000
Copy apk file at {AppLocation}\platforms\android\build\outputs\apk to same location as {AppName}.keystore
 * jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore {AppName}.keystore {AppName}-release-unsigned.apk {AppName}
 * zipalign -v 4 {AppName}-release-unsigned.apk {AppName}.apk
