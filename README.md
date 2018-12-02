# PWA Praxisbuch: Todo-App

Diese App wird unter [https://pwapraxis.liebel.io](https://pwapraxis.liebel.io) ausgeführt.

## Progressive Web App

Zum Bauen der Progressive Web App führen Sie folgenden Befehl auf der Kommandozeile aus:

```
ng build --prod
```

Progressive Web Apps lassen sich aus dem Browser als Desktop- und Mobil-App installieren.

## Desktop-App

Müssen Sie etwa zum Zugriff auf eine bestimmte native API die Webanwendung in einem nativen Anwendungsrahmen hosten, so geschieht dies für den Desktop mithilfe von Electron.

Der nachfolgende Befehl erzeugt Anwendungsbündel für Windows, macOS und Linux. Unter macOS und Linux muss dazu Wine installiert sein.

```
npm run package-desktop
```

## Mobil-App

Müssen Sie etwa zum Zugriff auf eine bestimmte native API die Webanwendung in einem nativen Anwendungsrahmen hosten, so geschieht dies für Mobilplattformen mithilfe von Cordova.

Der nachfolgende Befehl erzeugt Anwendungsbündel für iOS und Android. Zum Bauen benötigen Sie die nativen Plattform-SDKs und für iOS einen Mac (echte Hardware oder über einen Clouddienst).

```
npm run package-mobile
```
