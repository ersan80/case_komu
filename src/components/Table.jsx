import React, { useEffect, useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../scss/Table.scss";

const Table = ({ task, search, deleteData }) => {
  const charCode = search.charCodeAt(0);
  console.log(charCode)
  const [notFound, setNotFound] = useState(
    "The cargo information you were looking for was not found 😔"
  );
  const [filter, setFilter] = useState([]);
  const filtered = () => {
    const data = task?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(search) ||
        item?.policyNo?.toLowerCase().includes(search) ||
        item?.phone?.toLowerCase().includes(search) ||
        item?.email?.toLowerCase().includes(search)
    );
    setFilter(data);
  };

  useEffect(() => {
    filtered();
  }, [search,task]);


  return (
    <div className="tableContainer">
      {!(charCode === 32) && search && (
        <div className="div">
          {filter.length > 0 ? (
            filter?.map((item, index) => {
              const { id, name, email, phone, policyNo } = item;
              return (
                <div key={id}>
                  {filter && (
                    <div className="container">
                      <div className="nameDiv">{name}</div>

                      <div className="infoBox">
                        <div>
                          <p>
                            <PhoneIcon /> {phone}
                          </p>
                        </div>
                        <div>
                          <p>
                            <AlternateEmailIcon /> {email}
                          </p>
                        </div>
                        <div>
                          <p>
                            <DescriptionIcon /> {policyNo}
                          </p>
                        </div>

                        <div>
                          <p
                            className="deleteCell"
                            onClick={() => deleteData(id)}
                          >
                            <DeleteForeverIcon className="deleteIcon" />
                            Delete
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <p style={{ backgroundColor: "red" }}>{notFound}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Table;
