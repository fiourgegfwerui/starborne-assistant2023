# Starborne Assistant

Mobile client for the game [Starborne](https://starborne.com), built in react-native + expo + typescript.

This app only communicates with the official starborne servers, and user data is not sent anywhere else. 

# Building from source
You can build the app with ` eas build -p android --profile preview`, you just need an Expo account.

# FAQ
- Q: Is my data safe?
  - A: Yes, the app only communicates with the official starborne servers, and your user/pass and other info are stored encrypted on your device. The app is open-source for a reason, you can verify yourself.
- Q: Where is the documentation for the starborne API?
  - A: There is none, I reverse-engineered the game client using [dnSpy](https://github.com/0xd4d/dnSpy).
  - Update: I have documented some parts of the API in [the wiki](https://github.com/arxenix/starborne-assistant/wiki)
 
# Bug reports / Feature requests
Open up a new [github issue](https://github.com/arxenix/starborne-assistant/issues/new)!

# Progress
I'll be trying to keep this [project board](https://github.com/arxenix/starborne-assistant/projects/1) updated :), or you can just ask me on discord.

# Contributing
I'd love some help developing this app, if you have any experience with react/react-native, please reach out to me on discord.
