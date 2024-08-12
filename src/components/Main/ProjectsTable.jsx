const ProjectsTable = ({ projects }) => {
  const getStatusColour = (status) => {
    switch (status) {
      case "Completed":
        return { backgroundColor: "#31CF80" };
      case "In-progress":
        return { backgroundColor: "#EBCF4F" };
      case "Outdated":
        return { backgroundColor: "#D82C5B" };
      default:
        return {};
    }
  };

  return (
    <div className="-mx-5 -mb-5">
      <table className="w-full mb-0">
        <thead className="bg-[#F4F5F6] text-[#BCC2C8] text-[12px]">
          <tr>
            <th className="py-2 px-5">#</th>
            <th className="py-2 px-5 text-start">Name</th>
            <th className="py-2 px-5">Project Manager</th>
            <th className="py-2 px-5 text-end">Status</th>
          </tr>
        </thead>
        <tbody className="w-full text-[14px] align-middle border-0 border-inherit box-border">
          {projects.map((project) => {
            return (
              <tr key={project.index} className="table-row text-center">
                <td className="py-4 px-5">{project.index}</td>
                <td className="py-4 px-5 flex items-center">
                  <span className="mr-[.46785rem] w-[30px] h-[30px] flex items-center">
                    {project.logo}
                  </span>
                  {project.name}
                </td>
                <td className="py-4 px-5">{project.manager}</td>
                <td className="py-4 px-5">
                  <span
                    className="rounded-full text-[72%] font-semibold px-2 text-white"
                    style={getStatusColour(project.status)}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectsTable;
