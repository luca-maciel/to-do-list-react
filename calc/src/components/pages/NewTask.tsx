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
                </div>
                <div className="formSelectInputs" style={{display:"grid", gridTemplateColumns: "auto auto auto"}}>
                    <div className="box">
                        <p>test</p>
                    </div>
                    <div className="box">
                        <p>test</p>
                    </div>
                    <div className="box">
                        <p>test</p>
                    </div>
                    <div className="box">
                        <p>test</p>
                    </div>
                    <div className="box">
                        <p>test</p>
                    </div>
                    <div className="box">
                        <p>test</p>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}