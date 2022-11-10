# DIGITALIZE - WEEK4 TASK
## Understanding
This is a fresh react-app project, Entry point for the app is `index.js`, there is a main component called `App.js`, try to wrap all your components (form, search and table) as children under `App.js`.

## Getting Started
- Fork the repo.
- Clone the forked repo into your machine.
- run `npm i`.
- Write your solution.
- Commit and push your changes to the repo.
- Do pull request.

## Specifications
1 - Create the following UI and controls:
  - Add form to the top of the table to add new patient to the patients list.
  - Add search input to enable the user searchs for a patient by his full name or phone.
  - Add table that display patients list.
2- Display patients list in the table.
3- Add new patient to the list by entering patient information in the form and click on `add` submit button. clear the inputs after submitting.
4- Implement search functionality: the user can seacrh for patient by full name of phone, the table must be updated while the user typing, if the input become empty then reset table to display the original data

5- (Optional) delete patient row from the table: delete patient row from the table if the user click on `delete` button for any row.
## Hints
- You can use flexbox to make the page look as much as possible similar to the provided UI.
- use `map` js function to iterate through patients list and render it in a table.
- add `Add` button inside the form as submit button and handle `onSubmit` event to collect data from inputs and add them as object to the list.
- you can use `.filter` js function to do the search on the list.
- you may define the following states in your `App.js` component:
  - fullName(text), phone(text), Gender(select), date(picker), submit input (add).
  - searchValue
  - patients and filteredPatients
- Always let table filled with `filteredPatients` and keep patients copy to be the original copy and don't modify it.
- in case user clears search input, you can restore patients data from `patients` list to `filteredPatients`.
- Regarding feature `delete` patient from the table, you can pass id of selected patient to the onClick callback function in `.map` callback function. use passed id as the key to find the object in the list and remove it. use `find` or `findIndex` js for this purpose.

## UI
This is a simple UI that you have to follow and implement in your design.
![Patients](https://user-images.githubusercontent.com/20383171/201022934-1d7b3110-bec7-4184-905f-03f03bc0a006.png)


Colors:
- Blue: #3995FF
- Red: #FF5353

DONE
