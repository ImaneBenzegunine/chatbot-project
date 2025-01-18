# Chatbot Project for University- ENSA Berrechid

This project is a simple AI-powered chatbot designed for my university coursework(ENSA Berrechid). The chatbot is built using Python, Flask, PyTorch, and Natural Language Processing (NLP) techniques. It is capable of understanding and responding to predefined intents.

## Features

- User-friendly interface for interacting with the chatbot.
- Ability to classify user inputs into predefined categories.

## Screenshots

![image](https://github.com/user-attachments/assets/be68e16f-04b3-46bd-b96f-b83a578f72fe)


## Getting Started

Follow these steps to set up and run the chatbot on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- Python 3.8 or later
- pip (Python package manager)
- Flask
- PyTorch

### Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ImaneBenzegunine/chatbot-project.git
   cd <repository-folder>
   ```

2. Install the required Python libraries:
   ```bash
   pip install -r requirements.txt
   ```

3. Download the intents file:
   Ensure the `intents.json` file is located in the root directory of the project. This file contains the predefined intents and responses.

4. Train the chatbot model:
   Run the training script to create the model file (`data.pth`):
   ```bash
   python train.py
   ```

5. Start the Flask server:
   ```bash
   python app.py
   ```

6. Open your web browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

   Interact with the chatbot through the interface.

## Project Structure

- `app.py`: Main Flask application for handling user input and chatbot responses.
- `train.py`: Script to train the chatbot model using the data in `intents.json`.
- `model.py`: Defines the neural network architecture for the chatbot.
- `nltk_utils.py`: Contains utility functions for tokenization, stemming, and bag-of-words creation.
- `intents.json`: Contains the intents, patterns, and responses for the chatbot.
- `data.pth`: File where the trained model is saved.
- `static/`: Contains frontend assets:
  > `app.js`: JavaScript for client-side chatbot interaction.
  > `style.css`: Stylesheet for the chatbot interface.
  > `images/`: Contains images for the project, including chat.png, which should be replaced locally as needed.
- `templates/`: Contains the HTML templates for rendering the interface.

## How It Works

1. **Input Tokenization:**
   User input is tokenized and preprocessed using NLP techniques.

2. **Bag of Words Representation:**
   The tokenized input is converted into a numerical representation.

3. **Prediction:**
   The model predicts the intent of the user input.

4. **Response Generation:**
   Based on the predicted intent, the chatbot provides a predefined response.

## Example Interaction

1. User: *"Hello!"*
2. Chatbot: *"Hi there! How can I help you today?"*

## Customization

To modify or add new intents and responses, edit the `intents.json` file and retrain the model using `train.py`.

## Academic Purpose

This chatbot was developed as part of my university coursework at **[Your University Name]**. It demonstrates practical applications of machine learning and NLP concepts in building intelligent systems.

## Contribution

Feel free to contribute to this project by submitting pull requests or reporting issues.


---

Thank you for reviewing my university project! If you have any questions or suggestions, please feel free to contact me via Linkedin: https://www.linkedin.com/in/imane-benzegunine/

