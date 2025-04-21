import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading: isBooking } = useRecentBookings();
  const { stays, confirmedStays, isLoading: staysLoading } = useRecentStays();

  if (isBooking || staysLoading) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activities</div>
      <div>Chart stay durations</div>
      <div>Charts sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
