import Statusandtask from "./statusandtask"
import Task from "./task"

function Dashboardmainfunctional() {
  return (
    <div className="flex gap-4 p-4 bg-[#ffffff] rounded-lg">
        <Statusandtask title={"To do"}>
            <Task status={"To do"} title={"Implement User Authentication"}
                description={"Develop and integrate user authentication using email and password."}
                 priority={"Urgent"} deadline={"2024-08-15"}/>
          </Statusandtask>
        <Statusandtask title={"In progress"}>
            <Task status={"In progress"} title={"Design Home Page UI"}
                description={"Develop and integrate user authentication using email and password."}
                 priority={"Medium"} deadline={"2024-08-15"}/>
            <Task status={"In progress"} title={"Implement User Authentication"}
                description={"Develop and integrate user authentication using email and password."}
                 priority={"Low"} deadline={"2024-08-15"}/>
        </Statusandtask>
        <Statusandtask title={"Under review"}>
            <Task status={"Under review"} title={"Implement User Authentication"}
                description={"Develop and integrate user authentication using email and password."}
                 priority={"Urgent"} deadline={"2024-08-15"}/>
        </Statusandtask>
        <Statusandtask title={"Finished"}>
                <Task status={"Finished"} title={"Implement User Authentication"}
                description={"Develop and integrate user authentication using email and password."}
                 priority={"Medium"} deadline={"2024-08-15"}/>
        </Statusandtask>
    </div>
  )
}

export default Dashboardmainfunctional