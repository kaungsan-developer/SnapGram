import { Outlet } from "react-router";
import { useAccountLogout } from "@/hooks/queryAndMutations/auth";
import { Button } from "@/components/ui/button";
const RootLayout = () => {
  const { mutate: logout, isPending } = useAccountLogout();
  return (
    <div>
      <Button
        className="absolute top-4 right-4"
        onClick={() => logout()}
        disabled={isPending}
      >
        {isPending ? "Logging out..." : "Logout"}
      </Button>
      <h1>Rootlayout</h1>
      <Outlet />
    </div>
  );
};

export default RootLayout;
