import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UseAuthStore } from "../store/UseAuthStore";

function ProtectedRoute({ children }) {
  const { profile, isLoading, isAuthenticated, hasFetchedProfile } = UseAuthStore();

  useEffect(() => {
    if (!hasFetchedProfile) { 
      profile();
    }
  }, [hasFetchedProfile, profile]);

  if (isLoading || !hasFetchedProfile) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}


export default ProtectedRoute