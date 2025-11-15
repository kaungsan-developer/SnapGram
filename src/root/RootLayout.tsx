import { Outlet } from "react-router";
import { useAccountLogout } from "@/hooks/queryAndMutations/auth";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
const RootLayout = () => {
  const { mutate: logout, isPending } = useAccountLogout();

  return (
    <div>
      <header className="flex items-center p-4 border-b mb-4">
        <h1 className="text-xl font-bold flex-1">SnapGram</h1>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="destructive"
            size="sm"
            onClick={() => logout()}
            disabled={isPending}
          >
            {isPending ? "Logging out..." : "Logout"}
          </Button>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default RootLayout;
