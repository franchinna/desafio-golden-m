import React from 'react';
import MUIDataTable from "mui-datatables";
import RestorePageIcon from '@material-ui/icons/RestorePage';
import { LocationIcon, IdontknowIcon, AddIcon, AlertIcon } from "../../icons";


const table = () => {

  const columnas = [
      "Type",
      "Name",
      "Sensor",
      "Date",
      "Time",
      "Status",
      "Action",
  ];

  const options = {
    filterType: 'checkbox',
  };

  {console.log(RestorePageIcon)}
  
  const data = [
    [<span class="material-icons">thermostat</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active", 
    <span class="material-icons">build</span>],

    [<span class="material-icons">lightbulb</span> , "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
    <span class="material-icons">build</span>],

    [<span class="material-icons">meeting_room</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
     <span class="material-icons">build</span>],

    [<span class="material-icons">av_timer</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
     <span class="material-icons">build</span>],
    [<span class="material-icons">thermostat</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active", 
    <span class="material-icons">build</span>],

    [<span class="material-icons">lightbulb</span> , "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
    <span class="material-icons">build</span>],

    [<span class="material-icons">meeting_room</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
     <span class="material-icons">build</span>],

    [<span class="material-icons">av_timer</span>, "Alert Name", "Sensor Name", "12/01/2021", "03:21:PM", "Active",
     <span class="material-icons">build</span>],
  ];

  return (
    <div>
      <MUIDataTable
        title={"Alerts"}
        data={data}
        columns={columnas}        
        options={options}
      />
    </div>
  );
}

export default table;