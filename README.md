# Micro-frontend - Runtime integration with Webpack ModuleFederation Plugin

The main purpose of this integration is to run a container in isolation which is hooked to two other different projects. Teams can work independently on sub projects and container will act like a shell putting everything together.

Folder Structure 
--------------------------------------------------------------------------------------------------------------------------------------------
1) Container - react app which acts as an outer shell for both home and dashboard. Uses routerhistory to maintain navigation.
2) app-home - react app customized using webpack. Expose home as remoteEntry file to container via module federation. Uses mem based history navigation.
3) app-dashboard - typescript app bootstrapped using create-react-app. Added custom webpack config to override default config.
