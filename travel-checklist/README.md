# Travel Checklist project

## Description

This is an interactive web page that lets user manage a travel check list.

## Requirements

1. The page should contain a header displaying the text "🌴 FAR AWAY 💼"
2. The main section of the page should contain a `form` allowing the user to type in the item name and to select the quantiy of the item.
3. User should be able to save the item and quantity to a list.
4. The list of items should be displayed below the `form`.
5. The user should be able to mark the items as packed. Packed times should have a different style from items yet to be packed.
6. The user should be able to delete items
7. User should be able to sort items by `Packed status`, `Insertion order`, `Ascending order (by item name)`.
8. User should be able to clear the list.
9. The page should contain a footer that displays different messages based on number of packed items.
   - If no items are packed the message should be "Start adding some items to your packing list 🚀".
   - If there are items in the list, then the message should be "You have packed `{X}` items on your list and you already packed `{Y}`(`{Z}%`).", where {X} is number items to be packed, {Y} is number of packed items, and {Z} is percentage of packed items.
   - If all items are packed, then the message should be "You are ready to go ✈️."

## Concepts Demonstrated

1. React Basics
2. React State (useState hook)
3. Event Management
4. Form Handling
5. Controlled Elements
6. Props
7. State Management
8. Child to Parent Component Communication
9. Add, Remove and Update data operations
10. Derived state
11. Reusable components using `children` prop

#### References

[Ultimate React Course by Jonas Schmedtmann](https://github.com/jonasschmedtmann/ultimate-react-course)
