# Chinese Zodiac REST API

This is a RESTful API for retrieving and managing Chinese Zodiac data. The API allows you to fetch zodiac information based on name or year, as well as create, update, and delete zodiac entries.

## Features

- **Fetch all zodiac signs**
- **Fetch a zodiac sign by name**
- **Fetch a zodiac sign by year**
- **Add a new zodiac sign**
- **Update an existing zodiac sign**
- **Delete a zodiac sign**

---

## Requirements

- Node.js (version 14 or higher)
- npm (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

The server will run at `http://localhost:3000`.

---

## Endpoints

### 1. Get all zodiac signs
- **URL**: `/api/zodiacs`
- **Method**: `GET`
- **Response**:
  ```json
  [
    {
      "name": "Rat",
      "years": ["1924", "1936", "1948", ...],
      "traits": ["Intelligent", "Adaptable"],
      "element": "Water",
      "compatibility": ["Ox", "Dragon", "Monkey"]
    },
    ...
  ]
  ```

### 2. Get a zodiac sign by name
- **URL**: `/api/zodiacs/:name`
- **Method**: `GET`
- **Example**: `/api/zodiacs/rat`
- **Response**:
  ```json
  {
    "name": "Rat",
    "years": ["1924", "1936", "1948", ...],
    "traits": ["Intelligent", "Adaptable"],
    "element": "Water",
    "compatibility": ["Ox", "Dragon", "Monkey"]
  }
  ```

### 3. Get a zodiac sign by year
- **URL**: `/api/zodiac?year=:year`
- **Method**: `GET`
- **Example**: `/api/zodiac?year=1996`
- **Response**:
  ```json
  {
    "name": "Rat",
    "years": ["1924", "1936", "1948", ...],
    "traits": ["Intelligent", "Adaptable"],
    "element": "Water",
    "compatibility": ["Ox", "Dragon", "Monkey"]
  }
  ```

### 4. Add a new zodiac sign
- **URL**: `/api/zodiacs`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "name": "Phoenix",
    "years": ["2025"],
    "traits": ["Resilient", "Majestic"],
    "element": "Fire",
    "compatibility": ["Dragon", "Tiger"]
  }
  ```
- **Response**:
  ```json
  {
    "name": "Phoenix",
    "years": ["2025"],
    "traits": ["Resilient", "Majestic"],
    "element": "Fire",
    "compatibility": ["Dragon", "Tiger"]
  }
  ```

### 5. Update an existing zodiac sign
- **URL**: `/api/zodiacs/:name`
- **Method**: `PUT`
- **Example**: `/api/zodiacs/rat`
- **Request Body**:
  ```json
  {
    "traits": ["Quick-witted", "Resourceful"]
  }
  ```
- **Response**:
  ```json
  {
    "name": "Rat",
    "years": ["1924", "1936", "1948", ...],
    "traits": ["Quick-witted", "Resourceful"],
    "element": "Water",
    "compatibility": ["Ox", "Dragon", "Monkey"]
  }
  ```

### 6. Delete a zodiac sign
- **URL**: `/api/zodiacs/:name`
- **Method**: `DELETE`
- **Example**: `/api/zodiacs/rat`
- **Response**:
  ```json
  {}
  ```

---

## Data Structure

The zodiac data is stored in a JSON file:

```json
{
  "zodiacs": [
    {
      "name": "Rat",
      "years": ["1924", "1936", "1948", ...],
      "traits": ["Intelligent", "Adaptable"],
      "element": "Water",
      "compatibility": ["Ox", "Dragon", "Monkey"]
    },
    ...
  ]
}
```

---

## How to Contribute

1. Fork this repository.
2. Create a new branch for your feature/fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request.

---

## License

This project is licensed under the ISC License. See the LICENSE file for details.

---

## Contact

For questions or support, feel free to contact us at [your-email@example.com].
