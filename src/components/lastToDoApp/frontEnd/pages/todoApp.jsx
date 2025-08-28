import React, { useState } from 'react';
import NavigationPage from "../pages/navigationPage.jsx";
import {getUserDetails} from "../../backEnd/Services/utils/getUserDetails.js";
import ToDoService from "../../backEnd/Services/toDoServices.js";

function TodoApp() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handelSubmitTask = async () => {
        try {
            const userId = getUserDetails()?.userId;
            const data = {
                title,
                description,
                isComplete: false,
                createdBy: userId,
            };
            const response = await ToDoService.createToDo(data);
            console.log(response);
            resetForm();
            closeModal();
        } catch (e) {
            console.log(e);
        }
    };

    const openModal = () => {
        const dlg = document.getElementById('my_modal_1');
        if (dlg && dlg.showModal) dlg.showModal();
    };

    const closeModal = () => {
        const dlg = document.getElementById('my_modal_1');
        if (dlg && dlg.close) dlg.close();
    };

    const resetForm = () => {
        setTitle("");
        setDescription("");
    };

    const handleCancel = () => {
        resetForm();
        closeModal();
    };

    return (
        <>
            <NavigationPage active={"myTask"} />

            <div className="flex flex-row justify-center items-center w-full">
                {/* Top spacer or additional controls can go here */}
            </div>

            <div className="flex flex-row justify-center items-center gap-3 px-4">
                <h2 className="text-success text-2xl m-4">Enter Your Task</h2>
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-md"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="btn btn-success" onClick={openModal}>Add</button>
            </div>

            <div className="divider divider-info"></div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="flex flex-col justify-center items-center">
                <dialog id="my_modal_1" className="modal">
                    <div className="modal-box w-11/12 max-w-xl">
                        <h3 className="font-bold text-lg mb-4">Add New To Do Task</h3>
                        <div className="form-control w-full mb-3">
                            <label className="label">
                                <span className="label-text">Task Title</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Task Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered w-full h-32"
                                placeholder="Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        <div className="modal-action">
                            <button className="btn" onClick={handleCancel}>Cancel</button>
                            <button className="btn btn-primary" onClick={handelSubmitTask}>Save</button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </>
    );
}

export default TodoApp;