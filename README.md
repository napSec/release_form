# Release of Liability Form Website

This project is a simple web application that allows users to read a Release of Liability form, sign it electronically, and submit it. The signed form is then saved on the server for record-keeping.

## Features

- **Read** a customizable Release of Liability statement.
- **Fill out** name, email, and date fields.
- **Draw a signature** using mouse or touch.
- **Submit** the form, which is saved as a JSON file (including the signature as a base64 PNG).

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript (Canvas for signature)
- **Backend:** Node.js, Express, Multer
- **Storage:** Local file system (JSON files)

---
![Screenshot at Jul 10 02-32-10](https://github.com/user-attachments/assets/11cc6a54-ec0a-426e-809b-ef4e871e881b)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository or download the files:**
    ```bash
    git clone https://github.com/yourusername/release-of-liability-form.git
    cd release-of-liability-form
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the server:**
    ```bash
    node server.js
    ```

4. **Open your browser and visit:**
    ```
    http://localhost:3000
    ```

---

## Project Structure

```
/release-of-liability-form
  |-- index.html         # Frontend HTML page
  |-- server.js          # Backend server code
  |-- /submissions       # Directory where signed forms are saved (auto-created)
  |-- README.md          # This file
  |-- package.json       # Node.js dependencies
```

---

## How It Works

1. The user reads the release statement and fills out the form.
2. The user draws their signature in the signature box.
3. On submission, the form data and signature are sent to the server.
4. The server saves the submission as a JSON file in the `/submissions` directory.

---

## Customization

- **Edit the release statement:**  
  Modify the text in `index.html` to fit your organization’s needs.
- **Change storage method:**  
  For production, consider saving submissions in a database or generating PDFs.

---

## Security Notes

- This is a demo and does **not** include authentication, HTTPS, or advanced validation.
- For production, implement proper security measures and data handling practices.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

