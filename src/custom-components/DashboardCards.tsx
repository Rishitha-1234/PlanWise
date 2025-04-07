
import DeadlinesCard from "./dashboard-card/Deadlines";
import ProjectCard from "./dashboard-card/ProjectCard";
import Activity from "./dashboard-card/RecentActivity";
import TaskCard from "./dashboard-card/Task";

export default function CardGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6">
            <ProjectCard/>


            <TaskCard/>

            <DeadlinesCard/>

            <Activity/>
        </div>
    );
}
