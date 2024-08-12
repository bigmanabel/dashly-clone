const UsersTable = ({ users }) => {
  const getStatusColour = (status) => {
    switch (status) {
      case "Successful":
        return { backgroundColor: "#31CF80" };
      case "Pending":
        return { backgroundColor: "#EBCF4F" };
      case "Overdue":
        return { backgroundColor: "#D82C5B" };
      default:
        return {};
    }
  };

  const getRandomColor = () => {
    const colors = ["#FF5733", "#33C3FF", "#FF33F6", "#33FF57", "#3357FF"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const getInitials = (fullName) => {
    const names = fullName.split(" ");
    return names[0].charAt(0) + names[names.length - 1].charAt(0);
  };

  return (
    <div className="overflow-x-auto -mx-5">
      <table className="w-full mb-0 text-nowrap">
        <thead className="bg-[#F4F5F6] text-[#BCC2C8] text-[12px] w-full">
          <tr>
            <th className="py-2 px-5 text-start">
              <input type="checkbox" name="" id="" />
            </th>
            <th className="py-2 px-5 text-start">Full name</th>
            <th className="py-2 px-5 text-start">Email</th>
            <th className="py-2 px-5 text-start">UserID</th>
            <th className="py-2 px-5 text-start">Signed up</th>
            <th className="py-2 px-5 text-start">Status</th>
          </tr>
        </thead>
        <tbody className="w-full text-[14px] align-middle border-0 border-inherit box-border">
          {users.map((user, index) => (
            <tr key={index} className="border-b border-[#F4F4F4]">
              <td className="py-4 px-5">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="py-4 px-5">
                <div className="flex items-center">
                  <div className="w-[30px] h-[30px] mr-2">
                    {user.profileImage ? (
                      <img
                        src={user.profileImage}
                        alt=""
                        className="rounded-full w-full h-full"
                      />
                    ) : (
                      <div
                        className="rounded-full w-[30px] h-[30px] flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: getRandomColor() }}
                      >
                        {getInitials(user.fullName)}
                      </div>
                    )}
                  </div>
                  <span className="flex items-center">{user.fullName}</span>
                </div>
              </td>
              <td className="py-4 px-5">{user.email}</td>
              <td className="py-4 px-5">{user.userId}</td>
              <td className="py-4 px-5">{user.signedUp}</td>
              <td className="py-4 px-5">
                <span className="rounded-full px-2 flex items-center">
                  <span
                    className="rounded-full mr-1 w-[7px] h-[7px] inline-block"
                    style={getStatusColour(user.status)}
                  ></span>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
