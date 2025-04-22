/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useCheckout } from "../check-in-out/useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkout, isCheckinOut } = useCheckout();
  return (
    <Button
      size="small"
      variation="primary"
      onClick={() => checkout(bookingId)}
      disabled={isCheckinOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
