const name = "어쩌고";
const school = "저쩌고등학교";
const myclass = "2학년 3반";

export default function Profile() {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between">
      <div className="flex items-center">
        <div className="bg-gray-300 h-24 w-24 rounded rounded-full"></div>
        <div>
          <p className="text-[16px] ml-4 font-medium">안녕하세요.</p>
          <div className="flex my-1">
            <p className="ml-4">{name}</p>
            <p className="ml-1">선생님</p>
          </div>
          <div className="flex">
            <p className="text-[14px] font-medium ml-4 text-gray-500">
              {school}
            </p>
            <p className="text-[14px] font-medium ml-2 text-gray-500">·</p>
            <p className="text-[14px] font-medium ml-2 text-gray-500">
              {myclass}
            </p>
          </div>
        </div>
      </div>
      <div className="h-full bg-gray-100 p-4 mt-4 flex items-center justify-center">
        Quick Links
      </div>
    </div>
  );
}
