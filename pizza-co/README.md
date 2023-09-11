# Pizza Co project

## Description

This is a static web page displaying a menu of pizzas of fiticious restaurant.

## Requirements

1. The page should contain a header displaying the name of the fiticious company -
   "FAST REACT PIZZA CO"

2. The main content should contain the heading "OUR MENU"

3. Below the heading There should be the text reading "Authentic Italian Cuisine. `{number}` Creative dishes to choose from. All from our store oven, all organic, all delicious.". `{number}` should change depending on then length of list of pizzas in the menu.

4. Create a list of pizzas to be displayed in the menu. the menu should be shown below the message in `3`. In order to accomplish this

   - create a static list of pizzas with the fields -`id`, `name`, `ingredients`, `price`, `issoldout`, `imageurl`.
   - a reusable pizza component should be used to represent each pizza in the list.
   - A separate component should handle the iteration through the list and creation of the individual pizza component.
   - The pizza component should display the `pizza image` and `pizza details` side by side.
   - The pizza details should contain `name`,`ingredients` and `price`.
   - All the fields in pizza component should be customizable
   - The style of the pizza component should change depending on whether the pizza is sold out.

5. The footer should display a different message depending on the time of website visit.
   - If the user visits the website after business hours. The message should read "We're currently closed. please come back between `{open time}` and `{close time}`". `{open time}` and `{close time}` should be replaced with store open time and close time, respectively, in 24 hour clock format (HH:MM).
   - Else the message should read "We're open until {close time}. Come visit us or order online".
   - Show button with text 'Order online' if the user visits during open hours.

## Concepts Demonstrated

- React basics
- React props
- Component decomposition
- Iterate over a list and generate components
- Conditional rendering

#### References

[Ultimate React Course by Jonas Schmedtmann](https://github.com/jonasschmedtmann/ultimate-react-course)
