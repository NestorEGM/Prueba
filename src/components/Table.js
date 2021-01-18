import { useEffect, useState } from 'react';
import Row from './Row';
import { getDataByRange } from '../helpers/dataHelpers';
import '../style/Table.css';

const Table = ({ desde, hasta }) => {

  const [row, setRow] = useState({});
  const [keys, setKeys] = useState([]);

  const initData = () => {
    let data = [];
    let firstRow = {};
    let keys = [];
    data = getDataByRange(desde, hasta);
    keys = Object.keys(data[0]).reduce((prevVal, val) => {
      if (val !== 'Dia' && val !== 'Day') {
        return [
          ...prevVal,
          val,
        ];
      }
      return prevVal;
    }, []);
    data.forEach(value => {
      keys.forEach(key => {
        const sum = firstRow[key] ? firstRow[key] : 0;
        firstRow = {
          ...firstRow,
          [key]: value[key] + sum,
        }
      });
    });
    setRow(firstRow);
    setKeys(keys);
  };

  useEffect(() => {
    initData();
  }, []);
  return (
    <div className="table-wrapper">
      <table>
        <tbody>
          <tr>
            <th className="table-header" colSpan={2}>
              {`Cubeta ${desde} a ${hasta}`}
            </th>
          </tr>
          <Row data={{
            [keys[0]]: row[keys[0]],
            [keys[1]]: row[keys[1]],
          }}
          />
          <Row data={{
            [keys[2]]: row[keys[2]],
            [keys[3]]: row[keys[3]],
          }}
            circleColor="green"
          />
          <Row data={{
            [keys[4]]: row[keys[4]],
            [keys[5]]: row[keys[5]],
          }}
            circleColor="gray"
          />
        </tbody>
      </table>
    </div>
  )
};

export default Table;
