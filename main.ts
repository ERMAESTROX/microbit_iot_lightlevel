ESP8266ThingSpeak.connectWifi(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200,
"HABLAND-45",
"habland0846"
)
basic.forever(function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "VT481LKCGPUM7282",
    input.lightLevel(),
    0,
    0,
    0,
    0,
    0,
    0,
    0
    )
    ESP8266ThingSpeak.wait(5000)
})
