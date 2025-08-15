import { ArrowBigLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UseAuthStore } from "../store/UseAuthStore";

function Profile() {
  const navigate = useNavigate();
  const { auth, isLoading, logout } = UseAuthStore();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-base-200">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!auth) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-base-200 text-center">
        <h2 className="text-2xl font-bold text-error mb-4">Profile Not Found</h2>
        <p className="text-base-content/70">It looks like we couldn’t load your details.</p>
      </div>
    );
  }

  const handleLogout = () =>{
    logout();
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
      <div className="card w-full max-w-lg bg-base-100 shadow-2xl border border-base-300">
        <button onClick={()=>navigate(-1)} ><ArrowBigLeft/> </button>
        <div className="card-body items-center text-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  auth.name
                )}&background=random`}
                alt="User Avatar"
              />
            </div>
          </div>
          <h2 className="card-title mt-4 text-2xl">{auth.name}</h2>
          <p className="text-sm text-base-content/70">{auth.role}</p>
        </div>

        <div className="divider"></div>
        <div className="px-8 pb-6 space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Email:</span>
            <span>{auth.email}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold">Phone:</span>
            <span>{auth.phone || "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Joined:</span>
            <span>{new Date(auth.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        {/* <div className="card-actions justify-center pb-6">
          <button className="btn btn-primary btn-wide">Edit Profile</button>
        </div> */}
        <div className="card-actions justify-center pb-6">
          <button className="btn btn-warning btn-wide" onClick={handleLogout} >Logout</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
