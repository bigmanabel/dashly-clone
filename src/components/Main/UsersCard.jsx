// import Card from "../UI/Card";
// import UsersTable from "./UsersTable";

// const UsersCard = () => {
//   return (
//     <div className="w-full px-[15px] flex-auto mb-5">
//       <Card className="px-5 pt-5">
//         <div className="flex justify-between items-center flex-row box-border p-5 -mx-5 -mt-5">
//           <h2 className="uppercase text-[14px] font-bold">Users</h2>
//         </div>
//         <div className="w-full">
//           <UsersTable />
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default UsersCard;

import { useState } from "react";
import Card from "../UI/Card";
import UsersTable from "./UsersTable";

const UsersCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 8;

  const users = [
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/9e7ac59225f733be5944b3e91271b33adb30cae7/56230/assets/images/profiles/profile-14.jpeg",
      fullName: "Hakeem Chan",
      email: "lobortis.augue@natoquepenatibuset.ca",
      userId: "#9265",
      signedUp: "03.26.2022",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/44bfbd93721837b9534e9dc6fc058dbaef92d03a/f9236/assets/images/profiles/profile-23.jpeg",
      fullName: "Orli J. Goodman",
      email: "pede@at.com",
      userId: "#8545",
      signedUp: "08.02.2021",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/236af360580cfc7622e3a7d309d709a5018937c5/e3ee4/assets/images/profiles/profile-16.jpeg",
      fullName: "Halee P. Lane",
      email: "diam@nislNullaeu.net",
      userId: "#4445",
      signedUp: "03.14.2021",
      status: "Pending",
    },
    {
      profileImage: null,
      fullName: "Kimberly Salinas",
      email: "in.lobortis.tellus@faucibusorci.co.uk",
      userId: "#2391",
      signedUp: "03.17.2021",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/963edcf9fc0c25098f00370b3b3d021e2ddac277/e69d6/assets/images/profiles/profile-17.jpeg",
      fullName: "Galena Oliver",
      email: "eleifend.nec@ligulaconsectetuerrhoncus.ca",
      userId: "#8987",
      signedUp: "12.15.2021",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/768c1ecfdff6a59ab55d514b80bd59e8dfa28996/35a64/assets/images/profiles/profile-19.jpeg",
      fullName: "Kelly Doyle",
      email: "urna.et@volutpatNulladignissim.org",
      userId: "#5898",
      signedUp: "04.21.2022",
      status: "Overdue",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/0b34af989cce5e54297f16547b3eff1ace44dad5/eb8ea/assets/images/profiles/profile-20.jpeg",
      fullName: "Keane Wyatt",
      email: "quam@Ut.org",
      userId: "#3431",
      signedUp: "06.18.2022",
      status: "Successful",
    },
    {
      profileImage: null,
      fullName: "Nasim Aguirre",
      email: "nisl@mollis.net",
      userId: "#6701",
      signedUp: "10.18.2021",
      status: "Overdue",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/23af178af51cd04f5a1b181720a77e2839e7a4be/5d54f/assets/images/profiles/profile-25.jpeg",
      fullName: "Leo Johnston",
      email: "Cum.sociis@Etiambibendumfermentum.co.uk",
      userId: "#9258",
      signedUp: "06.27.2021",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/f3d8c9fbcd994759c966476a8349d5d053e38964/e7323/assets/images/profiles/profile-26.jpeg",
      fullName: "Macon Dean",
      email: "aliquam@nec.edu",
      userId: "#4885",
      signedUp: "02.28.2021",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/ea01948f5a48922378b407c27d2b4e5809ed4949/35ecd/assets/images/profiles/profile-11.jpeg",
      fullName: "Yoko Grimes",
      email: "ut.eros@Donecporttitor.co.uk",
      userId: "#1960",
      signedUp: "10.27.2021",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/395009794393b7ec5f8c3faaf9823b0a3692032b/71f55/assets/images/profiles/profile-27.jpeg",
      fullName: "Jordan Douglas",
      email: "fermentum.convallis.ligula@euenimEtiam.edu",
      userId: "#8385",
      signedUp: "03.03.2022",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/395009794393b7ec5f8c3faaf9823b0a3692032b/71f55/assets/images/profiles/profile-27.jpeg",
      fullName: "Carly Beard",
      email: "dolor.dolor@lacusMaurisnon.org",
      userId: "#9380",
      signedUp: "06.11.2022",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/5c7ec5413a460dc895a7798c37ce609f43ad36b0/c94b0/assets/images/profiles/profile-29.jpeg",
      fullName: "Kareem Q. Weeks",
      email: "eget@aliquetProinvelit.co.uk",
      userId: "#9761",
      signedUp: "05.30.2021",
      status: "Overdue",
    },
    {
      profileImage: null,
      fullName: "Drew R. Hatfield",
      email: "Integer.vulputate@facilisi.edu",
      userId: "#4798",
      signedUp: "07.18.2021",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/693e2209e9a62e54c60745dd18751d70c3dec10a/9d43e/assets/images/profiles/profile-22.jpeg",
      fullName: "Kitra F. Strickland",
      email: "Donec.consectetuer@dolorNulla.net",
      userId: "#1246",
      signedUp: "05.06.2022",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/5dfa4398a7f2beddbcfa617402e193f2f13aaa94/2ecb0/assets/images/profiles/profile-28.jpeg",
      fullName: "Jack Dennis",
      email: "Quisque.libero.lacus@torquentper.com",
      userId: "#1099",
      signedUp: "07.25.2022",
      status: "Successful",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/d48629dc873bf03c72cd58826b5de65bc800aaac/5bb69/assets/images/profiles/profile-10.jpeg",
      fullName: "Tyler Hartman",
      email: "arcu.imperdiet@Pellentesqueultriciesdignissim.com",
      userId: "#9151",
      signedUp: "05.01.2022",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/14bd6c6c1ba1296a1542d31d7dd9490e8bc9e472/d1f70/assets/images/profiles/profile-18.jpeg",
      fullName: "Hally Gilmore",
      email: "lacus.Etiam@Pellentesquehabitantmorbi.net",
      userId: "#9846",
      signedUp: "10.04.2021",
      status: "Pending",
    },
    {
      profileImage:
        "https://d33wubrfki0l68.cloudfront.net/b12e43e592a36b25ced24c52bc8ae78595f1f2c6/2ceab/assets/images/profiles/profile-24.jpeg",
      fullName: "Rosalyn Cherry",
      email: "at.egestas.a@eunullaat.co.uk",
      userId: "#9564",
      signedUp: "07.01.2021",
      status: "Pending",
    },
  ];

  const totalPages = Math.ceil(users.length / usersPerPage);

  const currentUsers = users.slice(
    (currentPage - 1) * usersPerPage,
    currentPage * usersPerPage
  );


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const startIndex = (currentPage - 1) * usersPerPage + 1;
    const endIndex = Math.min(currentPage * usersPerPage, users.length);

  return (
    <div className="w-full flex-auto mb-5">
      <Card className="p-5">
        <div className="flex justify-between items-center flex-row box-border p-5 -mx-5 -mt-5">
          <h2 className="uppercase text-[14px] font-bold">Users</h2>
        </div>
        <div className="w-full">
          <UsersTable users={currentUsers} />
        </div>
        <div className="flex justify-between items-center mt-10">
          <span className="text-[14px]">
            Showing: {startIndex} - {endIndex} of {users.length}
          </span>
          <span>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-[12px] py-[6px] text-[16px] ${
                  index + 1 === currentPage
                    ? "bg-[#00BAC7] text-white"
                    : "bg-gray-200 text-[#00BAC7]"
                } ${index === 0 ? "rounded-l-lg" : ""} ${
                  index === totalPages - 1 ? "rounded-r-lg" : ""
                }`}
              >
                {index + 1}
              </button>
            ))}
          </span>
        </div>
      </Card>
    </div>
  );
};

export default UsersCard;
