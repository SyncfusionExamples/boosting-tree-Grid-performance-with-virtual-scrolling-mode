import { enableRipple } from '@syncfusion/ej2-base';
import { Button } from '@syncfusion/ej2-buttons';
enableRipple(true);

import { TreeGrid, VirtualScroll } from '@syncfusion/ej2-treegrid';
import { virtualData, dataSource } from './data-source';
/**
 * infinitescrolling sample
 */

TreeGrid.Inject(VirtualScroll);

let date1: number;
let date2: number;
let flag: boolean = true;
let genarateData: Button = new Button({}, '#genarate');
let data: Object[] = [];
genarateData.element.onclick = () => {
  if (!data.length) {
    show();
    dataSource();
    date1 = new Date().getTime();
    treegrid.dataSource = data = virtualData;
  }
};
let treegrid: TreeGrid = new TreeGrid({
  enableVirtualization: true,
  treeColumnIndex: 1,
  childMapping: 'Crew',
  pageSettings: { pageSize: 50 },
  height: 400,
  columns: [
    {
      field: 'TaskID',
      headerText: 'Player Jersey',
      width: 140,
      textAlign: 'Right'
    },
    { field: 'FIELD1', headerText: 'Player Name', width: 140 },
    { field: 'FIELD2', headerText: 'Year', width: 120, textAlign: 'Right' },
    { field: 'FIELD3', headerText: 'Stint', width: 90, textAlign: 'Right' },
    { field: 'FIELD4', headerText: 'TMID', width: 90, textAlign: 'Right' },
    { field: 'FIELD5', headerText: 'LGID', width: 90, textAlign: 'Right' },
    { field: 'FIELD6', headerText: 'GP', width: 90, textAlign: 'Right' },
    { field: 'FIELD7', headerText: 'GS', width: 90, textAlign: 'Right' }
  ],
  dataBound: hide
});
treegrid.appendTo('#TreeGrid');

function show(): void {
  document.getElementById('popup').style.display = 'inline-block';
}
function hide(): void {
  if (flag && date1) {
    let date2: number = new Date().getTime();
    document.getElementById('performanceTime').innerHTML =
      'Time Taken: ' + (date2 - date1) + 'ms';
    flag = false;
    genarateData.disabled = true;
  }
  document.getElementById('popup').style.display = 'none';
}
