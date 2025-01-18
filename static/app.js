class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button'),
        };

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox));
        sendButton.addEventListener('click', () => this.onSendButton(chatBox));

        const inputField = chatBox.querySelector('input');
        inputField.addEventListener('keyup', ({ key }) => {
            if (key === 'Enter') {
                this.onSendButton(chatBox);
            }
        });
    }

    toggleState(chatBox) {
        this.state = !this.state;

        // Show or hide the chatbox
        if (this.state) {
            chatBox.classList.add('chatbox--active');
        } else {
            chatBox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatBox) {
        const inputField = chatBox.querySelector('input');
        const text = inputField.value;

        if (text === '') {
            return;
        }

        this.addMessage({ name: 'User', message: text });

        fetch('/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(data => {
                this.addMessage({ name: 'Sam', message: data.answer });
                this.updateChatText(chatBox);
                inputField.value = ''; // Clear input field
            })
            .catch(error => {
                console.error('Error:', error);
                this.addMessage({ name: 'Sam', message: 'Sorry, something went wrong. Please try again later.' });
                this.updateChatText(chatBox);
            });
    }

    addMessage(message) {
        this.messages.push(message);
    }

    updateChatText(chatBox) {
        let html = '';

        this.messages.slice().reverse().forEach(item => {
            if (item.name === 'Sam') {
                html += `<div class="messages__item messages__item--operator">${item.message}</div>`;
            } else {
                html += `<div class="messages__item messages__item--visitor">${item.message}</div>`;
            }
        });

        const chatMessages = chatBox.querySelector('.chatbox__messages');
        chatMessages.innerHTML = html;
    }
    
    
}

const chatbox = new Chatbox();
chatbox.display();
