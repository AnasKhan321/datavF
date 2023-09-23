import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import ReactPaginate from 'react-paginate';
import "./style.css";



export default function Barr() {
  const [data2, setdata2] = useState([])
  const [currentPage, setCurrentPage] = useState(0);

  const fethcData = () => {
    const res = fetch('http://127.0.0.1:8001/getdata').then((res) => res.json())
      .then((data) => {
        setdata2(data)
      });

  }

  useEffect(() => {
    fethcData();
  }, [])

  const itemsPerPage = 10;
  const pageCount = Math.ceil(data2.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data2.slice(startIndex, endIndex);


  return (

    <div className="w-9/12 mx-auto">

      <h1 className="text-center text-3xl font-bold my-4 ">Top Data</h1>

      {displayedData.map((e, i) => {


        return (

          <div className="my-12 shadow-lg p-4 mx-2  rounded shadow-sky-200 cursor-pointer hover:shadow-sky-300 " key={i}>
            <p className="font-bold text-center text-xl text-red-700">{e.pestle}</p>

            <p className="text-gray-400">{e.published}</p>
            <h2 className="text-center font-bold my-2 " > {e.country} </h2>
            <h3 className="text-center font-bold  py-2 ">{e.region}</h3>
            <h4 className="font-bold py-2 px-4 ">{e.insight}</h4>
            <h6 className="text-center py-8 font-bold text-sm " > {e.title} </h6>
            <h5 className="text-right mr-14 text-3xl font-bold  ">{e.topic}</h5>
            <Chart chartType="ColumnChart" width="100%" height="400px" data={[
              ["title", "Property", { role: "style" }],
              ["Likelihood", parseInt(e.likelihood), "darkblue"], // RGB value
              ["Intensity", parseInt(e.intensity), "red"], // English color name
              ["Relevance", parseInt(e.relevance), "#0f8000"],// CSS-style declaration
            ]} />

            <h1 className="text-center font-bold "> {e.start_year}  to {e.end_year} </h1>

          </div>

        )


      })}


      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={'pagination flex justify-between py-8'}
        activeClassName={'active'}
      />
    </div>
  );
}
