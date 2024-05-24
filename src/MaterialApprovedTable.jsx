import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const MaterialApprovedTable = () => {
  const [selectedSubmissionDates, setSelectedSubmissionDates] = useState([null, null, null]);
  const [selectedApprovalDates, setSelectedApprovalDates] = useState([null, null, null]);
  const [pendingIssues, setPendingIssues] = useState(['', '', '']);
  const [documentTypes, setDocumentTypes] = useState(['', '', '']);
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

  const handleDocumentTypeChange = (event, index) => {
    const newDocumentTypes = [...documentTypes];
    newDocumentTypes[index] = event.target.value;
    setDocumentTypes(newDocumentTypes);
  };

  const handleStatusChange = (event, index) => {
    const newStatusOptions = [...statusOptions];
    newStatusOptions[index] = event.target.value;
    setStatusOptions(newStatusOptions);
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-gray-800">
            <th className="px-4 py-2">Sr.No</th>
            <th className="px-4 py-2"> Element/Item </th>
            <th className="px-4 py-2">Document/Sample </th>
            <th className="px-4 py-2">Document Type </th> 
            <th className="px-4 py-2">BES Comment </th>
            <th className="px-4 py-2">Status </th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4].map((index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{index}</td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 resize-none" onChange={(event) => handlePendingIssueChange(event, index - 1)} value={pendingIssues[index - 1]} />
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 resize-none" />
              </td>
              <td className="border px-4 py-2">
                <select
                  value={documentTypes[index - 1]}
                  onChange={(event) => handleDocumentTypeChange(event, index - 1)}
                  className="w-full border px-2 py-1"
                >
                  <option value="">Select Document Type</option>
                  <option value="Sample">Sample</option>
                  <option value="Laboratory Tests">Laboratory Tests</option>
                  <option value="Information">Information</option>
                  <option value="Suppl-Certificate">Suppl-Certificate</option>
                </select>
              </td>
              <td className="border px-4 py-2">
                <input type="text" className="w-full border px-2 py-1 resize-none" />
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

export default MaterialApprovedTable;
