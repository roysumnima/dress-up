import './EditableText.css'
import {useState} from "react";

// TODO:  store locally so doesnt disappear on refresh
// TODO:  on enter, save the text


function EditableText({ id, className, placeholder }) {
    const [text, setText] = useState(placeholder);

    return (
        <div id={id} className={className}>
            <input
                type={'text'}
                placeholder={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: `${Math.max(text.length+1)}ch` }}
            />
        </div>
    )
}

// function EditableText({ storageKey, placeholder }) {
//     const [isEditing, setEditing] = useState(false);
//     const [text, setText] = useState(
//         localStorage.getItem(storageKey) || placeholder
//     );
//
//     useEffect(() => {
//         localStorage.setItem(storageKey, text);
//     }, [text, storageKey]);
//
//     const handleChange = (event) => {
//         setText(event.target.value);
//     };
//
//     return (
//         <div
//             onClick={() => setEditing(true)}
//             style={{ cursor: "pointer", display: "inline-block" }}
//         >
//             { isEditing ? (
//                 <input
//                     type="text"
//                     value={text}
//                     onChange={handleChange}
//                     onBlur={() => setEditing(false)}
//                     autoFocus
//                 />
//             ) : (
//                 <span>{text}</span>
//             )}
//         </div>
//     );
// }



export default EditableText
