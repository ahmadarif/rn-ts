# To list your AVDs use :
```
emulator -list-avds

# for detailed information
android list avd
```

# To run emulator
```
cd /sdk-path/tools
emulator -avd EMULATOR_NAME or emulator @EMULATOR_NAME
```

# Restart ADB
```
adb kill-server
adb start-server
```

# Open developer setting
```
Ctrl+M in emulator or Shake the device
```

# Error when build
```
# Error message
Unable to process incoming event 'ProgressComplete ' (ProgressCompleteEvent)

# Use this command
gradlew assembleRelease --console plain
```