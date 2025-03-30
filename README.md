# Currency Converter Component

A React-based currency converter that allows users to convert between different currencies using real-time exchange rates. The component provides a user-friendly interface with dropdown selection, a swap feature, and the ability to mark favorite currencies.

## Features

- **Real-Time Conversion:** Fetches exchange rates from the [Frankfurter API](https://www.frankfurter.app/) for accurate currency conversion.
- **Dropdown Selection:** Users can select currencies from a list of countries.
- **Amount Input:** Users can enter an amount to convert.
- **Swap Currencies:** Easily switch between the "From" and "To" currencies.
- **Favorite Currencies:** Users can mark and store their favorite currencies in local storage for quick access.
- **Loading Indicator:** Displays a loading state while fetching exchange rates.
- **Error Handling:** Alerts the user if an issue occurs during conversion.

## Technologies Used

- React.js (useState for state management)
- Fetch API for real-time currency data
- Local Storage for saving favorite currencies
- React Icons (`react-icons/tb`) for UI enhancements

## Usage

1. Select the "From" and "To" currencies from the dropdown.
2. Enter the amount to be converted.
3. Click the **Convert** button to fetch the converted amount.
4. Use the **Swap** button to switch currencies.
5. Click on a currency to add/remove it from favorites.

