# Instagram Stories Clone

This project replicates the **Instagram Stories** feature using **JavaScript**, **HTML**, and **CSS**. Users can view profile pictures and click on them to see corresponding full-screen stories, which disappear automatically after a few seconds.

## Features

- **Dynamic Profile Story Rendering**: Profile pictures and stories are loaded from an array of objects.
- **Interactive Story View**: Clicking on a profile picture reveals the associated story.
- **Auto-Hide Functionality**: Stories disappear automatically after 3 seconds.


## How It Works

1. **Data Source**: Stories are stored in the `arr` array as objects with:
   - `dp`: URL for the profile picture.
   - `story`: URL for the full-screen story.

2. **Dynamic Rendering**:
   - Profile pictures are displayed dynamically using JavaScript.
   - Clicking on a profile triggers an event to display the story.

3. **Story Display**:
   - The story container appears and sets its background image to the selected story.
   - It automatically hides after 3 seconds.

## Example Data

```javascript
var arr = [
    {
        dp: "https://wallpapers.com/images/hd/motu-patlu-happy-d6ji2dkipv619c4x.jpg",
        story: "https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg"
    },
    {
        dp: "https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg",
        story: "https://i.pinimg.com/736x/91/a2/f9/91a2f91d5b755678023430eeece0aeed.jpg"
    }
];
