import Image from "next/image";

const Profile = () => {
  return (
    <div className="pb-52 md:pb-28 relative h-full">
      <div className="flex-col items-center h-full py-24">
        <div className="flex flex-wrap flex-col items-center space-x-4">
          <Image
            className="w-24 h-24 rounded-full xl:w-52 xl:h-52"
            src="/osman.png"
            alt="Dr. Rafiq Swash CEO"
            width={200}
            height={200}
          />
          <div className="flex flex-col space-y-4 text-center justify-center items-center">
            <div className="flex space-y-4">
              <div className="text-sm font-semibold lg:text-base mt-2">
                <h3 className="text-cyan-600">Founder & Believer</h3>
                <p>Osman</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs max-w-4xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              dignissimos cum! Ut optio necessitatibus illum tenetur provident
              doloribus sapiente totam soluta, placeat natus accusantium debitis
              dolore iure neque sequi eligendi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
