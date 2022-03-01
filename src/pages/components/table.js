import React from 'react';
import timeConverter from '../../lib/dateConverter'
export default function Table(props) {
  return (
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>التسلسل</th>
            <th>الدولار</th>
            <th>اليورو</th>
            <th>الذهب</th>
            <th>ريال ايراني</th>
            <th>ليرة تركية</th>
            <th>التاريخ</th>
          </tr>
        </thead>
        <tbody>
        {props.data.map((item, index) => {
         return <tr key={item.id}>
           <td>{index}</td>
           <td>{item.usd}</td>
           <td>{item.eur}</td>
           <td>{item.gold}</td>
           <td>{item.irr}</td>
           <td>{item.try}</td>
           <td>{timeConverter(Date.parse(item.date))}</td>
         </tr>;
        })}
        </tbody>
      </table>
    </div>
  );
}
