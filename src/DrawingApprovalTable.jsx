import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const DrawingApprovalTable = () => {
  const [selectedSubmissionDates, setSelectedSubmissionDates] = useState([null, null, null]);
  const [selectedApprovalDates, setSelectedApprovalDates] = useState([null, null, null]);
  const [pendingIssues, setPendingIssues] = useState(['', '', '']);
  const [statusOptions, setStatusOptions] = useState(['Pending', 'Pending', 'Pending']); // Defaulting all to Pending

  const handleSubmissionDateChange = (date, index) => {
    const newSelectedDates = [...selectedSubmissionDates];
    newSelectedDates[index] = date;
    setSelectedSubmissionDates(newSelectedDates);
  };

  const handleApprovalDateChange = (date, index) => {
    const newSelectedDates = [...selectedApprovalDates];
    newSelectedDates[index] = date;
    setSelectedApprovalDates(newSelectedDates);
  };

  const handlePendingIssueChange = (event, index) => {
    const newPendingIssues = [...pendingIssues];
    newPendingIssues[index] = event.target.value;
    setPendingIssues(newPendingIssues);
  };

  const handleStatusChange = (event, index) => {
    const newStatusOptions = [...statusOptions];
    newStatusOptions[index] = event.target.value;
    setStatusOptions(newStatusOptions);
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Sr.no.</th>
            <th className="px-4 py-2">Facade Reference</th>
            <th className="px-4 py-2">Submission Date</th>
            <th className="px-4 py-2">Approval Date</th>
            <th className="px-4 py-2">Reference Link</th>
            <th className="px-4 py-2">Pending Issue</th>
            <th className="px-4 py-2" style={{ width: "200px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index}</td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1" />
              </td>
              <td className="border px-4 py-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border px-2 py-1"
                    value={selectedSubmissionDates[index - 1] ? selectedSubmissionDates[index - 1].toLocaleDateString('en-GB') : ''}
                    readOnly
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-gray-400 cursor-pointer"
                      onClick={() => {
                        document.getElementById(`submission-datepicker-${index}`).click();
                      }}
                    />
                  </div>
                </div>
                <DatePicker
                  id={`submission-datepicker-${index}`}
                  selected={selectedSubmissionDates[index - 1]}
                  onChange={(date) => handleSubmissionDateChange(date, index - 1)}
                  className="hidden"
                  dateFormat="dd/MM/yyyy"
                />
              </td>
              <td className="border px-4 py-2">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full border px-2 py-1"
                    value={selectedApprovalDates[index - 1] ? selectedApprovalDates[index - 1].toLocaleDateString('en-GB') : ''}
                    readOnly
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-2">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="text-gray-400 cursor-pointer"
                      onClick={() => {
                        document.getElementById(`approval-datepicker-${index}`).click();
                      }}
                    />
                  </div>
                </div>
                <DatePicker
                  id={`approval-datepicker-${index}`}
                  selected={selectedApprovalDates[index - 1]}
                  onChange={(date) => handleApprovalDateChange(date, index - 1)}
                  className="hidden"
                  dateFormat="dd/MM/yyyy"
                />
              </td>
              <td className="border px-4 py-2">
                <a href="#">Link{index}</a>
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  className="w-full border px-2 py-1"
                  value={pendingIssues[index - 1]}
                  onChange={(event) => handlePendingIssueChange(event, index - 1)}
                />
              </td>
              <td className="border px-4 py-2">
                <select
                  value={statusOptions[index - 1]}
                  onChange={(event) => handleStatusChange(event, index - 1)}
                  className={`w-full border px-2 py-1 ${statusOptions[index - 1] === 'Pending' ? 'bg-yellow-200' : statusOptions[index - 1] === 'Closed' ? 'bg-green-200' : 'bg-orange-200'}`}
                >
                  <option value="Pending" className="bg-yellow-200">Pending</option>
                  <option value="Closed" className="bg-green-200">Closed</option>
                  <option value="Open" className="bg-orange-200">Open</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DrawingApprovalTable;
