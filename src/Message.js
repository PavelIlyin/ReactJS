import './Message.css';

function Message(props) {
    return (
        <div className="Message">
            <p className="text__message">{props.text}</p>
        </div>
    );
}

export default Message;