import Title from "../Title";
import Icon from '../Icon';
export default function NewTask(){
    return(
        <>
        <Title size={2} className="formTitle" text="New task" />
        <form action="/tasks/new" method="post" className="newTaskForm">
            <div className="formHead">
                <Title size={4} className="formSubTitle" text={<><Icon className="fa-solid fa-pen-to-square" /> Adding a new task </>} />
                <Icon className="fa-solid fa-x" />
            </div>
        {/* <hr style={{width:"100%", }}/> */}
            <div className="formInputs">
                <div className="formInputsText">
                    <span className="titleArea">
                    <label htmlFor="title">Title <span className="labelStar">*</span></label>
                    <input type="text" name="title" className="textInput" id="taskTitleInput" placeholder="Title of task" required/>
                    </span>
                    <br />
                    <span className="descriptionArea">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="taskDescriptionInput" placeholder="Description to the task"></textarea>
                    </span>
                    <br />
                <div className="formSelectInputs">
                    <div className="categoryBox">
                        <label htmlFor="category">Category</label><br />
                        <select name="category" id="categorySelect">
                            <option value="study">Study</option>
                            <option value="wordk">Work</option>
                            <option value="pessoal">Pessoal</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="priorityBox">
                        <label htmlFor="priority">Priority</label><br />
                        <select name="priority" id="prioritySelect">
                            <option value="low">Low</option>
                            <option value="mid">Mid</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div className="statusBox">
                        <label htmlFor="status">Status</label><br />
                        <select name="pending" id="pendingSelect">
                            <option value="study">Pending</option>
                            <option value="wordk">Completed</option>
                        </select>
                    </div>
                    <div className="creationDateBox">
                        <label htmlFor="creationDate">Created at</label><br />
                        <input type="date" className="textInput datesInput" disabled/>
                    </div>
                    <div className="deadLineDateBox">
                        <label htmlFor="deadLine">Deadline date</label><br />
                        <input type="date" className="textInput datesInput"/>
                    </div>
                    <div className="dueDateBox">
                        <label htmlFor="dueDate">Due at</label><br />
                        <input type="date" className="textInput datesInput" disabled/>
                    </div>
                </div>
                </div>
            </div>
        </form>
        </>
    )
}