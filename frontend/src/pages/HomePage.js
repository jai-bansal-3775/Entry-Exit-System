import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [empData, setEmpData] = useState();
  const [dateValue, setDateValue] = useState('');

  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getallUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const res = await getPeople.json();
      setEmpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const clickHandler = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getOutUser`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data Fetched Successfully");
      const res = await getPeople.json();
      setEmpData(res);
    } catch (error) {
      console.log(error);
    }
  };

  const dateHandler = async () => {
    try {
      const getPeople = await fetch(
        `${process.env.REACT_APP_BASE_URL}/getByDate/${dateValue}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Data Fetched Successfully");
      const res = await getPeople.json();
      setDateValue('');
      setEmpData(res);
    } catch (error) {
      console.log(error);
      setDateValue('');
    }
  };

  useEffect(() => {
    getAllData();
  }, []);
  console.log("Printing Employee Data", empData);

  const dateChangeHandler = (event) => {
    setDateValue(event.target.value);
  }

  // console.log(empData);

  return (
    <>
      <section className="container px-4 mx-auto py-4 bg-gray-800">
        <div className="LogoHeading flex items-center gap-5 border-2 p-2 mb-4 rounded-[10px] bg-gradient-to-r from-white to-blue-200">
          <img src="https://event.iitg.ac.in/icann2019/Proceedings_LaTeX/2019/IITG_logo.png" alt="IITGLOGO" height={80} width={80} ></img>
          <h1 className="text-3xl font-bold text-gray-700">Indian Institute of Technology Guwahati</h1>
        </div>
        <div className="flex items-center gap-2 justify-center font-medium text-gray-800 dark:text-white p-4 mb-5">
          <span className="text-blue-500 text-4xl">eRegister</span><span className="text-xl m-2 text-cyan-200">Student Entry-Exit System</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-4">
            <button onClick={clickHandler} className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Filter Button
            </button>

            <button onClick={getAllData} className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Show all Data
            </button>
            <div className="flex gap-2 border-2 border-indigo-600 rounded-md bg-slate-400 p-1">
            <input type="date" id="dateValue" name="dateValue" value={dateValue} onChange={dateChangeHandler} className="rounded-md border-1"/>
            <button onClick={dateHandler} className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
              Search With Date
            </button>
            </div>
          </div>



          <Link to={"/addemployee"}>
            <div>
              <button className="rounded-md bg-indigo-600 px-3.5 py-3 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 ">
                Create New Entry
              </button>
            </div>
          </Link>
        </div>
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg ">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 ">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr className="bg-black">
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        <span>Student Name & Email</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Roll No.
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Department
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Hostel
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Contact No.
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        Out Time
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-200 dark:text-gray-400"
                      >
                        In Time
                      </th>

                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y divide-gray-300 dark:divide-gray-700 dark:bg-gray-900">
                    {empData?.data.map((person) => (
                      <tr key={person.name} className="bg-sky-100">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full object-cover"
                                src={person.image}
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {person.name}
                              </div>
                              <div className="text-sm text-gray-600 dark:text-gray-400">
                                {person.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 dark:text-white">
                            {person.rollNo}
                          </div>
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.department}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.hostel}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.contact}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.outTime}
                        </td>

                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                          {person.inTime}
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
