import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AdminDashboard from '../../components/AdminSide/AdminDashboard/AdminDashboard';
import { MemoryRouter } from 'react-router';

describe('<Login />', () => {
  test('feAdminDashboard1', () => {
    render(<MemoryRouter><AdminDashboard /></MemoryRouter>);

    const addRoomButton = screen.getByTestId('addRoomButton');
    const adminDashboard = screen.getByTestId('adminDashboard');

    expect(addRoomButton).toBeTruthy();
    expect(adminDashboard).toBeTruthy();
  });
});