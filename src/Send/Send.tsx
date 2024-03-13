import "./Send.css";
import { useState } from 'react';

const Sent = () => {
    const [comments, setComments] = useState([] as { id: number; text: string }[]);
    const [inputText, setInputText] = useState('');
    const [editingCommentId, setEditingCommentId] = useState(-1); 
    const [count, setCount] = useState(0);
    const [plusClicked, setPlusClicked] = useState(false);
    const [minusClicked, setMinusClicked] = useState(false);

    const handleInputChange = (event: any) => {
        setInputText(event.target.value);
    };

    const handleDelete = (id: number) => {
        const updatedComments = comments.filter((comment) => comment.id !== id);
        setComments(updatedComments);
    };

    const handleEdit = (id: number) => {
        setEditingCommentId(id);
        const commentToEdit = comments.find((comment) => comment.id === id);
        if (commentToEdit) {
            setInputText(commentToEdit.text);
        }
    };

    const handleSaveEdit = () => {
        if (inputText.trim() !== '') {
            const updatedComments = comments.map((comment) =>
                comment.id === editingCommentId ? { ...comment, text: inputText } : comment
            );
            setComments(updatedComments);
            setEditingCommentId(-1);
            setInputText('');
        }
    };

    const handleSendButtonClick = (e: any) => {
        e.preventDefault();
        if (editingCommentId !== -1) {
            handleSaveEdit();
        } else if (inputText.trim() !== '') {
            const newComment = { id: comments.length, text: inputText };
            setComments([...comments, newComment]);
            setInputText('');
        }
    };

    const handlePlus = () => {
        if (!plusClicked) {
            setCount(count + 1);
            setPlusClicked(true);
            setMinusClicked(false);
        }
    };

    const handleMinus = () => {
        if (!minusClicked && count > 0) {
            setCount(count - 1);
            setMinusClicked(true);
            setPlusClicked(false);
        }
    };

    return (
        <>
            <div className='CommentsContainer'>
                {comments.map((comment) => (
                    <div className='Commentdiv' key={comment.id}>
                        <div className="Dateandimg">
                            <img className="Commentimg" src='Zuka.png' alt="" />
                            <p className="Commentname">ZukaSutidze</p>
                            <p className="Commentdate">Right now</p>
                        </div>

                        {editingCommentId === comment.id ? (
                      <p
                                className="Commenttext"   
                                onChange={handleInputChange}
                            >{inputText}</p>
                        ) : (
                            <div key={comment.id} className="Commenttext">
                                {comment.text}
                            </div>
                        )}

                        <div className="Button">
                            <svg
                                className="Plus"
                                onClick={handlePlus}
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                            >
                                <path d="M6.33018 10.896C6.46674 10.896 6.58468 10.8463 6.684 10.747C6.78331 10.6477 6.83297 10.5298 6.83297 10.3932V7.004H10.1477C10.2842 7.004 10.4022 6.95434 10.5015 6.85503C10.6008 6.75571 10.6505 6.63777 10.6505 6.50121V5.27216C10.6505 5.1356 10.6008 5.01766 10.5015 4.91834C10.4022 4.81903 10.2842 4.76937 10.1477 4.76937H6.83297V1.39879C6.83297 1.26223 6.78331 1.14429 6.684 1.04497C6.58468 0.945655 6.46674 0.895996 6.33018 0.895996H4.91491C4.77835 0.895996 4.66041 0.945655 4.56109 1.04497C4.46177 1.14429 4.41212 1.26223 4.41212 1.39879V4.76937H1.07878C0.942221 4.76937 0.824282 4.81903 0.724965 4.91834C0.625647 5.01766 0.575989 5.1356 0.575989 5.27216V6.50121C0.575989 6.63777 0.625647 6.75571 0.724965 6.85503C0.824282 6.95434 0.942221 7.004 1.07878 7.004H4.41212V10.3932C4.41212 10.5298 4.46177 10.6477 4.56109 10.747C4.66041 10.8463 4.77835 10.896 4.91491 10.896H6.33018Z" fill="#C5C6EF"/>
                            </svg>

                            <p className="Number">{count}</p>

                            <svg
                                className="Minus"
                                onClick={handleMinus}
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="3"
                                viewBox="0 0 10 3"
                                fill="none"
                            >
                                <path d="M9.24791 2.5C9.45218 2.5 9.6286 2.44444 9.77716 2.33333C9.92572 2.22222 10 2.09028 10 1.9375V0.5625C10 0.409722 9.92572 0.277778 9.77716 0.166667C9.6286 0.0555556 9.45218 0 9.24791 0H0.752089C0.547818 0 0.371402 0.0555556 0.222841 0.166667C0.0742804 0.277778 0 0.409722 0 0.5625V1.9375C0 2.09028 0.0742804 2.22222 0.222841 2.33333C0.371402 2.44444 0.547818 2.5 0.752089 2.5H9.24791Z" fill="#C5C6EF"/>
                            </svg>
                        </div>

                        <div className="Replay22">
                            <div onClick={() => { handleDelete(comment.id) }} className="Div Div1">
                                <img src="Delete.svg" alt="" />
                                <p className="Delete">Delete</p>
                            </div>

                            {editingCommentId === comment.id ? (
                                <div onClick={handleSaveEdit} className="Div Div2">
                                    <img src="Edit.svg" alt="" />
                                    <p className="Reply">Edit</p>
                                </div>
                            ) : (
                                <div onClick={() => handleEdit(comment.id)} className="Div Div2">
                                    <img src="Edit.svg" alt="" />
                                    <p className="Reply">Edit</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

                <form onSubmit={handleSendButtonClick}>
                <div className='Send'>
                    <input
                        type="text"
                        maxLength={195}
                        className='Comment'
                        placeholder={editingCommentId == -1 ? 'Add a comment...' : 'Edit your comment...'}
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <img className='sendimg' src='Zuka.png' alt='' />
                    <button className='Sendbtn' onClick={handleSendButtonClick}>
                    {editingCommentId !== -1 ? 'Save' : 'Send'}
                    </button>
                </div>
            </form>
        </>
    )
}

export default Sent;
