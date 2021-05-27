# Interactive pricing component

![Design preview for the Interactive pricing component coding challenge](./design/desktop-preview.jpg)

## The challenge

This personal project is inspired by a challenge on Frontend Mentor! This project is a interactive pricing component that shows th price according to different subscription levels. 💸

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

### Page view and pricing totals

Here are the different page view ranges and the corresponding monthly price totals:

- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

### Built with

- HTML5
- CSS
- Vanilla Javascript

### My thought process

I first built the interactive pricing component with HTML and CSS in desktop mode. Once majority of the styling was completed, I moved onto the functionality using vanilla JS. 

I wanted to use the switch statement as I haven't used this method before. Using the switch statement enabled the pricing component to work.

The JS logic is as follows in order:
- Initialise values by primarily using getElementByID
- Add cost data of different subscriptions levels
- On page load, show the intial value of $16 at 100K subscribers
- When the toggle is clicked it will activate the toggleWrapper
- A discount function is created when the toggle is activated
- The switch case is then used when user moves the interactive slider and then outputs a new price, pageviews and discount (if toggle is activated)
