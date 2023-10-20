const Page = () => {
  return (
    <div className="w-full h-screen grid place-items-center overflow-hidden">
      <div className="card">
        <div className={`card-inner`}>
          <div className="left-side ">Left</div>
          <div className="front">Front</div>
          <div className="back">Back</div>
          <div className="right-side">Right</div>
        </div>
      </div>
      <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
        {/* <!-- Base of the building --> */}
        <polygon points="50,100 50,20 100,0 150,20 150,100" fill="#808080" />

        {/* <!-- Roof --> */}
        <polygon points="50,20 150,20 100,0" fill="#FF4500" />

        {/* <!-- Front wall --> */}
        <polygon points="50,100 100,50 150,100" fill="#D3D3D3" />

        {/* <!-- Windows --> */}
        <rect x="65" y="70" width="20" height="20" fill="#ADD8E6" />
        <rect x="115" y="70" width="20" height="20" fill="#ADD8E6" />

        {/* <!-- Door --> */}
        <rect x="95" y="100" width="30" height="50" fill="#8B4513" />
      </svg>
    </div>
  );
};

export default Page;
