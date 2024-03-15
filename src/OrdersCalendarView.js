// // OrdersCalendarView.js

// OrdersCalendarView.js

import React, { useState } from 'react';

const OrdersCalendarView = () => {
  // Define your styles here
  const calendarContainerStyles = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f5f5f5',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    maxWidth: '100%', // Utilize full page width
  };

  const calendarStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: '10px',
  };

  const dateCellStyles = {
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const selectedDateOrdersStyles = {
    backgroundColor: '#3498db',
    color: '#fff',
  };

  // Dummy data for demonstration
  const ordersData = [
    { id: 1, customerName: 'Customer 1', orderDate: '2022-03-10' },
    { id: 2, customerName: 'Customer 2', orderDate: '2022-03-12' },
    // Add more orders data
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div style={calendarContainerStyles}>
      <h1>Orders Calendar View</h1>
      <div style={calendarStyles}>
        {/* Loop through dates and render date cells */}
        {/* For demonstration, let's assume you are working with March 2022 */}
        {Array.from({ length: 31 }, (_, index) => {
          const currentDate = new Date(2022, 2, index + 1); // Months are zero-based, so 2 represents March
          const isDateSelected = selectedDate && currentDate.toISOString().split('T')[0] === selectedDate;

          return (
            <div
              key={index}
              style={{
                ...dateCellStyles,
                backgroundColor: isDateSelected ? selectedDateOrdersStyles.backgroundColor : dateCellStyles.backgroundColor,
                color: isDateSelected ? selectedDateOrdersStyles.color : dateCellStyles.color,
              }}
              onClick={() => handleDateClick(currentDate.toISOString().split('T')[0])}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      {/* Display orders for the selected date */}
      {selectedDate && (
        <div style={selectedDateOrdersStyles}>
          <h2>Orders for {selectedDate}</h2>
          <ul>
            {ordersData
              .filter((order) => order.orderDate === selectedDate)
              .map((order) => (
                <li key={order.id}>{order.customerName}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const getStatusColor = (status) => {
  switch (status) {
    case 'Processing':
      return '#3498db'; // Blue
    case 'Shipped':
      return '#f39c12'; // Orange
    case 'Delivered':
      return '#2ecc71'; // Green
    default:
      return '#333'; // Default color
  }
};

export default OrdersCalendarView;
